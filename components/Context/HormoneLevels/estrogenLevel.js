import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AnimatedNumber from 'react-native-animated-numbers';
import { Icon } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

const EstrogenCounterContext = createContext(100);

const useEstrogenCounter = () => useContext(EstrogenCounterContext);

const EstrogenCounterContextProvider = ({ children }) => {
  const [estrogenCount, setEstrogenCount] = useState(100);

  const estrogenIncrement = () => {
    if (estrogenCount >= 0 && estrogenCount <= 350) {
      setEstrogenCount(estrogenCount + 1);
    }
  };

  const estrogenDecrement = () => {
    if (estrogenCount >= 0 && estrogenCount <= 350) {
      setEstrogenCount(estrogenCount - 1);
    }
  };

  useEffect(() => {
    if (estrogenCount !== 100) {
      SecureStore.setItemAsync('ESTROGENCOUNT', `${estrogenCount}`);
    }
  }, [estrogenCount]);

  useEffect(() => {
    SecureStore.getItemAsync('ESTROGENCOUNT').then((value) => {
      if (value) {
        console.log(value);
        setEstrogenCount(parseInt(value));
      }
    });
  }, []);

  return (
    <EstrogenCounterContext.Provider
      value={{ estrogenCount, estrogenIncrement, estrogenDecrement }}
    >
      {children}
    </EstrogenCounterContext.Provider>
  );
};

const EstrogenHormoneLevels = () => {
  const {
    estrogenCount,
    estrogenIncrement,
    estrogenDecrement,
  } = useEstrogenCounter();

  return (
    <View style={styles.hormones}>
      <Text style={{ fontSize: 15, marginBottom: 10 }}>Estradiol</Text>
      <AnimatedNumber
        animateToNumber={estrogenCount}
        fontStyle={{ fontSize: 40, fontWeight: 'bold' }}
      />
      <Text>pg/mL</Text>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          reverse
          name="arrow-down"
          type="material-community"
          color={'#2D2B2B'}
          size={15}
          onPress={() => estrogenDecrement()}
        />
        <Icon
          reverse
          name="arrow-up"
          type="material-community"
          color={'#2D2B2B'}
          size={15}
          onPress={() => estrogenIncrement()}
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
  <EstrogenCounterContextProvider>
    <EstrogenHormoneLevels />
  </EstrogenCounterContextProvider>
);
