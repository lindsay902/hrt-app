import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native';

export default function About() {
  const [loaded] = useFonts({
    HandleeRegular: require('../../assets/fonts/Handlee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>About this App</Text>
        <Text style={styles.body}>
          This app is designed to be a space to track your hormone data, log how 
          you are feeling, upload photos, and partake in community questions.
        </Text>
        <Text style={styles.body}>
          This app does not collect any data (data is stored locally on your
          device) and it has been designed to be a safe space for you to log
          your progress with HRT. Community questions store response results on
          a third party app and data from these responses are intended only to
          be used for this app's community base. If you are a developer and
          would like to contribute to this app, I encourage you to reach out to
          me in the feedback section. I'm always looking for new ideas, and
          would love to have people who are a part of the community be involved
          in in this project going forward.
        </Text>
        <Text style={styles.body}>Thank you for your support!</Text>
        <Icon name="heart-outline" type="material-community" color="#F7A8B8" />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    paddingTop: 30,
  },
  body: {
    fontSize: 15,
    padding: 30,
  },
});
