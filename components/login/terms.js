import React from 'react';
import { WebView } from 'react-native-webview';

function Terms(props) {
  return (
    <WebView
      source={{
        uri:
          'https://app.termly.io/builder/websites/833874/documents/1133818/Final%20Details/Version%20Date',
      }}
    />
  );
}

export default Terms;
