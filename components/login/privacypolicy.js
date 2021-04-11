import React from 'react';
import { WebView } from 'react-native-webview';

function PrivacyPolicy({ navigation }) {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{
        uri:
          'https://www.freeprivacypolicy.com/live/076a4f49-b880-4769-a932-8c25941c7e1c',
      }}
    />
  );
}

export default PrivacyPolicy;
