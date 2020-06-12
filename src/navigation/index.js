import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Example from '../screens/Example';

const Drawer = createDrawerNavigator();

const AppNavigator = () => (
    <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Example" component={Example} />
        </Drawer.Navigator>
    </NavigationContainer>
);

export default AppNavigator;