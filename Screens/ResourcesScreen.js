import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import CommunityFeed from '../components/Community/communityfeed';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import NonFictionBooks from '../components/Community/non-fictionreads';
import FictionBooks from '../components/Community/fictionreads';

const ResourcesScreen = () => {
  const [loaded] = useFonts({
    HandleeRegular: require('../assets/fonts/Handlee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flexGrow: 1, backgroundColor: 'lightblue' }}>
      <SafeAreaView>
        <Text style={styles.textStyle}>Library</Text>
      </SafeAreaView>
      <View style={{ flexGrow: 1 }}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            marginHorizontal: 90,
          }}
        >
          <NonFictionBooks />
          <FictionBooks />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    alignSelf: 'center',
  },
});

export default ResourcesScreen;
