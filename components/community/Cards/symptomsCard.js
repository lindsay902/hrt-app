import React from 'react';
import { Image } from 'react-native';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SymptomsCard() {
  return (
    <View>
      <Text>Symptoms</Text>
      <Image
        source={require('../../../assets/resources/polls/symptomssm.png')}
        width={120}
      />
    </View>
  );
}

//export default SymptomsCard;
