import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

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
    this.state = {isLoading: true}
  }

  componentDidMount(){
    return fetch('./data.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.history[0].times,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


  render() {
    if (this.state.isLoading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={this.styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={this.styles.instructions}>{item.time}}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }

}
