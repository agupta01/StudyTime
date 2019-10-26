import React, { Component } from 'react';

export default class InfoTable extends Component {
  var userData = require('./data.json');
  constructor() {
    super();
    this.state = {
      dates: userData.history[this.props.userId + 1].dates,
      times: userData.history[this.props.userId + 1].times,
      transactions: userData.history[this.props.userId + 1].transactions
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}
