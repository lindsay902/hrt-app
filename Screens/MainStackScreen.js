import * as React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeStackScreen from './HomeStackScreen';
import MyPhotos from '../components/Profile/Photos/photos';
import Journal from '../components/Profile/Journal/journal';
import ResourcesScreen from './ResourcesScreen';

const Tab = createMaterialBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        // eslint-disable-next-line react-native/no-inline-styles
        barStyle={{ paddingBottom: 25, paddingTop: 15 }}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: 'black',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Journal"
        component={Journal}
        options={{
          tabBarLabel: 'Journal',
          tabBarColor: '#F7A8B8',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-pencil" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Photos"
        component={MyPhotos}
        options={{
          tabBarLabel: 'MyPhotos',
          tabBarColor: '#55CDFC',
          tabBarIcon: ({ color }) => (
            <Icon name="camera" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CommunityFeed"
        component={ResourcesScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarColor: '#F7A8B8',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-book" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
