import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../../assets/preload/butterfly.png')}
    />
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});

export default Logo;
