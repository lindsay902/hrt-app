import React, { useState } from 'react';
import { Button, View, StyleSheet, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';

let loggedIn = false;
console.log(loggedIn);

async function getValueFor(key, value) {
  let resultForUsername = await SecureStore.getItemAsync(key);
  let resultForPassword = await SecureStore.getItemAsync(value);
  if (resultForUsername && resultForPassword) {
    loggedIn = true;
    console.log(loggedIn);
    return GoToProfile();
  } else {
    // eslint-disable-next-line no-alert
    alert('Sorry - your username or password is incorrect.');
  }
}

const GoToProfile = ({ navigation }) => {
  navigation.navigate('HomeScreen');
};

const LoginScreen = ({ navigation }) => {
  const [key, onChangeKey] = useState('');
  const [value, onChangeValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Username"
        onChangeText={onChangeKey}
        value={key}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={onChangeValue}
        value={value}
      />
      <Button
        title="Login"
        onPress={() => {
          getValueFor(key, value);
          onChangeKey('');
          onChangeValue('');
        }}
      />
      <Button
        title="Go To Profile"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};

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

export default LoginScreen;
