import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../components/Login/splash';
import PrivacyPolicy from '../components/Login/privacypolicy';
import Terms from '../components/Login/terms';

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
    {/* <RootStack.Screen name="SignInScreen" component={SignInScreen} /> */}
    {/* <RootStack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
  </RootStack.Navigator>
);

export default RootStackScreen;
