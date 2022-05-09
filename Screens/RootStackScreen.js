import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../components/login/splash';
import PrivacyPolicy from '../components/login/privacypolicy';
import Terms from '../components/login/terms';
import DrawerNavigationScreen from './DrawerNavigationScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator mode="modal">
    <RootStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <RootStack.Screen name="Terms" component={Terms} />
    <RootStack.Screen
      name="DrawerNavigationScreen"
      component={DrawerNavigationScreen}
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;
