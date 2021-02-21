import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#55CDFC', 'white', '#F7A8B8']}
      style={styles.appTitle}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.hormoneTracking}>
          <Button
            title="Hormones and Tracking"
            onPress={() => navigation.navigate('ProgressChart')}
          />
        </View>
        <View style={styles.myCalendar}>
          <Button
            title="My Calendar"
            onPress={() => navigation.navigate('Journal')}
          />
        </View>
        <View style={styles.resources}>
          <Button
            title="Resources"
            onPress={() => navigation.navigate('Journal')}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: 500,
    height: 500,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  hormoneTracking: {
    flex: 1,
    width: 100,
    height: 100,
    marginTop: 20,
  },
  myCalendar: {
    flex: 1,
    width: 100,
    height: 100,
    flexGrow: 1,
  },
  resources: {
    flex: 1,
    width: 100,
    height: 100,
    flexGrow: 2,
  },
});

export default HomeScreen;
