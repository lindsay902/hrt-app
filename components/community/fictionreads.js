// import React, { useCallback, useRef, useState } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { Image } from 'react-native';
// import * as Linking from 'expo-linking';
// import { Pressable } from 'react-native';
// import Carousel from 'react-native-reanimated-carousel';

// const carouselBooks = [
//   {
//     title: 'Confessions of the Fox',
//     author: 'by Jordy Rosenberg',
//     uri: require('../../assets/resources/fiction/confessionsofthefox.jpeg'),
//     url: 'https://books.apple.com/us/book/confessions-of-the-fox/id1291799981',
//   },
//   {
//     title: 'Felix Ever After',
//     author: 'by Kacen Callender',
//     uri: require('../../assets/resources/fiction/felixeverafter.jpg'),
//     url: 'https://books.apple.com/us/book/felix-ever-after/id1476244034',
//   },
//   {
//     title: 'Detransition, Baby',
//     author: 'by Torrey Peters',
//     uri: require('../../assets/resources/fiction/detransitionbaby.jpeg'),
//     url: 'https://books.apple.com/us/book/detransition-baby/id1488257800',
//   },
//   {
//     title: 'If I Was Your Girl',
//     author: 'by Meredith Russo',
//     uri: require('../../assets/resources/fiction/ifiwasyourgirl.jpg'),
//     url: 'https://books.apple.com/us/book/if-i-was-your-girl/id1054969833',
//   },
//   {
//     title: 'Long Black Veil',
//     author: 'by Jennifer Finney Boylan',
//     uri: require('../../assets/resources/fiction/longblackveil.jpeg'),
//     url: 'https://books.apple.com/us/book/long-black-veil/id1135269204',
//   },
//   {
//     title: 'Paul Takes the Form of a Mortal Girl',
//     author: 'by Andrea Lawlor',
//     uri: require('../../assets/resources/fiction/paultakestheformofamortalgirl.jpeg'),
//     url: 'https://books.apple.com/us/book/paul-takes-the-form-of-a-mortal-girl/id1445347802',
//   },
//   {
//     title: 'Small Beauty',
//     author: 'by Jia Qing Wilson-Yang',
//     uri: require('../../assets/resources/fiction/smallbeauty.jpg'),
//     url: 'https://books.apple.com/us/book/small-beauty/id1462031201',
//   },
//   {
//     title: 'The Art of Being Normal',
//     author: 'by Lisa Williamson',
//     uri: require('../../assets/resources/fiction/theartofbeingnormal.jpg'),
//     url: 'https://books.apple.com/us/book/the-art-of-being-normal/id1061573211',
//   },
//   {
//     title: "This is how it's Always Been",
//     author: 'by Laurel Frankel',
//     uri: require('../../assets/resources/fiction/thisishowitalwaysis.jpg'),
//     url: 'https://books.apple.com/us/book/this-is-how-it-always-is/id1133133874',
//   },
// ];

// const FictionBooks = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [carouselItems, setCarouselItems] = useState(carouselBooks);
//   const ref = useRef(null);

//   const renderItem = useCallback(
//     ({ item, index }) => (
//       <View
//         style={{
//           backgroundColor: '#55CDFC',
//           borderRadius: 5,
//           height: '35%',
//           width: 150,
//           //padding: 50,
//           alignItems: 'center',
//         }}
//       >
//         <Pressable
//           style={styles.pressableBox}
//           onLongPress={() => {
//             Linking.openURL(`${item.url}`);
//           }}
//         >
//           <Image style={styles.cover} source={item.uri} />
//         </Pressable>
//         <Text style={{ fontSize: 18, textAlign: 'center' }}>{item.title}</Text>
//         <Text>{item.author}</Text>
//       </View>
//     ),
//     [],
//   );

//   return (
//     <View style={{ flex: 1, alignItems: 'center' }}>
//       <View style={{ alignItems: 'center', paddingBottom: '3%' }}>
//         <Text style={{ fontWeight: 'bold' }}>Fiction</Text>
//       </View>
//       {/* <Carousel
//         layout="default"
//         ref={ref}
//         data={carouselItems}
//         sliderWidth={600}
//         itemWidth={150}
//         renderItem={renderItem}
//         onSnapToItem={(index) => setActiveIndex(index)}
//         activeSlideOffset={10}
//         //useScrollView={true}
//         loop={true}
//         activeSlideAlignment="center"
//       /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   viewPager: {
//     flex: 1,
//     marginTop: -10,
//   },
//   page: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pressableBox: {
//     //marginBottom: '5%',
//   },
//   cover: {
//     maxWidth: '200%',
//     maxHeight: '200%',
//     borderRadius: 5,
//     //marginTop: '8%',
//     resizeMode: 'contain',
//   },
//   bookTitle: {
//     fontStyle: 'italic',
//   },
// });

// export default FictionBooks;
