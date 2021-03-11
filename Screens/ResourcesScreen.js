import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, StyleSheet, Image } from 'react-native';
import CommunityFeed from '../components/Community/communityfeed';

const ResourcesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'lightblue' }}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.title}
          source={require('../assets/booksandpodcasts.png')}
        />
        <CommunityFeed />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
});

export default ResourcesScreen;
