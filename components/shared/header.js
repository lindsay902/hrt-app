import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <LinearGradient
      colors={['purple', 'white']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Text>Home Screen</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
