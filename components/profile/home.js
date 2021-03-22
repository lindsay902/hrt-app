import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import AnimatedNumber from 'react-native-animated-numbers';
import { Icon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, TextInput } from 'react-native-paper';
import { Modal } from 'react-native';
import { Alert } from 'react-native';
import { Pressable } from 'react-native';

const Home = ({ navigation }) => {
  const [estrogenLevel, setEstrogenLevel] = useState(100);
  const [testosteroneLevel, setTestosteroneLevel] = useState(100);
  const [potassiumLevel, setPotassiumLevel] = useState(100);

  const [modalVisible, setModalVisible] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);

  const [loaded] = useFonts({
    HandleeRegular: require('../../assets/fonts/Handlee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <LinearGradient
      colors={['#55CDFC', 'white', '#F7A8B8']}
      style={styles.appTitle}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.textStyle}>My Hormone Levels</Text>
        <View style={styles.hormoneContainer}>
          <View style={styles.hormones}>
            <Text style={{ fontSize: 15, marginBottom: 10 }}>Estrogen</Text>
            <AnimatedNumber
              animateToNumber={estrogenLevel}
              fontStyle={{ fontSize: 30, fontWeight: 'bold' }}
            />
          </View>
          <View style={styles.hormones}>
            <Text style={{ fontSize: 15, marginBottom: 10 }}>Testosterone</Text>
            <AnimatedNumber
              animateToNumber={testosteroneLevel}
              fontStyle={{ fontSize: 30, fontWeight: 'bold' }}
            />
          </View>
          <View style={styles.hormones}>
            <Text style={{ fontSize: 15, marginBottom: 10 }}>Potassium</Text>
            <AnimatedNumber
              animateToNumber={potassiumLevel}
              fontStyle={{ fontSize: 30, fontWeight: 'bold' }}
            />
          </View>
        </View>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <Button
            style={styles.buttons}
            color="white"
            onPress={() => setModalVisible(!modalVisible)}
          >
            Update Values
          </Button>
          <Text>Information + sources</Text>
          <Text>here is some</Text>
          <Text>Information!</Text>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  alignSelf: 'flex-end',
                  marginTop: -30,
                  marginHorizontal: -30,
                }}
              >
                <Icon
                  reverse
                  name="close"
                  size={10}
                  onPress={() => setModalVisible(!modalVisible)}
                />
              </View>
              <Text style={styles.modalText}>Estrogen</Text>
              <TextInput
                style={styles.textInput}
                keyboardType="numeric"
                onChangeText={(text) => setEstrogenLevel(text)}
              />
              <Text style={styles.modalText}>Testosterone</Text>
              <Text style={styles.modalText}>Potassium</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(modalVisible)}
              >
                <Text>Update Values</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textStyle}>Community Questions</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>Test1</Text>
          <Text>Test2</Text>
          <Text>Test3</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  appTitle: {
    flex: 1,
    alignItems: 'center',
  },
  hormoneContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  hormones: {
    marginLeft: 25,
    marginRight: 25,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttons: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  textStyle: {
    fontFamily: 'HandleeRegular',
    fontSize: 30,
    alignSelf: 'center',
    paddingBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    shadowColor: 'grey',
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: 'black',
  },
  buttonClose: {
    backgroundColor: 'pink',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  textInput: {
    height: 20,
    margin: 10,
    width: 40,
  },
});

export default Home;
