import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../components/Login/signin';
import SignUpScreen from '../components/Login/signup';
import SplashScreen from '../components/Login/splash';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Login" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
