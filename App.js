import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SettingsStackScreen from './Screens/SettingsScreen';
import Main from './Screens/MainStackScreen';
import NavDrawer from './components/Shared/drawercontent';
import ProfileScreen from './Screens/ProfileScreen';
import SupportStackScreen from './Screens/SupportScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer mode="modal">
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <NavDrawer {...props} />}
      >
        <Drawer.Screen name="HomeStackScreen" component={Main} />
        <Drawer.Screen
          name="SettingsStackScreen"
          component={SettingsStackScreen}
        />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <Drawer.Screen name="Support" component={SupportStackScreen} />
      </Drawer.Navigator>
      {/*<Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="JournalEntry" component={JournalEntry} />
      </Stack.Navigator>
      {/*add the root stack */}
    </NavigationContainer>
  );
}

export default App;
