import React from 'react';

import Icon from 'react-native-ionicons'
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text, TouchableOpacity } from 'react-native';

import Home from '../screens/Home';
import Example from '../screens/Example';
import Details from '../screens/Details';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center',
      alignItems: 'center', height: 60, backgroundColor: '#FFF', shadowRadius: 2,
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowColor: '#000000',
      elevation: 4}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          console.log(options);
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          if(label == "center"){
            return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityStates={isFocused ? ['selected'] : []}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{ flex: 1,
                    bottom: 15,
                    position: 'absolute',
                    height: 55,
                    width: 55,
                    borderRadius: 58,
                    backgroundColor: '#1b1c1c',
                    justifyContent: 'center',
                    
                    alignItems: 'center', }}>
                
                <Icon ios="ios-add" android="md-add" size={25} color="white"/>
                </TouchableOpacity>
              );
          }else{
            if(label == 'left'){
                return (
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityStates={isFocused ? ['selected'] : []}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={options.tabBarTestID}
                      onPress={onPress}
                      onLongPress={onLongPress}
                      style={{ flex: 1,  marginRight: 30, justifyContent: "center", alignItems: "center" }}
                    >
                    
                    <Icon ios="checkmark-circle-outline" android="checkmark-circle-outline" size={25} color="#1b1b1b"/>
                    </TouchableOpacity>
                  );
            }

            if(label == 'right'){
                return (
                    <TouchableOpacity
                      accessibilityRole="button"
                      accessibilityStates={isFocused ? ['selected'] : []}
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={options.tabBarTestID}
                      onPress={onPress}
                      onLongPress={onLongPress}
                      style={{ flex: 1, marginLeft: 30, justifyContent: "center", alignItems: "center" }}
                    >
                    
                    <Icon ios="heart-empty" android="heart-empty" size={25} color="#1b1b1b"/>
                    </TouchableOpacity>
                  );
            }
            
          }
          
        })}
      </View>
    );
  }

const TabNavigation = () => (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="left" component={Home} />
        <Tab.Screen name="center" component={Details} />
        <Tab.Screen name="right" component={Details} />
    </Tab.Navigator>
);

export { TabNavigation };