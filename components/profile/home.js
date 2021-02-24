import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Button, StyleSheet, Image, SafeAreaView } from 'react-native';
import CountdownTimer from './charts/countdown';

const Home = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#55CDFC', 'white', '#F7A8B8']}
      style={styles.appTitle}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require('../../assets/butterfly.png')}
            style={styles.logo}
          />
          <CountdownTimer />
          <View style={styles.buttons}>
            <Button
              title="My Progress"
              color="white"
              onPress={() => navigation.navigate('ProgressChartHRT')}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="My Journal"
              color="white"
              onPress={() => navigation.navigate('Journal')}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="Community"
              color="white"
              onPress={() => navigation.navigate('CommunityFeed')}
            />
          </View>
          <View style={styles.buttons}>
            <Button
              title="Profile"
              color="white"
              onPress={() => navigation.navigate('MySettings')}
            />
          </View>
        </View>
      </SafeAreaView>
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
  logo: {
    width: 100,
    height: 100,
  },
  buttons: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default Home;
