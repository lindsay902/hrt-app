import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Image } from 'react-native';

const NonFictionBooks = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ marginLeft: -150, marginRight: -20 }}>
        <Text style={styles.nonfiction}>Non-Fiction</Text>
      </View>
      <ViewPager
        style={styles.viewPager}
        initialPage={0}
        pageMargin={1}
        showPageIndicator={true}
      >
        <View style={styles.page} key="1">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/nonfiction/tomorrow.jpg')}
          />
          <Text style={styles.bookTitle}>Tomorrow Will Be Different</Text>
          <Text>by Sarah McBride</Text>
        </View>
        <View style={styles.page} key="2">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/nonfiction/beyondthegenderbinary.jpeg')}
          />
          <Text style={styles.bookTitle}>Beyond the Gender Binary</Text>
          <Text>by Alok Vaid-Menon</Text>
        </View>
        <View style={styles.page} key="3">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/nonfiction/imafraidofmen.jpeg')}
          />
          <Text style={styles.bookTitle}>I'm Afraid of Men</Text>
          <Text>by Vivek Shraya</Text>
        </View>
        <View style={styles.page} key="4">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/nonfiction/beingjazz.jpeg')}
          />
          <Text style={styles.bookTitle}>
            Being Jazz: My Life as a Transgender Teen
          </Text>
          <Text>by Jazz Jennings</Text>
        </View>
        <View style={styles.page} key="5">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/nonfiction/sissy.jpeg')}
          />
          <Text style={styles.bookTitle}>Sissy: A Coming-of-Gender Story</Text>
          <Text>by Jacob Tobia</Text>
        </View>
        <View style={styles.page} key="6">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/nonfiction/fairest.jpeg')}
          />
          <Text style={styles.bookTitle}>Fairest</Text>
          <Text>by Meredith Talusan</Text>
        </View>
        <View style={styles.page} key="7">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/nonfiction/whippinggirl.jpg')}
          />
          <Text style={styles.bookTitle}>Whipping Girl</Text>
          <Text>by Julia Serano</Text>
        </View>
        <View style={styles.page} key="8">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/nonfiction/redefiningrealness.jpg')}
          />
          <Text style={styles.bookTitle}>Redefining Realness</Text>
          <Text>by Janet Mock</Text>
        </View>
        <View style={styles.page} key="9">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/nonfiction/loveliveshere.jpg')}
          />
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
  cover: {
    width: '90%',
    height: '70%',
    borderRadius: 5,
  },
  bookTitle: {
    fontStyle: 'italic',
  },
  nonfiction: {
    transform: [{ rotate: '-90deg' }],
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    marginTop: 80,
    paddingRight: 60,
  },
});

export default NonFictionBooks;
