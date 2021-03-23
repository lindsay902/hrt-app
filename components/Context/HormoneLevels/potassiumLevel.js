import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AnimatedNumber from 'react-native-animated-numbers';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PotassiumCounterContext = createContext(20);

const usePotassiumCounter = () => useContext(PotassiumCounterContext);

const PotassiumCounterContextProvider = ({ children }) => {
  const [potassiumCount, setPotassiumCount] = useState(20);

  const potassiumIncrement = () => {
    if (potassiumCount >= 0 && potassiumCount <= 350) {
      setPotassiumCount(potassiumCount + 1);
    }
  };

  const potassiumDecrement = () => {
    if (potassiumCount >= 0 && potassiumCount <= 350) {
      setPotassiumCount(potassiumCount - 1);
    }
  };

  useEffect(() => {
    if (potassiumCount !== 20) {
      AsyncStorage.setItem('POTASSIUMCOUNT', `${potassiumCount}`);
    }
  }, [potassiumCount]);

  useEffect(() => {
    AsyncStorage.getItem('POTASSIUMCOUNT').then((value) => {
      if (value) {
        console.log(value);
        setPotassiumCount(parseInt(value));
      }
    });
  }, []);

  return (
    <PotassiumCounterContext.Provider
      value={{ potassiumCount, potassiumIncrement, potassiumDecrement }}
    >
      {children}
    </PotassiumCounterContext.Provider>
  );
};

const PotassiumHormoneLevels = () => {
  const {
    potassiumCount,
    potassiumIncrement,
    potassiumDecrement,
  } = usePotassiumCounter();

  return (
    <View style={styles.hormones}>
      <Text style={{ fontSize: 15, marginBottom: 10 }}>Potassium</Text>
      <AnimatedNumber
        animateToNumber={potassiumCount}
        fontStyle={{ fontSize: 40, fontWeight: 'bold' }}
      />
      <View style={{ flexDirection: 'row' }}>
        <Icon
          reverse
          name="arrow-down"
          type="material-community"
          color={'#2D2B2B'}
          size={15}
          onPress={() => potassiumDecrement()}
        />
        <Icon
          reverse
          name="arrow-up"
          type="material-community"
          color={'#2D2B2B'}
          size={15}
          onPress={() => potassiumIncrement()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hormoneContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  hormones: {
    marginLeft: 25,
    marginRight: 25,
    alignItems: 'center',
  },
});

export default () => (
  <PotassiumCounterContextProvider>
    <PotassiumHormoneLevels />
  </PotassiumCounterContextProvider>
);