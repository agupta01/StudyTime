import React, { Component } from 'react';
import { Alert, Button, Platform, StyleSheet, Text, View, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'; //this is an external folder, need to download it

var userData = require('../data.json');

export default class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    this.history = userData.history[0].log;
    this.state = {
      tableHead: ['Date', 'Time', 'Money'],
    //  tableData: [this.dateSource, this.timeSource, this.moneySource]
      tableData: this.history
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue() {
    this.forceUpdate();
    Alert.alert("history updated!");
  }

  render() {
    const state = this.state;

    return (
      <ScrollView>
        <Table borderStyle={{borderWidth: 2, borderColor: '#0000'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        <Button title="Update History" onPress={() => {
          this.updateValue();
        }}/>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
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
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

HistoryScreen.navigationOptions = {
  title: 'Wall of Shame',
};
