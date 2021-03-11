import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import Schedule from '../Calendar/calendar';
import AnimatedNumber from 'react-native-animated-numbers';
import { Icon } from 'react-native-elements';

const Home = ({ navigation }) => {
  const [animateToNumber, setAnimateToNumber] = useState(100);

  const increase = () => {
    setAnimateToNumber(animateToNumber + 1);
  };

  const decrease = () => {
    setAnimateToNumber(animateToNumber - 1);
  };

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
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flexgrow: 1,
                marginLeft: 35,
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <AnimatedNumber
                animateToNumber={animateToNumber}
                fontStyle={{ fontSize: 50, fontWeight: 'bold' }}
              />
              <View style={{ flexDirection: 'row' }}>
                <Icon
                  reverse
                  name="fa-arrow-down"
                  type="font-awesome"
                  onPress={decrease}
                  size={15}
                />
                <Icon reverse name="add" onPress={increase} size={15} />
              </View>
            </View>
            <Text style={{ flexGrow: 2 }}>Future Carousel</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: -20 }}>
            <Text style={{ flexGrow: 1, marginLeft: 25 }}>My Insights</Text>
            <Text style={{ flexGrow: 2 }}>Future Carousel</Text>
          </View>
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
    marginLeft: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -30,
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
