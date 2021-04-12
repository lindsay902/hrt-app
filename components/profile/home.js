import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import EstrogenContextProvider from '../Context/HormoneLevels/estrogenLevel';
import EstrogenHormoneLevels from '../Context/HormoneLevels/estrogenLevel';
import TestosteroneContextProvider from '../Context/HormoneLevels/testosteroneLevel';
import TestosteroneHormoneLevels from '../Context/HormoneLevels/testosteroneLevel';
import PotassiumContextProvider from '../Context/HormoneLevels/potassiumLevel';
import PotassiumHormoneLevels from '../Context/HormoneLevels/potassiumLevel';
import { Icon } from 'react-native-elements';
import { Image } from 'react-native';

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
        <View
          style={{
            alignItems: 'center',
            paddingTop: '5%',
            paddingHorizontal: '25%',
          }}
        >
          <Text style={{ textAlign: 'center' }}>
            For information on hormone levels and hormone therapy, talk to your
            health care provider.
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: '-25%', marginBottom: '-5%' }}>
        <Text style={styles.textStyle}>Community Questions</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            width: 400,
            marginTop: '5%',
          }}
        >
          <View>
            <View style={{ marginBottom: 25 }}>
              <Icon
                name="clipboard-pulse-outline"
                type="material-community"
                size={140}
                color={'black'}
              />
            </View>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                navigation.navigate('SymptomsPoll');
              }}
            >
              <Text style={styles.participateButton}>Symptoms</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ marginBottom: 25 }}>
              <Icon
                name="head-heart"
                type="material-community"
                size={140}
                color={'black'}
              />
            </View>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                navigation.navigate('MentalHealthPoll');
              }}
            >
              <Text style={styles.participateButton}>Mental Health</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: '2%' }}>
            <View style={{ marginBottom: 25 }}>
              <Icon
                name="spa"
                type="material-community"
                size={140}
                color={'black'}
              />
            </View>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                navigation.navigate('BeautyPoll');
              }}
            >
              <Text style={styles.participateButton}>Beauty</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: '2%' }}>
            <View style={{ marginBottom: 25 }}>
              <Icon
                name="account-heart"
                type="material-community"
                size={140}
                color={'black'}
              />
            </View>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                navigation.navigate('RelationshipsPoll');
              }}
            >
              <Text style={styles.participateButton}>Relationships</Text>
            </TouchableOpacity>
          </View>
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
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '5%',
  },
  hormones: {
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  buttons: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: -30,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 5,
    shadowColor: 'black',
    shadowOpacity: 80,
  },
  textStyle: {
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    alignSelf: 'center',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  participateButton: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});

export default Home;
