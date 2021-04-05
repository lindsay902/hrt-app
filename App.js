import 'react-native-gesture-handler';
import React, { useEffect, useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Screens/MainStackScreen';
import NavDrawer from './components/Shared/drawercontent';
import ProfileScreen from './Screens/ProfileScreen';
import SupportStackScreen from './Screens/SupportScreen';
import RootStackScreen from './Screens/RootStackScreen';
import { ActivityIndicator } from 'react-native';
import { View } from 'react-native';
import { AuthContext } from './components/Context/context';
import AboutStackScreen from './Screens/AboutScreen';
import FeedbackStackScreen from './Screens/FeedbackStackScreen';

const Drawer = createDrawerNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('fhdksf');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('fhdksf');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer mode="modal">
        {userToken !== null ? (
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <NavDrawer {...props} />}
          >
            <Drawer.Screen name="HomeStackScreen" component={Main} />
            <Drawer.Screen
              name="FeedbackStackScreen"
              component={FeedbackStackScreen}
            />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            <Drawer.Screen name="Support" component={SupportStackScreen} />
            <Drawer.Screen
              name="AboutStackScreen"
              component={AboutStackScreen}
            />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
