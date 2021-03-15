import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import { Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import createRandomId from '../../Shared/createid';
import { RefreshControl } from 'react-native';

// const clearAll = async () => {
//   try {
//     await AsyncStorage.clear();
//   } catch (e) {
//     console.log('Could not delete');
//   }
//   console.log('Done.');
// };

const Journal = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [items, setItems] = useState([]);
  const [isEntryVisible, setEntryVisible] = useState(false);
  const [postText, setPostText] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    console.log('requestToServer');
    getValues();
  }, []);

  //maybe combine the two below
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
    closeEntry();
    //navigation.navigate('Journal');
  };

  const getValues = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys((err, keys) => {
        if (err) {
          return [];
        } else {
          return keys;
        }
      });
      let value = await AsyncStorage.multiGet(keys);
      value = value.map((result, i, store) => {
        let key = store[i][0];
        let entry = store[i][1];
        entry = JSON.parse(entry);
        return {
          key: key,
          date: entry.date,
          entry: entry.text,
        };
      });
      setItems(value);
    } catch (error) {
      console.log(error);
    }
  };

  const Item = ({ item, onPress, style }) => (
    <View style={[styles.item, style]}>
      <TouchableOpacity
        onPress={() => removeValue(item.key)}
        style={{ marginHorizontal: -15, marginTop: -15 }}
      >
        <Icon
          style={styles.trashButton}
          name={'delete'}
          color={'black'}
          size={20}
        />
      </TouchableOpacity>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.entry}>{item.entry}</Text>
    </View>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.key)}
        style={{ item }}
      />
    );
  };

  const removeValue = async (itemId) => {
    Alert.alert(
      'Delete post?',
      'Confirm post deletion',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => AsyncStorage.removeItem(itemId) },
      ],
      { cancelable: false },
    );
  };

  const showEntry = () => {
    setEntryVisible(true);
  };

  const closeEntry = () => {
    setEntryVisible(false);
  };

  return (
    <ImageBackground
      source={require('../../../assets/journalbackground.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView>
        <View style={styles.header}>
          <Image source={require('../../../assets/journal.png')} />
        </View>
        <View style={styles.addEntryButton}>
          <Icon
            reverse
            name="pen-plus"
            type="material-community"
            color="black"
            size={30}
            onPress={showEntry}
          />
          <Modal isVisible={isEntryVisible}>
            <View style={styles.modalContainer}>
              <Icon
                name="close"
                color={'hotpink'}
                reverse
                style={styles.closeModalButton}
                onPress={closeEntry}
              />
              <TextInput
                style={styles.textInput}
                returnKeyType={'next'}
                multiline={true}
                numberOfLines={200}
                placeholder="Your thoughts..."
                onChangeText={onChangeText}
              />
              {}
              <View style={styles.button}>
                <Button
                  type="submit"
                  title="Post"
                  color="white"
                  onSubmitEditing={onSubmitEditing}
                  onPress={handlePost}
                />
              </View>
            </View>
          </Modal>
        </View>
        <View>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            initialNumToRender={5}
            persistentScrollbar
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={getValues} />
            }
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'repeat',
  },
  header: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 15,
  },
  container: {
    marginHorizontal: 16,
  },
  item: {
    flexDirection: 'column',
    backgroundColor: 'rgba(247, 168, 184, 0.3)',
    borderRadius: 10,
    padding: 40,
    marginVertical: 8,
    marginHorizontal: 20,
  },
  trashButton: {
    alignSelf: 'flex-end',
  },
  sectionHeader: {
    fontSize: 20,
    color: '#515253',
    paddingLeft: 5,
    backgroundColor: 'lightgrey',
  },
  date: {
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
    marginLeft: -25,
    marginBottom: 20,
    marginTop: -20,
  },
  entry: {
    fontSize: 14,
  },
  flatlistStyle: {
    flexDirection: 'row',
  },
  addEntryButton: {
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
    borderRadius: 10,
    marginBottom: 150,
  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    // fontSize: 30,
    // fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  textInput: {
    height: 250,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    padding: 4,
    marginTop: 10,
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

export default Journal;
