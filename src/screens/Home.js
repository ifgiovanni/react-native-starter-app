import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-ionicons';
import Header from '../components/Header'
import Card from '../components/Card'


export default function Home() {
  return (
    <>
    <Header />
    <View style={{ flex: 1, backgroundColor: '#fafafa', }}>
      <Card>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo lorem eget magna viverra, at tristique nisi varius. Ut aliquet erat ac aliquam sodales. Proin in justo augue. Pellentesque quis sodales mi. Integer eu massa eget neque laoreet efficitur. Proin egestas semper purus quis pellentesque. Aliquam eleifend viverra justo, non vehicula est. Aenean sodales, nunc id aliquam porta, lacus odio ornare mi, vitae consectetur ipsum enim id nisl.</Text>
      </Card>
      
    </View>
    </>
  );
}
