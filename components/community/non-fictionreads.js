import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Image } from 'react-native';
import * as Linking from 'expo-linking';
import { Pressable } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const carouselBooks = [
  {
    title: 'Tomorrow Will Be Different',
    author: 'by Sarah McBride',
    uri: require('../../assets/resources/nonfiction/tomorrow.jpg'),
    url: 'https://books.apple.com/us/book/tomorrow-will-be-different/id1247229880',
  },
  {
    title: 'Beyond the Gender Binary',
    author: 'by Alok Vaid-Menon',
    uri: require('../../assets/resources/nonfiction/beyondthegenderbinary.jpeg'),
    url: 'https://books.apple.com/ca/book/beyond-the-gender-binary/id1479330805',
  },
  {
    title: "I'm Afraid of Men",
    author: 'by Vivek Shraya',
    uri: require('../../assets/resources/nonfiction/imafraidofmen.jpeg'),
    url: 'https://books.apple.com/us/book/im-afraid-of-men/id1358101883',
  },
  {
    title: 'Being Jazz: My Life as a Transgender Teen',
    author: 'by Jazz Jennings',
    uri: require('../../assets/resources/nonfiction/beingjazz.jpeg'),
    url: 'https://books.apple.com/us/book/being-jazz/id1078060071',
  },
  {
    title: 'Sissy: A Coming-of-Gender Story',
    author: 'by Jacob Tobia',
    uri: require('../../assets/resources/nonfiction/sissy.jpeg'),
    url: 'https://books.apple.com/us/book/sissy/id1415524521',
  },
  {
    title: 'Fairest',
    author: 'by Meredith Talusan',
    uri: require('../../assets/resources/nonfiction/fairest.jpeg'),
    url: 'https://books.apple.com/us/book/fairest/id1484293619',
  },
  {
    title: 'Whipping Girl',
    author: 'by Julia Serano',
    uri: require('../../assets/resources/nonfiction/whippinggirl.jpg'),
    url: 'https://books.apple.com/us/book/whipping-girl/id1209970471',
  },
  {
    title: 'Redefining Realness',
    author: 'by Janet Mock',
    uri: require('../../assets/resources/nonfiction/redefiningrealness.jpg'),
    url: 'https://books.apple.com/us/book/redefining-realness/id668394010',
  },
  {
    title: 'Love Lives Here',
    author: 'by Amanda Jette Knox',
    uri: require('../../assets/resources/nonfiction/loveliveshere.jpg'),
    url: 'https://books.apple.com/ca/book/love-lives-here/id1445371342',
  },
];

const NonFictionBooks = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(carouselBooks);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({ item, index }) => (
      <View
        style={{
          backgroundColor: '#55CDFC',
          borderRadius: 5,
          height: '35%',
          width: 150,
          alignItems: 'center',
        }}
      >
        <Pressable
          style={styles.pressableBox}
          onLongPress={() => {
            Linking.openURL(`${item.url}`);
          }}
        >
          <Image style={styles.cover} source={item.uri} />
        </Pressable>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>{item.title}</Text>
        <Text>{item.author}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={{ alignItems: 'center', paddingBottom: '3%' }}>
        <Text style={{ fontWeight: 'bold' }}>Non-Fiction</Text>
      </View>
      {/* <Carousel
        layout="default"
        ref={ref}
        data={carouselItems}
        sliderWidth={600}
        itemWidth={150}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
        activeSlideOffset={10}
        //useScrollView={true}
        loop={true}
        activeSlideAlignment="center"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    marginTop: -10,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressableBox: {
    //marginBottom: '5%',
  },
  cover: {
    maxWidth: '200%',
    maxHeight: '200%',
    borderRadius: 5,
    resizeMode: 'contain',
  },
  bookTitle: {
    fontStyle: 'italic',
  },
});

export default NonFictionBooks;
