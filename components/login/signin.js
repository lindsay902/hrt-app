import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, StyleSheet, Image, View } from 'react-native';
import About from './about';

const SignInScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#55CDFC', 'white', '#F7A8B8']}
      style={styles.appTitle}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Image source={require('../../assets/transformation.png')} />
      <View style={styles.container}>
        <View style={styles.button}>
          <Button
            title="Sign In"
            color="white"
            accessibilityLabel="Sign In"
            //temporarily redirecting to profile
            onPress={() => navigation.navigate('LoginScreen')}
          />
          <Button
            title="Sign Up"
            color="white"
            accessibilityLabel="Sign Up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </View>
        <About />
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
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 70,
    marginBottom: 40,
  },
});

export default SignInScreen;
