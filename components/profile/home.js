import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import { Agenda, Calendar } from 'react-native-calendars';
import Schedule from '../Calendar/calendar';
import MyCalendar from '../Calendar/calendar';
import CountdownTimer from './Charts/countdown';

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#55CDFC', 'white', '#F7A8B8']}
      style={styles.appTitle}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View style={styles.calendar}>
          <Image
            style={styles.calendarText}
            source={require('../../assets/calendar.png')}
          />
        </View>
        <Schedule />
        <View style={styles.container}>
          <Text>My Hormone Levels</Text>
          <Text>My Insights</Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: 500,
    height: 300,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  calendar: {
    alignItems: 'center',
  },
  calendarText: {
    width: 150,
    height: 75,
  },
  buttons: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default Home;
