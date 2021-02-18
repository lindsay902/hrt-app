import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/home/homeScreen';
import ProfileScreen from './components/profile/profileScreen';
import Journal from './components/profile/journal/journal';
import ProgressChart from './components/profile/progressChart';
import Header from './components/shared/header';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        //screenOptions={{
        //headerStyle: {
        //backgroundColor: 'transparent',
        //},
        //}}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome!' }}
        />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Journal" component={Journal} />
        <Stack.Screen name="ProgressChart" component={ProgressChart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
