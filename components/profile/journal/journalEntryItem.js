import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import * as Random from 'expo-random';
import { TextInput } from 'react-native-gesture-handler';
import createRandomId from '../../shared/createid';

const storePosts = async (post) => {
  try {
    const jsonValue = JSON.stringify(post);
    console.log(jsonValue);
    await AsyncStorage.setItem('key', jsonValue);
    console.log('post saved');
  } catch (e) {
    console.log('Post did not save');
  }
};

//let randomKey = new Random.getRandomBytes(5);
let randomKey = createRandomId();

let timeElapsed = Date.now();
let today = new Date(timeElapsed);
const dateToday = today.toDateString();

const JournalEntry = () => {
  const [post, onChangePosts] = useState({
    key: '',
    date: '',
    entry: '',
  });

  return (
    <ImageBackground
      source={require('../../../assets/journalbackground.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Add a post:</Text>
        {}
        <TextInput
          style={styles.textInput}
          multiline
          numberOfLines={100}
          clearTextOnFocus
          placeholder="Your thoughts..."
          //onChangeText={(entry) => onChangePosts({ newKey, dateToday, entry })}
          onChangeText={(text) => {
            const newPost = {
              key: randomKey,
              date: dateToday,
              entry: text,
            };
            onChangePosts(newPost);
            console.log(newPost);
          }}
        />
        {}
        <View style={styles.button}>
          <Button
            title="Post"
            color="white"
            onPress={() => {
              storePosts(post);
              onChangePosts('');
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 10,
    backgroundColor: 'lightpink',
    padding: 8,
  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  textInput: {
    height: 250,
    borderColor: 'gray',
    borderWidth: 0.5,
    backgroundColor: '#ffffff',
    padding: 4,
  },
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default JournalEntry;
