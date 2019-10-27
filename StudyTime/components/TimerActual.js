import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import { Stopwatch, Timer } from 'react-native-stopwatch-timer';



export default class TimerActual extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isTimerStart: false,
      isStopwatchStart: false,
      timerDuration: (this.props.setMins * 1000) + (this.props.setHrs * 60000),
      resetTimer: false,
      resetStopwatch: false,
    };
    //props.nameHere

    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopStopWatch = this.startStopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
  startStopTimer() {
    this.setState({
      isTimerStart: !this.state.isTimerStart,
      resetTimer: false,
    });
  }

  resetTimer() {
    this.setState({ isTimerStart: false, resetTimer: true });
  }

  startStopStopWatch() {
    this.setState({
      isStopwatchStart: !this.state.isStopwatchStart,
      resetStopwatch: false,
    });
  }

  resetStopwatch() {
    this.setState({ isStopwatchStart: false, resetStopwatch: true });
  }

  getFormattedTime(time) {
    this.currentTime = time;
  }

  setHours(hour) {
    this.setHrs = hour;
  }
  setMinutes(minutes) {
    this.setMins = minutes;
  }
  render() {
    return (


        <View
          style={{
            flex: 1,
            marginTop: 32,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Timer
            totalDuration={this.state.timerDuration}
            msecs
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={handleTimerComplete}
            //can call a function On finish of the time
            getTime={this.getFormattedTime}
          />
          <TouchableHighlight onPress={this.startStopTimer}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
              {!this.state.isTimerStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetTimer}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>RESET</Text>
          </TouchableHighlight>
        </View>

    );
  }
}

const handleTimerComplete = () => alert('Congratulations!');

const options = {
  container: {
    backgroundColor: '#FF0000',
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer_text:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 200
  }
});
