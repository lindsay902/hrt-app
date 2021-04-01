import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

export default function BeautyPoll() {
  const initialHTMLContent = `  
  <!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Transformation App Poll 1</title> <style> html, body { height: 100%; min-height: 100%; padding: 0; margin: 0; width: 100%; } </style> </head> <body> <iframe id="native-forms" frameborder="0" width="100%" height="100%" style="border: none; width: 100%; height: 100%;" ></iframe> <script> function queryStringToJSON() { const pairs = window.location.search.slice(1).split('&'); const result = {}; pairs.forEach(pair => { pair = pair.split('='); result[pair[0]] = decodeURIComponent(pair[1] || ''); }); return result; } function addQueryToURL(url, queryObject) { Object.keys(queryObject).forEach(key => { if (queryObject[key]) { url += url.indexOf('?') > -1 ? '&' : '?'; url += encodeURIComponent(key) + '=' + encodeURIComponent(queryObject[key]); } }); return url; } const FORM_URL = 'https://my.nativeforms.com/wY5JUWj1jZms0QmJnek1Db'; const query = queryStringToJSON(); const iframe = document.getElementById('native-forms'); iframe.src = addQueryToURL(FORM_URL, query); </script> </body> </html>`;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WebView
        originWhitelist={['*']}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{
          html: initialHTMLContent,
        }}
      />
    </View>
  );
}
