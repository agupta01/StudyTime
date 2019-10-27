import React, { Component } from 'react';
import {
  AppState,
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Picker,
  Alert,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Modal,
} from 'react-native';

import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

var userData = require('../data.json');

export default class TimerActual extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isTimerStart: false,
      isStopwatchStart: false,
      timerDuration: 15 * 60000,
      resetTimer: false,
      resetStopwatch: false,
      pickerSelection: '15',
      pickerDisplayed: false,
      buttonVisible: true,
      history: userData.history[0].log,
      appState: AppState.currentState,
      //balanceInitial: userData.users[0].balance,
      balanceDeducted: 1,
      timePassed: 0,
// screenVisible: true
    };
    //props.nameHere
    this.updateData = this.updateData.bind(this);
    this.setPickerValue = this.setPickerValue.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.startStopStopWatch = this.startStopStopWatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (nextAppState != 'active') {
      this.startStopTimer();
    }
    this.setState({appState: nextAppState});
  };

  setPickerValue(newValue) {

    this.setState({
      timerDuration: parseInt(newValue) * 60000
    });
    this.resetTimer();
    this.togglePicker();
  }

  handleChange(e) {
    this.setState({history: e.target.value}); //e = event created
  }

  updateData(today){
    //create a whole new line
    var month = today.getMonth() + 1;
    var day = today.getDate();
    this.state.history.push([month + "/"+ day, parseInt(this.state.timerDuration) / 60000, this.state.balanceDeducted]);
    userData.history[0].log = this.state.history;
    userData.users[0].balance -= this.state.balanceDeducted;
    // TODO: timerDuration needs to be time elapsed
    // TODO: balance needs to be the actual value deducted
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    });
  }

  startStopTimer() {
    this.setState({
      isTimerStart: !this.state.isTimerStart,
      resetTimer: false,
      buttonVisible: !this.state.buttonVisible
    });
    if (this.state.isTimerStart) {
      this.updateData(new Date());
      this.resetTimer();
    }
  }

  resetTimer() {
    this.setState({ isTimerStart: false, resetTimer: true, buttonVisible: true});
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

  render() {
    const pickerValues = [
     {
       title: '5',
       value: '5'
     },
     {
       title: '10',
       value: '10'
     },
     {
       title: '15',
       value: '15'
     },
     {
       title: '20',
       value: '20'
     },
     {
       title: '25',
       value: '25'
     },
     {
       title: '30',
       value: '30'
     },
     {
       title: '35',
       value: '35'
     },
     {
       title: '40',
       value: '40'
     },
     {
       title: '45',
       value: '45'
     },
     {
       title: '50',
       value: '50'
     },
     {
       title: '55',
       value: '55'
     },
     {
       title: '60',
       value: '60'
     },
     {
       title: '65',
       value: '65'
     },
     {
       title: '70',
       value: '70'
     },
     {
       title: '75',
       value: '75'
     },
     {
       title: '80',
       value: '80'
     },
     {
       title: '85',
       value: '85'
     },
     {
       title: '90',
       value: '90'
     },
     {
       title: '95',
       value: '95'
     },
     {
       title: '100',
       value: '100'
     },
     {
       title: '105',
       value: '105'
     },
     {
       title: '110',
       value: '110'
     },
     {
       title: '115',
       value: '115'
     },
     {
       title: '120',
       value: '120'
     }
   ]

    return (
      <View>
      <View style={wrapperStyles.container}>
        <View style={{
            flex: 1,
            marginTop: 32,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Timer
            totalDuration={this.state.timerDuration} secs
            start={this.state.isTimerStart}
            reset={this.state.resetTimer}
            options={options}
            handleFinish={
              handleTimerComplete,
              this.setState.balanceDeducted = 0
              //hah you thought
            }
            getTime={this.getFormattedTime}
          />
        <Button onPress={this.startStopTimer} title="START" disabled = {this.state.isTimerStart}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
              //{!this.state.isTimerStart ? 'START' : 'CANCEL'}
              START
            </Text>
          </Button>
          <Button onPress={this.startStopTimer} title="CANCEL" disabled={!this.state.isTimerStart}>
            <Text style={{ fontSize: 20, marginTop: 10 }}>
              //{this.state.isTimerStart ? 'START' : 'CANCEL'}
              CANCEL
            </Text>
          </Button>
        </View>
      </View>
      <View>
        <View style={wrapperStyles.timer_select}>
          <Button onPress={() => this.togglePicker()} title={ "Select a value!" } disabled={!this.state.buttonVisible} />
        </View>
      </View>
      <Modal visible={this.state.pickerDisplayed} animationType={"slide"} transparent={true}>
        <View style={{ margin: 20, padding: 20,
          backgroundColor: '#efefef',
          bottom: 20,
          left: 20,
          right: 20,
          alignItems: 'center',
          position: 'absolute',
          height: "30%"}}>
          <ScrollView>
            <Text>Please pick a value</Text>
            { pickerValues.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                <Text>{ value.title }</Text>
              </TouchableHighlight>
            })}
          </ScrollView>
          <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
            <Text style={{ color: '#999' }}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </Modal>
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

const wrapperStyles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: "50%",
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer_select:{
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center'
  }
});
