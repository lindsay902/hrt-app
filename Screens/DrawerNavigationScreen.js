import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavDrawer from '../components/Shared/drawercontent';
import Main from './MainStackScreen';
import FeedbackStackScreen from './FeedbackStackScreen';
import SupportStackScreen from './SupportScreen';
import AboutStackScreen from './AboutScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigationScreen(props) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <NavDrawer {...props} />}
    >
      <Drawer.Screen name="HomeStackScreen" component={Main} />
      <Drawer.Screen
        name="FeedbackStackScreen"
        component={FeedbackStackScreen}
      />
      <Drawer.Screen name="Support" component={SupportStackScreen} />
      <Drawer.Screen name="AboutStackScreen" component={AboutStackScreen} />
    </Drawer.Navigator>
  );
}
