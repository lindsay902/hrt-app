import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Button } from 'react-native-paper';
import EstrogenContextProvider from '../Context/HormoneLevels/estrogenLevel';
import EstrogenHormoneLevels from '../Context/HormoneLevels/estrogenLevel';
import TestosteroneContextProvider from '../Context/HormoneLevels/testosteroneLevel';
import TestosteroneHormoneLevels from '../Context/HormoneLevels/testosteroneLevel';
import PotassiumContextProvider from '../Context/HormoneLevels/potassiumLevel';
import PotassiumHormoneLevels from '../Context/HormoneLevels/potassiumLevel';
import SvgComponent from '../Community/Polls/symptomsPoll';

const Home = ({ navigation }) => {
  const [loaded] = useFonts({
    HandleeRegular: require('../../assets/fonts/Handlee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#55CDFC', 'white', '#F7A8B8']}
      style={styles.appTitle}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.textStyle}>My Hormone Levels</Text>
        <View style={styles.hormoneContainer}>
          <EstrogenContextProvider>
            <EstrogenHormoneLevels />
          </EstrogenContextProvider>
          <TestosteroneContextProvider>
            <TestosteroneHormoneLevels />
          </TestosteroneContextProvider>
          <PotassiumContextProvider>
            <PotassiumHormoneLevels />
          </PotassiumContextProvider>
        </View>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Text>Information + sources</Text>
          <Text>here is some</Text>
          <Text>Information!</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textStyle}>Community Questions</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>Test1</Text>
          <Text>Test2</Text>
          <Text>Test3</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    flex: 1,
    alignItems: 'center',
  },
  hormoneContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  hormones: {
    marginLeft: 25,
    marginRight: 25,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttons: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
    backgroundColor: '#2D2B2B',
    borderRadius: 10,
  },
  textStyle: {
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    alignSelf: 'center',
    paddingBottom: 10,
  },
});

export default Home;
