import React, { createContext, useContext, useEffect, useState } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const BeautyPollContext = createContext('false');

const useBeautyPollResults = () => useContext(BeautyPollContext);

const BeautyPollContextProvider = ({ children }) => {
  const [beautyPollResults, setBeautyPollResults] = useState('false');

  const beautyPollCompleted = () => {
    if (beautyPollResults === 'false') {
      setBeautyPollResults('true');
    }
  };

  useEffect(() => {
    if (beautyPollResults !== 'false') {
      SecureStore.setItemAsync('BeautyPollResults', 'true');
    }
  }, [beautyPollResults]);

  useEffect(() => {
    SecureStore.getItemAsync('BeautyPollResults').then(
      (pollBooleanResponse) => {
        if (pollBooleanResponse) {
          console.log(pollBooleanResponse);
          setBeautyPollResults(pollBooleanResponse);
        }
      },
    );
  }, []);

  return (
    <BeautyPollContext.Provider
      value={{
        beautyPollResults,
        beautyPollCompleted,
      }}
    >
      {children}
    </BeautyPollContext.Provider>
  );
};

const BeautyPollData = () => {
  const { beautyPollResults, beautyPollCompleted } = useBeautyPollResults();

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {beautyPollResults === 'true' ? (
        <WebView
          source={{
            uri: 'https://my.nativeforms.com/QdxFHSC1jZms0QmJnek1Db/results',
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
                beautyPollCompleted('true');
              }
            }
          }}
          source={{
            uri: 'https://my.nativeforms.com/QdxFHSC1jZms0QmJnek1Db',
          }}
        />
      )}
    </View>
  );
};

export default () => (
  <BeautyPollContextProvider>
    <BeautyPollData />
  </BeautyPollContextProvider>
);
