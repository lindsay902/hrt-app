import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from '../components/shared/logo';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../components/profile/home';
import SymptomsPoll from '../components/community/Polls/symptomsPoll';
import MentalHealthPoll from '../components/community/Polls/mentalHealthPoll';
import BeautyPoll from '../components/community/Polls/beautyPoll';
import RelationshipsPoll from '../components/community/Polls/relationshipsPoll';

const HomeStack = createStackNavigator();

const PollStack = createStackNavigator();

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
      <PollStack.Screen name="SymptomsPoll" component={SymptomsPoll} />
      <PollStack.Screen name="MentalHealthPoll" component={MentalHealthPoll} />
      <PollStack.Screen name="BeautyPoll" component={BeautyPoll} />
      <PollStack.Screen
        name="RelationshipsPoll"
        component={RelationshipsPoll}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
