import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'February 2021',
    data: ['Entry', 'Entry', 'Entry'],
  },
  {
    title: 'January 2021',
    data: ['Entry', 'Entry', 'Entry'],
  },
  {
    title: 'December 2020',
    data: ['Entry', 'Entry', 'Entry'],
  },
  {
    title: 'November 2020',
    data: ['Entry', 'Entry'],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Journal = () => {
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
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
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
    backgroundColor: 'rgba(247, 168, 184, 0.3)',
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
  title: {
    fontSize: 24,
  },
});

export default Journal;
