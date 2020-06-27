import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-ionicons';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Icon ios="ios-add" android="md-add" />
    </View>
  );
}