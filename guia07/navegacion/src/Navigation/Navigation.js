import React from 'react'
import HomeStack from './HomeStack'
import ContactStack from './ContactSatck'
import AboutStack from './AboutStack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='home' component={HomeStack} options={{title: 'Home'}}></Tab.Screen>
            <Tab.Screen name='about' component={AboutStack} options={{title: 'About'}}></Tab.Screen>
            <Tab.Screen name='contact' component={ContactStack} options={{title: 'Contact'}}></Tab.Screen>
        </Tab.Navigator>
    );
}