//Not implementing at this time

// import { LinearGradient } from 'expo-linear-gradient';
// import React, { useState } from 'react';
// import { StyleSheet, Image, View, Dimensions, Text } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

// const SignUpScreen = ({ navigation }) => {
//   const [data, setData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     check_textInputChange: false,
//     secureTextEntry: true,
//     confirmSecureTextEntry: true,
//   });

//   const textInputChange = (val) => {
//     if (val.length !== 0) {
//       setData({
//         ...data,
//         email: val,
//         check_textInputChange: true,
//       });
//     } else {
//       setData({
//         ...data,
//         email: val,
//         check_textInputChange: false,
//       });
//     }
//   };

//   const handlePasswordChange = (val) => {
//     setData({
//       ...data,
//       password: val,
//     });
//   };

//   const handleConfirmPasswordChange = (val) => {
//     setData({
//       ...data,
//       confirmPassword: val,
//     });
//   };

//   const updateSecureTextEntry = () => {
//     setData({
//       ...data,
//       secureTextEntry: !data.secureTextEntry,
//     });
//   };

//   const updateConfirmSecureTextEntry = () => {
//     setData({
//       ...data,
//       confirmSecureTextEntry: !data.confirmSecureTextEntry,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.container}>
//         <LinearGradient
//           colors={['#55CDFC', 'white', '#F7A8B8']}
//           start={{ x: 1, y: 0 }}
//           end={{ x: 0, y: 0 }}
//         >
//           <View style={styles.headerLogo}>
//             <Image
//               source={require('../../assets/butterfly.png')}
//               style={styles.logo}
//             />
//           </View>
//         </LinearGradient>
//       </View>
//       <Animatable.View animation="fadeInUpBig" style={styles.footer}>
//         <Text style={{ textAlign: 'center' }}>Sign Up!</Text>
//         <Text style={styles.textFooter}>Email</Text>
//         <View style={styles.action}>
//           <FontAwesome name="user-o" color="black" size={20} />
//           <TextInput
//             placeholder="Your Email"
//             style={styles.textInput}
//             autoCapitalize="none"
//             onChangeText={(val) => textInputChange(val)}
//           />
//           {data.check_textInputChange ? (
//             <Feather name="check-circle" color="green" size={20} />
//           ) : null}
//         </View>
//         <Text style={[styles.textFooter, { marginTop: 25 }]}>Password</Text>
//         <View style={styles.action}>
//           <FontAwesome name="lock" color="black" size={20} />
//           <TextInput
//             placeholder="Your Password"
//             secureTextEntry={data.secureTextEntry ? true : false}
//             style={styles.textInput}
//             autoCapitalize="none"
//             onTextChange={(val) => handlePasswordChange(val)}
//           />
//           <TouchableOpacity onPress={updateSecureTextEntry}>
//             {data.secureTextEntry ? (
//               <Feather name="eye-off" color="grey" size={20} />
//             ) : (
//               <Feather name="eye" color="grey" size={20} />
//             )}
//           </TouchableOpacity>
//         </View>
//         <Text style={[styles.textFooter, { marginTop: 25 }]}>
//           Confirm Password
//         </Text>
//         <View style={styles.action}>
//           <FontAwesome name="lock" color="black" size={20} />
//           <TextInput
//             placeholder="Confirm Your Password"
//             secureTextEntry={data.confirmSecureTextEntry ? true : false}
//             style={styles.textInput}
//             autoCapitalize="none"
//             onTextChange={(val) => handleConfirmPasswordChange(val)}
//           />
//           <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
//             {data.confirmSecureTextEntry ? (
//               <Feather name="eye-off" color="grey" size={20} />
//             ) : (
//               <Feather name="eye" color="grey" size={20} />
//             )}
//           </TouchableOpacity>
//         </View>
//         <View
//           style={[styles.button, { marginTop: 40, backgroundColor: 'black' }]}
//         >
//           <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
//             <Text style={[styles.textSign, { color: 'white' }]}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={[
//             styles.button,
//             { marginTop: 15, borderColor: 'black', borderWidth: 1 },
//           ]}
//         >
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <Text style={styles.textSign}>Back to Sign In</Text>
//           </TouchableOpacity>
//         </View>
//       </Animatable.View>
//     </View>
//   );
// };

// const { height } = Dimensions.get('screen');
// const height_logo = height * 0.2;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     paddingHorizontal: 20,
//     paddingBottom: 50,
//   },
//   headerLogo: {
//     paddingBottom: 850,
//   },
//   logo: {
//     width: height_logo,
//     height: height_logo,
//     top: 90,
//     left: 115,
//   },
//   footer: {
//     flex: 2,
//     backgroundColor: '#fff',
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//   },
//   text_header: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   textFooter: {
//     color: 'black',
//     fontSize: 18,
//   },
//   action: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#f2f2f2',
//     paddingBottom: 5,
//   },
//   actionError: {
//     flexDirection: 'row',
//     marginTop: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#FF0000',
//     paddingBottom: 5,
//   },
//   textInput: {
//     flex: 1,
//     marginTop: Platform.OS === 'ios' ? 0 : -12,
//     paddingLeft: 10,
//   },
//   errorMsg: {
//     color: '#FF0000',
//     fontSize: 14,
//   },
//   button: {
//     borderRadius: 10,
//     padding: 20,
//   },
//   signIn: {
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 10,
//   },
//   textSign: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default SignUpScreen;
