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
import { set } from 'react-native-reanimated';

const clearAll = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('Could not delete');
  }
  console.log('Done.');
};

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.date}>{item.date}</Text>
    <Text style={styles.entry}>{item.entry}</Text>
  </TouchableOpacity>
);

const Journal = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [items, setItems] = useState([]);
  const [isEntryVisible, setEntryVisible] = useState(false);

  useEffect(() => {
    console.log('requestToServer');
    getValues();
  }, [selectedId]);

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
        <View style={styles.search}>
          <Image source={require('../../../assets/search.png')} />
        </View>
        <View style={styles.header}>
          <Image source={require('../../../assets/journal.png')} />
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
        <View style={styles.addEntryButton}>
          <Button title="Write" onPress={showEntry} />
          <Modal isVisible={isEntryVisible}>
            <JournalEntryScreen />
            <Button title="Close" onPress={closeEntry} />
          </Modal>
          <Button
            title="Render Post"
            onPress={() => {
              getValues();
            }}
          />
          <Button
            title="Clear"
            onPress={() => {
              clearAll();
            }}
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
    paddingTop: 10,
    paddingBottom: 20,
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
    justifyContent: 'center',
  },
});

export default Journal;
