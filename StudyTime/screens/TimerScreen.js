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
      pickerSelection: 'Default value!',
      pickerDisplayed: false,
      hour: 0,
      min: 0
      // TODO: you should have variable here to store what valuye you picked
    }
  }

  setPickerValue(newValue) {

    this.setState({
      pickerSelection: newValue
    })

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {
    const pickerValues = [

        {
       title: '1',
       value: ''
     },
     {
       title: '2',
       value: '2'
     },
     {
       title: '3',
       value: '3'
     },
     {
       title: '4',
       value: '4'
     },
     {
       title: '5',
       value: '5'
     },
     {
       title: '6',
       value: '6'
     },
     {
       title: '7',
       value: '7'
     },
     {
       title: '8',
       value: '8'
     },
     {
       title: '9',
       value: '9'
     },
     {
       title: '10',
       value: '10'
     },
     {
       title: '11',
       value: '11'
     },
     {
       title: '12',
       value: '12'
     },
     {
       title: '13',
       value: '13'
     },
     {
       title: '14',
       value: '14'
     },
     {
       title: '15',
       value: '15'
     }

   ]

    return (
      // you should pass your variable holding the picker value into this component
      <View style={styles.container}>
        <TimerActual setMins={ this.state.pickerSelection } setHrs= {this.state.pickerSelection} />
        <View style={{flexDirection: "row"}}>
          <View style={styles.timer_select_left}>
            <Button onPress={() => this.togglePicker()} title={ "Select a value!" } />
            </View>
            <View style={styles.timer_select_right}>
            <Button onPress={() => this.togglePicker()} title={ "Select a value!" } />
            </View>
        </View>
        {/* <Picker
          style={{ backgroundColor: '#fafafa', position: 'absolute', bottom: 0, left: 0, right: 0 }}
          selectedValue={ this.state.pickerSelection }
          onValueChange={(itemValue, itemIndex) => this.setState({ pickerSelection: itemValue})}>
          <Picker.Item label="Chicken" value="chicken" />
          <Picker.Item label="Eggs" value="eggs" />
          <Picker.Item label="Vegetables" value="vegetables" />
        </Picker> */}

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

TimerScreen.navigationOptions = {
  title: 'Timer',
};
