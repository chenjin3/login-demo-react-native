import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
export default class EditView extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
 }

  render() {
    return (
      <View style={LoginStyles.TextInputView}>
       <TextInput style={LoginStyles.TextInput}
         placeholder={this.props.name}
         onChangeText={
           (text) => {
             this.setState({text});
             this.props.onChangeText(text);
           }
        }
       />
       </View>
    );
  }
}


const LoginStyles = StyleSheet.create({
  TextInputView: {
    marginTop: 0,
    height:60,
    backgroundColor: '#ffffff',
    borderRadius: 0,
    borderWidth:1,
    borderColor:'#ccc',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  TextInput: {
    backgroundColor: '#ffffff',
    height:45,
    margin:18,
  },
});
