import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Image } from 'react-native';
import * as Linking from 'expo-linking';

const FictionBooks = () => {
  return (
    <View style={{ flex: 1, marginTop: '8%' }}>
      {/* <View style={{ marginLeft: -140 }}>
        <Text style={styles.fiction}> Fiction </Text>
      </View> */}
      <View style={{ alignItems: 'center', marginBottom: '-5%' }}>
        <Text style={{ fontWeight: 'bold', marginTop: '-5%' }}>Fiction</Text>
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
                'https://books.apple.com/us/book/confessions-of-the-fox/id1291799981',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/fiction/confessionsofthefox.jpeg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Confessions of the Fox</Text>
          <Text>Jordy Rosenberg</Text>
        </View>
        <View style={styles.page} key="2">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/felix-ever-after/id1476244034',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/fiction/felixeverafter.jpg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Felix Ever After</Text>
          <Text>Kacen Callender</Text>
        </View>
        <View style={styles.page} key="3">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/detransition-baby/id1488257800',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/fiction/detransitionbaby.jpeg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Detransition, Baby</Text>
          <Text>Torrey Peters</Text>
        </View>
        <View style={styles.page} key="4">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/if-i-was-your-girl/id1054969833',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/fiction/ifiwasyourgirl.jpg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>If I Was Your Girl</Text>
          <Text>Meredith Russo</Text>
        </View>
        <View style={styles.page} key="5">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/long-black-veil/id1135269204',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/fiction/longblackveil.jpeg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Long Black Veil</Text>
          <Text>Jennifer Finney Boylan</Text>
        </View>
        <View style={styles.page} key="6">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/paul-takes-the-form-of-a-mortal-girl/id1445347802',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/fiction/paultakestheformofamortalgirl.jpeg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>
            Paul Takes the Form of a Mortal Girl
          </Text>
          <Text>Andrea Lawlor</Text>
        </View>
        <View style={styles.page} key="7">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/small-beauty/id1462031201',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/fiction/smallbeauty.jpg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>Small Beauty</Text>
          <Text>Jia Qing Wilson-Yang</Text>
        </View>
        <View style={styles.page} key="8">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/the-art-of-being-normal/id1061573211',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/fiction/theartofbeingnormal.jpg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>The Art of Being Normal</Text>
          <Text>Lisa Williamson</Text>
        </View>
        <View style={styles.page} key="9">
          <Pressable
            style={styles.pressableBox}
            onLongPress={() => {
              Linking.openURL(
                'https://books.apple.com/us/book/this-is-how-it-always-is/id1133133874',
              );
            }}
          >
            <Image
              style={styles.cover}
              source={require('../../assets/resources/fiction/thisishowitalwaysis.jpg')}
            />
          </Pressable>
          <Text style={styles.bookTitle}>This Is How It Always Is</Text>
          <Text>Laurel Frankel</Text>
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
    marginBottom: '-10%',
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
  fiction: {
    transform: [{ rotate: '-90deg' }],
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    marginTop: 80,
    paddingRight: 60,
  },
});

export default FictionBooks;
