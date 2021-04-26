/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import * as FileSystem from 'expo-file-system';
import { Alert } from 'react-native';

const tag = '[CAMERA]';

const directoryName = FileSystem.documentDirectory + 'myPhotoAlbum';

const myFileDirectory = async () => {
  try {
    await FileSystem.makeDirectoryAsync(directoryName, { intermediates: true });
    await FileSystem.getInfoAsync(directoryName);
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

  //sorting photos so they render in reverse chronological order
  const sortedPhotos = photos.sort(function (a, b) {
    var c = new Date(a.date);
    var d = new Date(b.date);
    return d - c;
  });

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
    setPreviewVisible(true);
    setCapturedImage(photo);
    setImage(photo);
  };

  const saveImages = async () => {
    try {
      //Date timestamp is used as the filename as a way of storing this information
      const date = new Date();
      const time = date.getTime();
      await FileSystem.moveAsync({
        from: image.uri,
        to: `${directoryName}/${time}`,
      }).then(getPhotosFromFileSystem());
    } catch (error) {
      console.log(error);
    }
  };

  const getPhotosFromFileSystem = async () => {
    try {
      let value = await FileSystem.readDirectoryAsync(directoryName);
      value = value.map((result, i, store) => {
        //converting the filename which also serves as a timestamp (readDirectoryAsync only returns the filename, this is my way around saving date)
        const photoTimestamp = store[i];
        const photoTimeFormatted = Intl.DateTimeFormat('en-US', {
          month: 'long',
          year: 'numeric',
          day: 'numeric',
        }).format(photoTimestamp);
        let key = store[i];
        let image = `${directoryName}/${result}`;
        let date = photoTimeFormatted;
        return {
          key: key,
          image: image,
          date: date,
        };
      });
      setPhotos(value);
    } catch (e) {
      console.log(e);
    }
  };

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 15,
          width: '100%',
          backgroundColor: 'white',
        }}
      />
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={{ alignItems: 'flex-end' }}>
        <Image
          source={require('../../../assets/addphotoshere.png')}
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  };

  const handleImage = async () => {
    await saveImages();
    setStartOver(true);
  };

  const removeValue = async (uri) => {
    Alert.alert(
      'Delete photo above?',
      'Confirm photo deletion',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () =>
            FileSystem.deleteAsync(uri).then(getPhotosFromFileSystem()),
        },
      ],
      { cancelable: false },
    );
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
    return (
      <View>
        <Image
          source={{
            uri: photos[props.index].image,
          }}
          style={{ width: 410, height: 600, alignSelf: 'center' }}
        />
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              alignSelf: 'flex-start',
              fontWeight: '500',
              fontStyle: 'italic',
            }}
          >
            {photos[props.index].date}
          </Text>
          <TouchableOpacity
            onPress={() => removeValue(photos[props.index].image)}
            style={{ alignItems: 'flex-end' }}
          >
            <Icon name="close" type="material-community" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#55CDFC' }}>
      <SafeAreaView style={{ borderBottomColor: '#000', borderBottomWidth: 1 }}>
        <View style={styles.header}>
          <Text
            style={{
              fontFamily: 'HandleeRegular',
              fontSize: 25,
              paddingTop: 10,
              color: '#fff',
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
        </View>
      </SafeAreaView>
      {startOver ? (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
          <FlatList
            style={{ borderWidth: 1 }}
            data={sortedPhotos}
            renderItem={renderItem}
            initialNumToRender={5}
            ItemSeparatorComponent={FlatListItemSeparator}
            ListEmptyComponent={ListEmptyComponent}
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
                    style={{ fontSize: 18, marginBottom: 10, color: '#fff' }}
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
