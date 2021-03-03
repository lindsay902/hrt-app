import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Shared/logo';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../components/Profile/home';
import JournalEntryScreen from './JournalEntryScreen';

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      mode="modal"
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#55CDFC',
        },
        headerTitle: (props) => <Logo {...props} />,
      }}
    >
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={35}
              backgroundColor="#55CDFC"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
