import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

import AppNavigator from './navigation/AppNavigator';
import TimerScreen from './screens/TimerScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <AppNavigator/>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   }
// });

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

const TabNavigator = createBottomTabNavigator({
  Timer: TimerScreen,
  Log: HistoryScreen,
  Settings: SettingsScreen
});

export default createAppContainer(TabNavigator);
