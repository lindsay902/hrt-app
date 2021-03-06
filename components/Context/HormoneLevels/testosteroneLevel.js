import React, { createContext, useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AnimatedNumber from 'react-native-animated-numbers';
import { Icon } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

const TestosteroneCounterContext = createContext(400);

const useTestosteroneCounter = () => useContext(TestosteroneCounterContext);

const TestosteroneCounterContextProvider = ({ children }) => {
  const [testosteroneCount, setTestosteroneCount] = useState(400);

  const testosteroneIncrement = () => {
    if (testosteroneCount >= 0 && testosteroneCount <= 500) {
      setTestosteroneCount(testosteroneCount + 1);
    }
  };

  const testosteroneDecrement = () => {
    if (testosteroneCount >= 0 && testosteroneCount <= 1300) {
      setTestosteroneCount(testosteroneCount - 1);
    }
  };

  useEffect(() => {
    if (testosteroneCount !== 400) {
      SecureStore.setItemAsync('TESTOSTERONECOUNT', `${testosteroneCount}`);
    }
  }, [testosteroneCount]);

  useEffect(() => {
    SecureStore.getItemAsync('TESTOSTERONECOUNT').then((value) => {
      if (value) {
        setTestosteroneCount(parseInt(value));
      }
    });
  }, []);

  return (
    <TestosteroneCounterContext.Provider
      value={{
        testosteroneCount,
        testosteroneIncrement,
        testosteroneDecrement,
      }}
    >
      {children}
    </TestosteroneCounterContext.Provider>
  );
};

const TestosteroneHormoneLevels = () => {
  const {
    testosteroneCount,
    testosteroneIncrement,
    testosteroneDecrement,
  } = useTestosteroneCounter();

  return (
    <View style={styles.hormones}>
      <Text style={{ fontSize: 15, marginBottom: 10 }}>Testosterone</Text>
      <AnimatedNumber
        animateToNumber={testosteroneCount}
        fontStyle={{ fontSize: 40, fontWeight: 'bold' }}
      />
      <Text>ng/dL</Text>
      <View style={{ flexDirection: 'row' }}>
        <Icon
          reverse
          name="arrow-down"
          type="material-community"
          color={'#2D2B2B'}
          size={15}
          onPress={() => testosteroneDecrement()}
        />
        <Icon
          reverse
          name="arrow-up"
          type="material-community"
          color={'#2D2B2B'}
          size={15}
          onPress={() => testosteroneIncrement()}
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
    marginLeft: '5%',
    marginRight: '5%',
    alignItems: 'center',
  },
});

export default () => (
  <TestosteroneCounterContextProvider>
    <TestosteroneHormoneLevels />
  </TestosteroneCounterContextProvider>
);
