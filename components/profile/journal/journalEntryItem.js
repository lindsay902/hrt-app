import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import createRandomId from '../../Shared/createid';

const JournalEntry = () => {
  const [postText, setPostText] = useState('');

  const onChangeText = (text) => setPostText(text);

  const onSubmitEditing = () => {
    if (!postText) {
      return;
    } else {
      storePosts(postText);
      setPostText('');
    }
  };

  const storePosts = async () => {
    try {
      let postToSave = {
        text: postText,
      };
      let today = new Date(Date.now());
      const dateToday = today.toDateString();
      let randomKey = createRandomId();
      randomKey = randomKey.toString();
      postToSave.date = dateToday;
      await AsyncStorage.setItem(randomKey, JSON.stringify(postToSave));
      console.log('post saved');
    } catch (e) {
      console.log('Post did not save');
    }
  };

  const handlePost = async (navigation) => {
    await storePosts();
    //navigation.navigate('Journal');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add a post:</Text>
      {}
      <TextInput
        style={styles.textInput}
        multiline
        numberOfLines={100}
        clearTextOnFocus
        placeholder="Your thoughts..."
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
      />
      {}
      <View style={styles.button}>
        <Button title="Post" color="white" onPress={handlePost} />
      </View>
    </View>
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
