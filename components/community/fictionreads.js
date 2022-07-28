import React, { useCallback, useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Image } from 'react-native';
import * as Linking from 'expo-linking';
import { Pressable } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const carouselBooks = [
  {
    title: 'Confessions of the Fox',
    author: 'by Jordy Rosenberg',
    uri: require('../../assets/resources/fiction/confessionsofthefox.jpeg'),
    url: 'https://books.apple.com/us/book/confessions-of-the-fox/id1291799981',
  },
  {
    title: 'Felix Ever After',
    author: 'by Kacen Callender',
    uri: require('../../assets/resources/fiction/felixeverafter.jpg'),
    url: 'https://books.apple.com/us/book/felix-ever-after/id1476244034',
  },
  {
    title: 'Detransition, Baby',
    author: 'by Torrey Peters',
    uri: require('../../assets/resources/fiction/detransitionbaby.jpeg'),
    url: 'https://books.apple.com/us/book/detransition-baby/id1488257800',
  },
  {
    title: 'If I Was Your Girl',
    author: 'by Meredith Russo',
    uri: require('../../assets/resources/fiction/ifiwasyourgirl.jpg'),
    url: 'https://books.apple.com/us/book/if-i-was-your-girl/id1054969833',
  },
  {
    title: 'Long Black Veil',
    author: 'by Jennifer Finney Boylan',
    uri: require('../../assets/resources/fiction/longblackveil.jpeg'),
    url: 'https://books.apple.com/us/book/long-black-veil/id1135269204',
  },
  {
    title: 'Paul Takes the Form of a Mortal Girl',
    author: 'by Andrea Lawlor',
    uri: require('../../assets/resources/fiction/paultakestheformofamortalgirl.jpeg'),
    url: 'https://books.apple.com/us/book/paul-takes-the-form-of-a-mortal-girl/id1445347802',
  },
  {
    title: 'Small Beauty',
    author: 'by Jia Qing Wilson-Yang',
    uri: require('../../assets/resources/fiction/smallbeauty.jpg'),
    url: 'https://books.apple.com/us/book/small-beauty/id1462031201',
  },
  {
    title: 'The Art of Being Normal',
    author: 'by Lisa Williamson',
    uri: require('../../assets/resources/fiction/theartofbeingnormal.jpg'),
    url: 'https://books.apple.com/us/book/the-art-of-being-normal/id1061573211',
  },
  {
    title: "This is how it's Always Been",
    author: 'by Laurel Frankel',
    uri: require('../../assets/resources/fiction/thisishowitalwaysis.jpg'),
    url: 'https://books.apple.com/us/book/this-is-how-it-always-is/id1133133874',
  },
];

const FictionBooks = () => {
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
          //padding: 50,
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
        <Text style={{ fontWeight: 'bold' }}>Fiction</Text>
      </View>
      <Carousel
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
      />
      {/*
      <ViewPager
        style={styles.viewPager}
        initialPage={0}
        showPageIndicator={true}
      >
        <View style={styles.page} key="1">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/tomorrow-will-be-different/id1247229880',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/nonfiction/tomorrow.jpg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Tomorrow Will Be Different</Text>
          <Text>by Sarah McBride</Text>
        </View>
        <View style={styles.page} key="2">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/ca/book/beyond-the-gender-binary/id1479330805',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/nonfiction/beyondthegenderbinary.jpeg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Beyond the Gender Binary</Text>
          <Text>by Alok Vaid-Menon</Text>
        </View>
        <View style={styles.page} key="3">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/im-afraid-of-men/id1358101883',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/nonfiction/imafraidofmen.jpeg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>I'm Afraid of Men</Text>
          <Text>by Vivek Shraya</Text>
        </View>
        <View style={styles.page} key="4">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/being-jazz/id1078060071',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/nonfiction/beingjazz.jpeg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>
            Being Jazz: My Life as a Transgender Teen
          </Text>
          <Text>by Jazz Jennings</Text>
        </View>
        <View style={styles.page} key="5">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/sissy/id1415524521',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/nonfiction/sissy.jpeg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Sissy: A Coming-of-Gender Story</Text>
          <Text>by Jacob Tobia</Text>
        </View>
        <View style={styles.page} key="6">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/fairest/id1484293619',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/nonfiction/fairest.jpeg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Fairest</Text>
          <Text>by Meredith Talusan</Text>
        </View>
        <View style={styles.page} key="7">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/whipping-girl/id1209970471',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/nonfiction/whippinggirl.jpg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Whipping Girl</Text>
          <Text>by Julia Serano</Text>
        </View>
        <View style={styles.page} key="8">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/redefining-realness/id668394010',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/nonfiction/redefiningrealness.jpg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Redefining Realness</Text>
          <Text>by Janet Mock</Text>
        </View>
        <View style={styles.page} key="9">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/ca/book/love-lives-here/id1445371342',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/nonfiction/loveliveshere.jpg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Love Lives Here</Text>
          <Text>by Amanda Jette Knox</Text>
        </View>
      </ViewPager> */}
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
    //marginTop: '8%',
    resizeMode: 'contain',
  },
  bookTitle: {
    fontStyle: 'italic',
  },
});

export default FictionBooks;
