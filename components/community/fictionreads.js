import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { Image } from 'react-native';

const FictionBooks = () => {
  return (
    <View style={styles.viewPager}>
      <ViewPager
        style={styles.viewPager}
        initialPage={0}
        showPageIndicator={true}
      >
        <View style={styles.page} key="1">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/fiction/confessionsofthefox.jpeg')}
          />
          <Text style={styles.bookTitle}>Confessions of the Fox</Text>
          <Text>Jordy Rosenberg</Text>
        </View>
        <View style={styles.page} key="2">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/fiction/felixeverafter.jpg')}
          />
          <Text style={styles.bookTitle}>Felix Ever After</Text>
          <Text>Kacen Callender</Text>
        </View>
        <View style={styles.page} key="3">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/fiction/honeybee.jpg')}
          />
          <Text style={styles.bookTitle}>Honey Bee</Text>
          <Text>Craig Silvey</Text>
        </View>
        <View style={styles.page} key="4">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/fiction/ifiwasyourgirl.jpg')}
          />
          <Text style={styles.bookTitle}>If I Was Your Girl</Text>
          <Text>Meredith Russo</Text>
        </View>
        <View style={styles.page} key="5">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/fiction/longblackveil.jpeg')}
          />
          <Text style={styles.bookTitle}>Long Black Veil</Text>
          <Text>Jennifer Finney Boylan</Text>
        </View>
        <View style={styles.page} key="6">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/fiction/paultakestheformofamortalgirl.jpeg')}
          />
          <Text style={styles.bookTitle}>
            Paul Takes the Form of a Mortal Girl
          </Text>
          <Text>Andrea Lawlor</Text>
        </View>
        <View style={styles.page} key="7">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/fiction/smallbeauty.jpg')}
          />
          <Text style={styles.bookTitle}>Small Beauty</Text>
          <Text>Jia Qing Wilson-Yang</Text>
        </View>
        <View style={styles.page} key="8">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/fiction/theartofbeingnormal.jpg')}
          />
          <Text style={styles.bookTitle}>The Art of Being Normal</Text>
          <Text>Lisa Williamson</Text>
        </View>
        <View style={styles.page} key="9">
          <Image
            style={styles.cover}
            source={require('../../assets/resources/fiction/thisishowitalwaysis.jpg')}
          />
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
  cover: {
    width: '40%',
    height: '70%',
  },
  bookTitle: {
    fontStyle: 'italic',
  },
});

export default FictionBooks;