import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/shared/logo';
import Icon from 'react-native-vector-icons/Ionicons';
import Feedback from '../components/Support/feedback';

const FeedbackStack = createStackNavigator();

const FeedbackStackScreen = ({ navigation }) => {
  return (
    <FeedbackStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#55CDFC',
        },
        headerTitle: (props) => <Logo {...props} />,
      }}
    >
      <FeedbackStack.Screen
        name="Feedback"
        component={Feedback}
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
    </FeedbackStack.Navigator>
  );
};

export default FeedbackStackScreen;
