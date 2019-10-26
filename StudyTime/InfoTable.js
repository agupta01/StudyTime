import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

var userData = require('./data.json');

export default class InfoTable extends Component {
  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

  constructor(props) {
    super(props);
    this.dataSource = userData.history[0].times;
  }

  render() {
    return (
      <View style={this.styles.container}>
        <FlatList
          data={this.dataSource}
          renderItem={({item}) => <Text style={this.styles.instructions}>{item.time}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }

}
