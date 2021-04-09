import React, { createContext, useContext, useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const SymptomsPollContext = createContext('false');

const useSymptomsPollResults = () => useContext(SymptomsPollContext);

const SymptomsPollContextProvider = ({ children }) => {
  const [symptomsPollResults, setSymptomsPollResults] = useState('false');

  const symptomsPollCompleted = () => {
    if (symptomsPollResults === 'false') {
      setSymptomsPollResults('true');
    }
  };

  useEffect(() => {
    if (symptomsPollResults !== 'false') {
      SecureStore.setItemAsync('SymptomsPollResults', 'true');
    }
  }, [symptomsPollResults]);

  useEffect(() => {
    SecureStore.getItemAsync('SymptomsPollResults').then(
      (pollBooleanResponse) => {
        if (pollBooleanResponse) {
          setSymptomsPollResults(pollBooleanResponse);
        }
      },
    );
  }, []);

  return (
    <SymptomsPollContext.Provider
      value={{
        symptomsPollResults,
        symptomsPollCompleted,
      }}
    >
      {children}
    </SymptomsPollContext.Provider>
  );
};

const SymptomsPollData = () => {
  const {
    symptomsPollResults,
    symptomsPollCompleted,
  } = useSymptomsPollResults();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {symptomsPollResults === 'true' ? (
        <WebView
          source={{
            uri: 'https://my.nativeforms.com/gFUap3Yn1jZms0QmJnek1Db/results',
          }}
        />
      ) : (
        <WebView
          onMessage={(event) => {
            const eventJSON = JSON.parse(event.nativeEvent.data);

            if (eventJSON.nf_event) {
              const { event, form, json } = eventJSON.nf_event;

              if (event === 'form_send') {
                //console.log(form); // form responses
                //console.log(json); // JSON representation of the form
                symptomsPollCompleted('true');
              }
            }
          }}
          source={{
            uri: 'https://my.nativeforms.com/gFUap3Yn1jZms0QmJnek1Db',
          }}
        />
      )}
    </View>
  );
};

export default () => (
  <SymptomsPollContextProvider>
    <SymptomsPollData />
  </SymptomsPollContextProvider>
);
