import * as React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/Navigation/Navigation';

export default function App(){
  return(
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}
