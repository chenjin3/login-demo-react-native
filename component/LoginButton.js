
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
export default class LoginButton extends Component {
  constructor(props) {
   super(props);
   this.state = {text: ''};
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPressCallback} style={LoginStyles.loginTextView}>
        <Text style={LoginStyles.loginText} >
            {this.props.name}
        </Text>
      </TouchableOpacity>
    );
  }
}
const LoginStyles = StyleSheet.create({

  loginText: {
    color: '#ffffff',
     fontWeight: 'bold',
     width:50,
  },
  loginTextView: {
    marginTop: 50,
    height:50,
    backgroundColor: '#08AA7D',
    borderRadius:5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
  },
});
