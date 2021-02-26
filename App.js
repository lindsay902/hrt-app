import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SignUpScreen from './components/login/signup';
import SignInScreen from './components/login/signinscreen';
import Journal from './components/profile/journal/journal';
import LoginScreen from './components/login/login';
import Home from './components/profile/home';
import CommunityFeed from './components/community/communityfeed';
import JournalEntry from './components/profile/journal/journalEntryItem';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

//add photos, journal entry, progress chart

function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      labelStyle={{ fontSize: 12 }}
      barstyle={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarLabel: 'Journal',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CommunityFeed"
        component={CommunityFeed}
        options={{
          tabBarLabel: 'Resources',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer mode="modal">
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="JournalEntry" component={JournalEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
