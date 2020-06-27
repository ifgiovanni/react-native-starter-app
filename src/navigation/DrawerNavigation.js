import React from 'react';

import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home';
import Example from '../screens/Example';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerNavigation = () => (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notifications" component={Example} />
      </Drawer.Navigator>
    </NavigationContainer>
);

export { DrawerNavigation };