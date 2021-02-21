import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export default function SignUpScreen(props) {
  const [key, onChangeKey] = useState('');
  const [value, onChangeValue] = useState('');

  return (
    <View style={styles.container}>
      <Text>Create a username and password</Text>
      {}
      <TextInput
        style={styles.textInput}
        clearTextOnFocus
        placeholder="Username"
        onChangeText={(text) => onChangeKey(text)}
        value={key}
      />
      <TextInput
        style={styles.textInput}
        clearTextOnFocus
        placeholder="Password"
        onChangeText={(text) => onChangeValue(text)}
        value={value}
      />
      {}
      <Button
        title="Sign Up"
        onPress={() => {
          save(key, value);
          onChangeKey('');
          onChangeValue('');
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 4,
  },
});
