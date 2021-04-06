import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import EstrogenContextProvider from '../Context/HormoneLevels/estrogenLevel';
import EstrogenHormoneLevels from '../Context/HormoneLevels/estrogenLevel';
import TestosteroneContextProvider from '../Context/HormoneLevels/testosteroneLevel';
import TestosteroneHormoneLevels from '../Context/HormoneLevels/testosteroneLevel';
import PotassiumContextProvider from '../Context/HormoneLevels/potassiumLevel';
import PotassiumHormoneLevels from '../Context/HormoneLevels/potassiumLevel';
import { Icon } from 'react-native-elements';

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
            paddingTop: 20,
            paddingHorizontal: 70,
          }}
        >
          <Text style={{ textAlign: 'center' }}>
            For information on hormone levels and hormone therapy, talk to your
            health care provider.
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: -100 }}>
        <Text style={styles.textStyle}>Community Questions</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <View>
            <Image
              style={styles.image}
              source={require('../../assets/resources/polls/Symptoms.png')}
            />
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                navigation.navigate('SymptomsPoll');
              }}
            >
              <Text style={styles.participateButton}>Participate</Text>
            </TouchableOpacity>
          </View>
          <View>
            {/* <View style={{ marginBottom: 20 }}>
              <Icon name="head-heart" type="material-community" size={160} />
            </View> */}
            <Image
              style={styles.image}
              source={require('../../assets/resources/polls/MentalHealth.png')}
            />
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                navigation.navigate('MentalHealthPoll');
              }}
            >
              <Text style={styles.participateButton}>Participate</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={styles.image}
              source={require('../../assets/resources/polls/Beauty.png')}
            />
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                navigation.navigate('BeautyPoll');
              }}
            >
              <Text style={styles.participateButton}>Participate</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <Image
              style={styles.image}
              source={require('../../assets/resources/polls/Relationships.png')}
            />
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                navigation.navigate('RelationshipsPoll');
              }}
            >
              <Text style={styles.participateButton}>Participate</Text>
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
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: -30,
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 5,
    shadowColor: 'grey',
    shadowOpacity: 10,
  },
  textStyle: {
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  image: {
    width: 175,
    height: 175,
  },
  participateButton: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});

export default Home;
