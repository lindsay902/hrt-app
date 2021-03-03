import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Shared/logo';
import Icon from 'react-native-vector-icons/Ionicons';
import MySettings from '../components/Profile/settings';

const SettingsStack = createStackNavigator();

const SettingsStackScreen = ({ navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#55CDFC',
        },
        headerTitle: (props) => <Logo {...props} />,
      }}
    >
      <SettingsStack.Screen
        name="MySettings"
        component={MySettings}
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
    </SettingsStack.Navigator>
  );
};

export default SettingsStackScreen;
