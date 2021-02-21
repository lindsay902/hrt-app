import React from 'react';
import { View, Text, Card, Button } from 'react-native';

const JournalEntry = ({ id, entry, date }) => {
  return (
    <Card title={date}>
      <Text>{entry}</Text>
      <View>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="aliceblue"
          title="View"
        />
        <Button
          icon={{ name: 'remove' }}
          backgroundColor="tomato"
          title="Remove"
          onPress={() => this.props.onRemoveItem(id)}
        />
      </View>
    </Card>
  );
};

export default JournalEntry;
