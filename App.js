import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
  );
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
  },
  bottomTab: {
    screen: AppTabNavigator,
  },
})

const AppContainer = createAppContainer(switchNavigator)