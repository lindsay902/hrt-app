import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button
        title="My Progress"
        onPress={() => navigation.navigate('ProgressChart')}
      />
      <Button
        title="My Journal"
        onPress={() => navigation.navigate('Journal')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProfileScreen;
