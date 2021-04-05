/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect, createContext, useContext } from 'react';
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
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { ImageEditor } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';
import * as FileSystem from 'expo-file-system';

const tag = '[CAMERA]';

const directoryName = FileSystem.documentDirectory + 'myPhotoAlbum';

const myFileDirectory = async () => {
  try {
    await FileSystem.makeDirectoryAsync(directoryName, { intermediates: true });
    let createdDirectory = await FileSystem.getInfoAsync(directoryName);
    //console.log(JSON.stringify(createdDirectory));
  } catch (e) {
    console.log(e);
  }
};

myFileDirectory(directoryName);

const MyPhotos = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [startOver, setStartOver] = useState(true);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState(null);

  let camera = Camera;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    getPhotosFromFileSystem();
  }, []);

  const randomImageKey = () => {
    let imageKey = 'IMG';
    let num = uuidv4();
    imageKey += num;
    return imageKey;
  };

  const __closeCamera = () => {
    setStartOver(true);
  };

  const __takePicture = async () => {
    if (!camera) {
      return;
    }
    const photo = await camera.takePictureAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 0.75,
      aspect: [4, 3],
    });
    const source = photo.uri;
    setPreviewVisible(true);
    setCapturedImage(photo);
    await MediaLibrary.createAssetAsync(source);
    setImage(photo);
  };

  const saveImages = async () => {
    try {
      let generatekey = randomImageKey();
      //generatekey = JSON.stringify(generatekey);
      //console.log(generatekey);
      console.log(`ImageUri:${image.uri}`);
      console.log(`Newfile:${directoryName}/${generatekey}`);
      await FileSystem.moveAsync({
        from: image.uri,
        to: `${directoryName}/${generatekey}`,
      }).then(getPhotosFromFileSystem());
    } catch (error) {
      console.log(error);
    }
  };

  //console.log(`Directoryname:${directoryName}`);

  const getPhotosFromFileSystem = async () => {
    try {
      let value = await FileSystem.readDirectoryAsync(directoryName);
      //console.log(`Value:${value}`);
      value = value.map((result, i, store) => {
        //console.log(`result:${result}, i:${i}`);
        let key = store[i];
        let image = `${directoryName}/${result}`;
        return {
          key: key,
          image: image,
        };
      });
      setPhotos(value);
      //console.log(photos);
    } catch (e) {
      console.log(e);
    }
  };

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 10,
          width: '100%',
          backgroundColor: 'white',
        }}
      />
    );
  };

  //console.log(`Photos.image${photos.image}`);

  //getPhotosFromFileSystem();

  // const getData = async () => {
  //   try {
  //     let value = await FileSystem.readDirectoryAsync(directoryName);
  //     value = value.map((result, i, store) => {
  //       let key = store[i][0];
  //       let image = store[i][1];
  //       return {
  //         key: key,
  //         image: image,
  //       };
  //     });
  //     setPhotos(value);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // };

  // const getData = async () => {
  //   try {
  //     const keys = await AsyncStorage.getAllKeys((err, keys) => {
  //       if (err) {
  //         return [];
  //       } else {
  //         return keys;
  //       }
  //     });
  //     let value = await AsyncStorage.multiGet(keys);
  //     value = value.map((result, i, store) => {
  //       let key = store[i][0];
  //       let image = store[i][1];
  //       return {
  //         key: key,
  //         image: image,
  //       };
  //     });
  //     setPhotos(value);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleImage = async () => {
    await saveImages();
    setStartOver(true);
  };

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          // eslint-disable-next-line no-alert
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
      quality: 0.5,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  const [loaded] = useFonts({
    HandleeRegular: require('../../../assets/fonts/Handlee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const renderItem = (props) => {
    //console.log(props);
    return (
      <View>
        <Image
          source={{
            uri: photos[props.index].image,
          }}
          style={{ width: 410, height: 410, alignSelf: 'center' }}
        />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <SafeAreaView
        style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
      >
        <View style={styles.header}>
          <Text
            style={{
              fontFamily: 'HandleeRegular',
              fontSize: 25,
              paddingTop: 10,
              color: 'white',
            }}
          >
            Timeline Photos
          </Text>
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
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <FlatList
            style={{ borderWidth: 1 }}
            data={photos}
            renderItem={renderItem}
            initialNumToRender={5}
            ItemSeparatorComponent={FlatListItemSeparator}
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
                    onPress={handleImage}
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
};

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

export default MyPhotos;
