import React from "react";
import Gato from '../screens/Gato'
import Perro from '../screens/Perro'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='cat' component={Gato} options={{title: 'Cats', tabBarIcon: ({ color, size }) => ( <Icon name="cat" color={color} size={size} /> ) }}></Tab.Screen>
            <Tab.Screen name='dog' component={Perro} options={{title: 'Dogs', tabBarIcon: ({ color, size }) => ( <Icon name="dog" color={color} size={size} /> ) }}></Tab.Screen>
        </Tab.Navigator>
    );
}