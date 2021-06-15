import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/router/TabNavigator';
import { Provider } from 'react-redux'
import Store from './src/Redux/Store'


export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
    </Provider>
  );
}