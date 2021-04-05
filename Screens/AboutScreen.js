import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Shared/logo';
import Icon from 'react-native-vector-icons/Ionicons';
import About from '../components/Support/about';

const AboutStack = createStackNavigator();

const AboutStackScreen = ({ navigation }) => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#55CDFC',
        },
        headerTitle: (props) => <Logo {...props} />,
      }}
    >
      <AboutStack.Screen
        name="About"
        component={About}
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
    </AboutStack.Navigator>
  );
};

export default AboutStackScreen;
