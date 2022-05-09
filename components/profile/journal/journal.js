import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import { Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import createRandomId from '../../shared/createid';
import { RefreshControl } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

const Journal = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [items, setItems] = useState([]);
  const [isEntryVisible, setEntryVisible] = useState(false);
  const [postText, setPostText] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const sortedItems = items.sort(function (a, b) {
    var dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  useEffect(() => {
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
    } catch (e) {
      console.log(`Post did not save error:${e}`);
    }
  };

  const handlePost = async () => {
    await storePosts().then(getValues());
    closeEntry();
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
        {
          text: 'OK',
          onPress: () => AsyncStorage.removeItem(itemId).then(getValues()),
        },
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

  const [loaded] = useFonts({
    HandleeRegular: require('../../../assets/fonts/Handlee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ImageBackground
      source={require('../../../assets/preload/journalbackground.png')}
      style={styles.backgroundImage}
    >
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <View style={styles.header}>
          <Text style={{ fontFamily: 'HandleeRegular', fontSize: 30 }}>
            My Journal
          </Text>
        </View>
        <Text style={{ textAlign: 'center', paddingHorizontal: 55 }}>
          A place to record any changes to your physical or mental health
        </Text>
      </SafeAreaView>
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
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 40 }}
          data={sortedItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          initialNumToRender={6}
          persistentScrollbar
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={getValues} />
          }
        />
      </View>
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
    paddingTop: 40,
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
    fontFamily: 'HandleeRegular',
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
    marginBottom: 250,
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
