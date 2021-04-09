// import * as React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Profile from '../components/Profile/profile';
// import Logo from '../components/Shared/logo';

// const ProfileStack = createStackNavigator();

// const ProfileScreen = ({ navigation }) => {
//   return (
//     <ProfileStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#55CDFC',
//         },
//         headerTitle: (props) => <Logo {...props} />,
//       }}
//     >
//       <ProfileStack.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           headerLeft: () => (
//             <Icon.Button
//               name="ios-menu"
//               size={35}
//               backgroundColor="#55CDFC"
//               onPress={() => {
//                 navigation.openDrawer();
//               }}
//             />
//           ),
//         }}
//       />
//     </ProfileStack.Navigator>
//   );
// };

// export default ProfileScreen;
