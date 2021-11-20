import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/Navigation/Navigation';


export default function App(){
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigation></Navigation>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}