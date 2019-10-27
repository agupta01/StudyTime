import React, {Component} from 'react';
import {
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
import TimerActual from '../components/TimerActual';

// import EditTimePicker from '../components/EditTimePicker';

export default class TimerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerSelection: '15',
      pickerDisplayed: false
    }
  }

  // setPickerValue(newValue) {
  //
  //   this.setState({
  //     pickerSelection: newValue
  //   })
  //
  //   this.togglePicker();
  // }
  //
  // togglePicker() {
  //   this.setState({
  //     pickerDisplayed: !this.state.pickerDisplayed
  //   })
  // }

  render() {
    return (
      <View style={styles.container}>
        <TimerActual/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "50%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  timer_select:{
    backgroundColor: '#fff',
    alignSelf: "center"
  }
});

TimerScreen.navigationOptions = {
  title: 'Timer',
};
