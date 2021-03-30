import React from 'react';
import { StyleSheet, View } from 'react-native';
import NonFictionBooks from './non-fictionreads';
import FictionBooks from './fictionreads';

const CommunityFeed = () => {
  return (
    <View style={styles.viewPager}>
      <NonFictionBooks />
      <FictionBooks />
    </View>
  );
};

const styles = StyleSheet.create({
  
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CommunityFeed;
