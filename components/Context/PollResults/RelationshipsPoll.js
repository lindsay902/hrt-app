import React, { createContext, useContext, useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const RelationshipsPollContext = createContext('false');

const useRelationshipsPollResults = () => useContext(RelationshipsPollContext);

const RelationshipsPollContextProvider = ({ children }) => {
  const [relationshipsPollResults, setRelationshipsPollResults] = useState(
    'false',
  );

  const relationshipsPollCompleted = () => {
    if (relationshipsPollResults === 'false') {
      setRelationshipsPollResults('true');
    }
  };

  useEffect(() => {
    if (relationshipsPollResults !== 'false') {
      SecureStore.setItemAsync('RelationshipsPollResults', 'true');
    }
  }, [relationshipsPollResults]);

  useEffect(() => {
    SecureStore.getItemAsync('RelationshipsPollResults').then(
      (pollBooleanResponse) => {
        if (pollBooleanResponse) {
          console.log(pollBooleanResponse);
          setRelationshipsPollResults(pollBooleanResponse);
        }
      },
    );
  }, []);

  return (
    <RelationshipsPollContext.Provider
      value={{
        relationshipsPollResults,
        relationshipsPollCompleted,
      }}
    >
      {children}
    </RelationshipsPollContext.Provider>
  );
};

const RelationshipsPollData = () => {
  const {
    relationshipsPollResults,
    relationshipsPollCompleted,
  } = useRelationshipsPollResults();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {relationshipsPollResults === 'true' ? (
        <WebView
          source={{
            uri: 'https://my.nativeforms.com/xU1aS1jZms0QmJnek1Db/results',
          }}
        />
      ) : (
        <WebView
          onMessage={(event) => {
            const eventJSON = JSON.parse(event.nativeEvent.data);

            if (eventJSON.nf_event) {
              const { event, form, json } = eventJSON.nf_event;

              if (event === 'form_send') {
                console.log(form); // form responses

                console.log(json); // JSON representation of the form
                //console.log(formCompleted);
                relationshipsPollCompleted('true');
              }
            }
          }}
          source={{
            uri: 'https://my.nativeforms.com/xU1aS1jZms0QmJnek1Db',
          }}
        />
      )}
    </View>
  );
};

export default () => (
  <RelationshipsPollContextProvider>
    <RelationshipsPollData />
  </RelationshipsPollContextProvider>
);
