import React from 'react';
import { WebView } from 'react-native-webview';

function Terms() {
  return (
    <WebView
      style={{ flex: 1 }}
      source={{
        uri: 'https://www.freeprivacypolicy.com/live/c4c3423a-5f2f-463d-aaff-745f1ba9f2c0',
      }}
    />
  );
}

export default Terms;
