import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/profile/homeScreen';
import SignUpScreen from './components/login/signup';
import SignInScreen from './components/login/signinscreen';
import AddJournalEntry from './components/profile/journal/addJournalEntry';
import Journal from './components/profile/journal/journal';
import ProgressChart from './components/profile/progressChart';
import LoginScreen from './components/login/login';
import Logo from './components/shared/logo';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          initialParams={{ loggedIn: true }}
          options={{
            headerTitle: (props) => <Logo {...props} />,
            headerStyle: {
              backgroundColor: '#55CDFC',
            },
          }}
        />
        <Stack.Screen name="Journal" component={Journal} />
        <Stack.Screen name="ProgressChart" component={ProgressChart} />
        <Stack.Screen name="AddJournalEntry" component={AddJournalEntry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
