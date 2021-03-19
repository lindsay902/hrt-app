import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import CommunityFeed from '../components/Community/communityfeed';
import { useFonts } from 'expo-font';

const ResourcesScreen = () => {
  const [loaded] = useFonts({
    HandleeRegular: require('../assets/fonts/Handlee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
      <SafeAreaView>
        <View style={styles.title}>
          <Text style={styles.textStyle}>Books & Podcasts</Text>
        </View>
      </SafeAreaView>
      <View style={{ flex: 1 }}>
        <CommunityFeed />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
  },
  textStyle: {
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    marginBottom: -30,
  },
});

export default ResourcesScreen;
