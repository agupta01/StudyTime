import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

import AppNavigator from './navigation/AppNavigator';
import TimerScreen from './screens/TimerScreen';
import HistoryScreen from './screens/HistoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import MainTabNavigator from './navigation/MainTabNavigator';

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

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

SettingsStack.path = '';

const TabNavigator = createBottomTabNavigator({
  Timer: TimerScreen,
  Log: HistoryScreen,
  Settings: SettingsScreen
});

TabNavigator.path = '';

//export default createAppContainer(TabNavigator);

export default createAppContainer(
  createSwitchNavigator({Main: MainTabNavigator,})
);
