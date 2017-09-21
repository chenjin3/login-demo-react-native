import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import EditView from '../component/EditView';
import LoginButton from '../component/LoginButton';
import LoginSuccess from './LoginSuccess';
import Hr from 'react-native-hr';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.userName = "";
    this.password = "";
  }
  render() {
      return (

    <View style={LoginStyles.loginview}>
     <View style={{marginTop:80, marginBottom: 100, padding: 30}}>

       <EditView  name='输入用户名/注册手机号' onChangeText={(text) => {
            this.userName = text;
        }}/>
       <EditView name='输入密码' onChangeText={(text) => {
            this.password = text;
        }}/>
        <View style={{flexDirection:'row'}}>
          <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
        </View>

        <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
    </View>

    <Hr lineColor='#b3b3b3' text='第三方登录' textColor='#b3b3b3'/>
    <View style={{marginTop:20, flexDirection: 'row', justifyContent: 'center'}}>
        <Image style={LoginStyles.loginIcon} source={require('../images/wechat@2x.png')} />
        <Image style={LoginStyles.loginIcon} source={require('../images/qq.png')} />
        <Image style={LoginStyles.loginIcon} source={require('../images/sina@2x.png')} />
    </View>
    </View>
   )
  }


  onPressCallback = () => {
    let formData = new FormData();
    formData.append("clientId","32322");
    formData.append("loginName",this.userName);
    formData.append("pwd",this.password);
    console.log(formData);
    this.onLoginSuccess();



  };

  //跳转到第二个页面去
    onLoginSuccess(){
     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'LoginSuccess',
         component : LoginSuccess,
       });
     }
   }

}

const LoginStyles = StyleSheet.create({
  loginview: {
    flex: 1,
    backgroundColor:'#F2F2F2',
  },
  loginIcon: {
      margin: 10,
  }
});
