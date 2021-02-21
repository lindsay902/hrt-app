import React, { useState } from 'react';
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

const DATA = [
  {
    id: '3',
    date: 'Feb 18, 2021',
    entry: 'Here is my third journal entry',
  },
  {
    id: '2',
    date: 'Feb 12, 2021',
    entry: 'Here is my second journal entry',
  },
  {
    id: '1',
    date: 'Feb 1, 2021',
    entry: 'Here is my first journal entry',
  },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    <Text style={styles.date}>{item.date}</Text>
    <Text style={styles.entry}>{item.entry}</Text>
  </TouchableOpacity>
);

const Journal = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
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
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>
        <View style={styles.addEntryButton}>
          <Button
            title="Write"
            onPress={() => {
              navigation.navigate('AddJournalEntry');
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
