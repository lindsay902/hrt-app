import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Image } from 'react-native';
import * as Linking from 'expo-linking';
import { Pressable } from 'react-native';

const NonFictionBooks = () => {
  return (
    <View style={{ flex: 1, marginTop: '8%' }}>
      <View style={{ alignItems: 'center', marginBottom: '-5%' }}>
        <Text style={{ fontWeight: 'bold', marginTop: '-5%' }}>
          Non-Fiction
        </Text>
      </View>
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
      </ViewPager>
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
    marginBottom: '%',
  },
  cover: {
    maxWidth: '75%',
    maxHeight: '75%',
    borderRadius: 5,
    marginTop: '8%',
    resizeMode: 'contain',
  },
  bookTitle: {
    fontStyle: 'italic',
  },
  nonfiction: {
    transform: [{ rotate: '-90deg' }],
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    marginTop: 80,
  },
});

export default NonFictionBooks;
