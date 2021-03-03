import React from 'react';
import { View, ImageBackground, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-fontawesome';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//import Feather from 'react-native-vector-icons/Feather';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}
          >
            <ImageBackground
              source={require('../../assets/kitty.jpg')}
              style={{
                height: 100,
                width: 100,
              }}
              imageStyle={{ borderRadius: 15 }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon
                  name="camera"
                  size={35}
                  color="#fff"
                  style={{
                    opacity: 0.7,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: '#fff',
                    borderRadius: 10,
                  }}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
          Kitty Pryde
        </Text>
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" size={20} />
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#666666"
          autoCompleteType={false}
          style={styles.textInput}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" size={20} />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#666666"
          autoCompleteType={false}
          style={styles.textInput}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="envelope-o" size={20} />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          placeholderTextColor="#666666"
          autoCompleteType={false}
          style={styles.textInput}
        />
      </View>
      <View>
        <Icon name="map-marker-outline" size={20} />
        <TextInput
          placeholder="City"
          placeholderTextColor="#666666"
          autoCorrect={false}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
        <Text style={styles.panelButtonTitle}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#F7A8B8',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    //shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#F7A8B8',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    //marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
