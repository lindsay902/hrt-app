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

let timeElapsed = Date.now();
let today = new Date(timeElapsed);
const dateToday = today.toDateString();
console.log(dateToday);

const Journal = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const result = getValues();
    setItems(result.items);
  }, []);

  let timeElapsed = Date.now();
  let today = new Date(timeElapsed);
  const dateToday = today.toDateString();
  console.log(dateToday);

  const getValues = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys((err, keys) => {
        if (err) {
          return [];
        } else {
          console.log(keys);
          return keys;
        }
      });
      let value = await AsyncStorage.multiGet(keys);
      value = value.map((result, i, store) => {
        let key = store[i][0];
        let entry = store[i][1];
        return {
          key: key,
          date: dateToday,
          entry: entry,
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
      />
    );
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
          />
        </View>
        <View style={styles.addEntryButton}>
          <Button
            title="Write"
            onPress={() => {
              navigation.navigate('JournalEntry');
            }}
          />
          <Button
            title="Post"
            onPress={() => {
              getValues();
            }}
          />
          <Button
            title="Entries"
            onPress={() => {
              navigation.navigate('JournalEntries');
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
