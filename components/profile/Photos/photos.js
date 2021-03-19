import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';

const tag = '[CAMERA]';

export default function MyPhotos() {
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [startOver, setStartOver] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [data, setData] = useState();
  const [image, setImage] = useState(null);

  let camera = Camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const __closeCamera = () => {
    setStartOver(true);
  };
  const __takePicture = async () => {
    if (!camera && hasPermission !== 'granted') {
      return;
    } else if (hasPermission === 'granted!') {
      let photo = await camera.takePictureAsync();
      console.log('photo', photo);
      setPreviewVisible(true);
    }
  };

  const __savePhoto = async (photo) => {
    //setImage(photo);
    const asset = await MediaLibrary.saveToLibraryAsync(uri);
    // console.log(`Here are the images ${image}`);
    // console.log(image.uri);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [loaded] = useFonts({
    HandleeRegular: require('../../../assets/fonts/Handlee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const renderItem = ({ item, index }) => (
    <View>
      <Image
        key={index}
        source={{ uri: image }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
      >
        <View style={styles.header}>
          <Text
            style={{
              fontFamily: 'HandleeRegular',
              fontSize: 25,
              paddingTop: 10,
            }}
          >
            Timeline Photos
          </Text>
          <Text>@username</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingRight: 10,
            marginTop: -50,
          }}
        >
          <Icon
            reverse
            name="camera-plus"
            type="material-community"
            color="#F7A8B8"
            size={20}
            onPress={() => setStartOver(false)}
          />
          <Icon
            reverse
            name="upload"
            type="material-community"
            color="#F7A8B8"
            size={20}
            onPress={pickImage}
          />
        </View>
      </SafeAreaView>
      {startOver ? (
        <View style={{ flex: 1, backgroundColor: 'lightgrey' }}>
          <FlatList
            data={image}
            renderItem={renderItem}
            keyExtractor={(id) => {
              id.toString();
            }}
            numColumns={2}
            initialNumToRender={10}
          />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
          {previewVisible ? (
            <ImageBackground
              source={{ uri: capturedImage && capturedImage.uri }}
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  padding: 15,
                  justifyContent: 'flex-end',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setPreviewVisible(false)}
                    style={{
                      width: 130,
                      height: 40,

                      alignItems: 'center',
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                      }}
                    >
                      Re-take
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={__savePhoto}
                    style={{
                      width: 130,
                      height: 40,

                      alignItems: 'center',
                      borderRadius: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                      }}
                    >
                      Save Photo
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          ) : (
            <Camera
              style={{ flex: 1 }}
              type={type}
              ref={(r) => {
                camera = r;
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    top: '5%',
                    right: '5%',
                  }}
                >
                  <TouchableOpacity onPress={__closeCamera}>
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 20,
                      }}
                    >
                      X
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: '5%',
                    left: '5%',
                  }}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    );
                  }}
                >
                  <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}
                  >
                    {' '}
                    Flip{' '}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      alignSelf: 'center',
                      flex: 1,
                      alignItems: 'center',
                    }}
                  >
                    <TouchableOpacity
                      onPress={__takePicture}
                      style={styles.takePicture}
                    />
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingLeft: 10,
  },
  takePicture: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
});
