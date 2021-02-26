import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import createRandomId from '../../shared/createid';

const JournalEntry = () => {
  const [post, setPost] = useState('');

  const onChangeText = (text) => setPost(text);

  const onSubmitEditing = () => {
    if (!post) {
      return;
    } else {
      storePosts(post);
      setPost('');
    }
  };

  const storePosts = async () => {
    try {
      let randomKey = createRandomId();
      randomKey = randomKey.toString();
      await AsyncStorage.setItem(randomKey, post);
      console.log('post saved');
    } catch (e) {
      console.log('Post did not save');
    }
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
        <Button
          title="Post"
          color="white"
          onPress={() => {
            storePosts(post);
          }}
        />
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
