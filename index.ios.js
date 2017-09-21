/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
   Navigator  //导航栈的js实现
} from 'react-native';
//var Index = require('./pages/Index'); /*引入自定义组件*/
var Home = require('./pages/Home');

// 导航栏的Mapper
var NavigationBarRouteMapper = {
  // 左键
  LeftButton(route, navigator, index, navState) {
    if (index > 0) {
       return (
         <View style={styles.navContainer}>
           <TouchableOpacity
             underlayColor='transparent'
             onPress={() => {if (index > 0) {navigator.pop()}}}>
              <Image style={styles.leftNavButtonText} source={require('./images/back.png')}/>
           </TouchableOpacity>
         </View>
       );
     } else {
       return null;
     }
  },
  // 右键
 RightButton(route, navigator, index, navState) {
   if (index > 0) {
      return (
        <View style={styles.navContainer}>
          <TouchableOpacity
            underlayColor='transparent'
            onPress={() => {if (index > 0) {navigator.pop()}}}>
             <Text style={styles.rightNavButtonText} >注册</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return null;
    }
 },
  // 标题
  Title(route, navigator, index, navState) {
    return (
      <View style={styles.navContainer}>
        <Text style={styles.title}>
          登录
        </Text>
      </View>
    );
  }
};


export default class AwesomeProject extends Component {
  render() {
    return (
      <Navigator
           style={styles.container}
           initialRoute={{
             component: Home, //当前路由下显示的组件
           }}
           configureScene={(route) => {
               return Navigator.SceneConfigs.FloatFromRight;
           }}
           renderScene={(route, navigator) => {
               let Component = route.component;
               return <Component {...route.params} navigator={navigator} />
           }}
           navigationBar={
             <Navigator.NavigationBar
               style={styles.navContainer}
               routeMapper={NavigationBarRouteMapper}
            />
          }
       />
    );
  }
}


const styles = StyleSheet.create({
  container: {
     flex: 1
   },
   navContainer: {
     backgroundColor: '#40474c'
   },
   title: {
     color: 'white',
     fontSize: 20,
     marginTop: 10
   },
   leftNavButtonText: {
     marginLeft: 10,
     marginTop: 10
   },
   rightNavButtonText: {
     fontSize: 16,
     color: 'white',
     marginRight: 10,
     marginTop: 10
   }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
