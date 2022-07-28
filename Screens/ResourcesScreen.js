import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import NonFictionBooks from '../components/community/non-fictionreads';
import FictionBooks from '../components/community/fictionreads';

export const ResourcesScreen = () => {
  const [loaded] = useFonts({
    HandleeRegular: require('../assets/fonts/Handlee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flexGrow: 1, backgroundColor: '#55CDFC' }}>
      <SafeAreaView style={{ marginBottom: '2%' }}>
        <Text style={styles.textStyle}>Library</Text>
      </SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1, height: 325 }}>
          <NonFictionBooks />
        </View>
        <View style={{ flex: 1, height: 325, marginTop: '5%' }}>
          <FictionBooks />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    alignSelf: 'center',
    paddingTop: 40,
  },
});

// export default Resources;
