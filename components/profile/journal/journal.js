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
import JournalEntryScreen from '../../../Screens/JournalEntryScreen';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements';
import { Alert } from 'react-native';

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

  useEffect(() => {
    console.log('requestToServer');
    getValues();
  }, []);

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
        flex={1}
      />
    );
  };

  const removeValue = async (itemId) => {
    Alert.alert('Are you sure you want to delete this post?');
    try {
      await AsyncStorage.removeItem(itemId);
    } catch (err) {
      console.log('error');
    }
    console.log('Done.');
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
            <Button title="Close" onPress={closeEntry} />
            <JournalEntryScreen />
          </Modal>
        </View>
        <View style={styles.addEntryButton}>
          <Button
            title="Refresh Entries"
            onPress={() => {
              getValues();
            }}
          />
        </View>
        <View>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
            extraData={selectedId}
            ListFooterComponent={<View style={{ height: 20 }} />}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  search: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-end',
  },
  header: {
    justifyContent: 'flex-start',
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    flex: 1,
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
});

export default Journal;
