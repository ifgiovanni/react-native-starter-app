import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import Header from '../components/Header'

export default function Details() {
  return (
    <>
    <View style={{ backgroundColor: '#fafafa', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <ActivityIndicator/>
    </View>
    </>
  );
}