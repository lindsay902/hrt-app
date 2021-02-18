import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.text}>
      <Text style={styles.textBold}>About</Text>
      <Text>
        This app was made for trans women and trans men to track their hormone
        levels and log their progress along this journey.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginHorizontal: 75,
    marginVertical: 5,
  },
  textBold: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default About;
