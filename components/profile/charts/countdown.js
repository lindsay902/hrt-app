import React from 'react';
import { Text, View } from 'react-native';
import CountDown from 'react-native-countdown-component';

const CountdownTimer = () => {
  return (
    <View>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>
        My next appointment:{' '}
      </Text>
      <CountDown
        size={50}
        until={1000000}
        onFinish={() => alert('Finished')}
        digitStyle={{
          backgroundColor: '#ffffff',
          borderWidth: 2,
          borderRadius: 30,
          borderColor: 'black',
        }}
        digitTxtStyle={{ color: 'black' }}
        timeLabelStyle={{ color: 'black', fontWeight: 'bold' }}
        separatorStyle={{ color: '#1CC625' }}
        timeToShow={['D']}
        //timeLabels={{ m: null, s: null }}
        showSeparator
      />
    </View>
  );
};

export default CountdownTimer;
