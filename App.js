import * as React from 'react';
import { StatusBar } from "react-native";
import 'react-native-gesture-handler';
import {DrawerNavigation, TabNavigation } from './src/navigation'
import { DarkTheme } from '@react-navigation/native';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor='#212121' />
    <DrawerNavigation />
    </>
  );
}