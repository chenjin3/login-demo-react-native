'use strict';
import React, {Component} from 'react';
import {
  Alert,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native';
import LoginButton from '../component/LoginButton';
import Login from './Login';

var Home = React.createClass({
    render: function () {
        return (
            <View style={styles.container}>
              <View style={styles.subview}>
                <LoginButton name='去登录' onPressCallback={this.onPressGo2Login}/>
              </View>
            </View>
        );
    },
    onPressGo2Login() {
      //Alert.alert('login!');
      let _this = this;
      const { navigator } = this.props;
      if(navigator) {
        navigator.push({
          name: 'Login',
          component: Login
        });
      }
    }
});
const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor:'#F2F2F2',
   },
   subview: {
     height:84,
     marginTop: 80,
     marginLeft: 5,
     marginRight:5,
    //  borderWidth:1,
     borderRadius:5,
     marginBottom:10,
     flexDirection:'row',
   }
});

module.exports = Home;
