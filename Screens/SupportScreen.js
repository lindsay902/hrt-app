import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/Shared/logo';
import Icon from 'react-native-vector-icons/Ionicons';
import Support from '../components/Support/support';

const SupportStack = createStackNavigator();

const SupportStackScreen = ({ navigation }) => {
  return (
    <SupportStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#55CDFC',
        },
        headerTitle: (props) => <Logo {...props} />,
      }}
    >
      <SupportStack.Screen
        name="Support"
        component={Support}
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
    </SupportStack.Navigator>
  );
};

export default SupportStackScreen;
