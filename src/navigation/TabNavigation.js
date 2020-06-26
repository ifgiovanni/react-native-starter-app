import React from 'react';

import Icon from 'react-native-ionicons'
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home';
import Example from '../screens/Example';
import Details from '../screens/Details';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'TabA') {
        iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      } else if (route.name === 'TabB') {
        iconName = focused
        ? 'ios-list-box'
        : 'ios-list';
      }
return <Icon name={iconName} size={size} color={color}     />;
        },
      })}
      tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      }}
    >
        <Tab.Screen name="TabA" component={Home} />
        <Tab.Screen name="TabB" component={Details} />
    </Tab.Navigator>
);

export { TabNavigation };