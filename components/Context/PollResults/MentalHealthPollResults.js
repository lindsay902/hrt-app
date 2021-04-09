import React, { createContext, useContext, useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const MentalHealthPollContext = createContext('false');

const useMentalHealthPollResults = () => useContext(MentalHealthPollContext);

const MentalHealthPollContextProvider = ({ children }) => {
  const [mentalHealthPollResults, setMentalHealthPollResults] = useState(
    'false',
  );

  const mentalHealthPollCompleted = () => {
    if (mentalHealthPollResults === 'false') {
      setMentalHealthPollResults('true');
    }
  };

  useEffect(() => {
    if (mentalHealthPollResults !== 'false') {
      SecureStore.setItemAsync('MentalHealthPollResults', 'true');
    }
  }, [mentalHealthPollResults]);

  useEffect(() => {
    SecureStore.getItemAsync('MentalHealthPollResults').then(
      (pollBooleanResponse) => {
        if (pollBooleanResponse) {
          setMentalHealthPollResults(pollBooleanResponse);
        }
      },
    );
  }, []);

  return (
    <MentalHealthPollContext.Provider
      value={{
        mentalHealthPollResults,
        mentalHealthPollCompleted,
      }}
    >
      {children}
    </MentalHealthPollContext.Provider>
  );
};

const MentalHealthPollData = () => {
  const {
    mentalHealthPollResults,
    mentalHealthPollCompleted,
  } = useMentalHealthPollResults();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {mentalHealthPollResults === 'true' ? (
        <WebView
          source={{
            uri: 'https://my.nativeforms.com/QRzIVeD1jZms0QmJnek1Db/results',
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
                mentalHealthPollCompleted('true');
              }
            }
          }}
          source={{
            uri: 'https://my.nativeforms.com/QRzIVeD1jZms0QmJnek1Db',
          }}
        />
      )}
    </View>
  );
};

export default () => (
  <MentalHealthPollContextProvider>
    <MentalHealthPollData />
  </MentalHealthPollContextProvider>
);
