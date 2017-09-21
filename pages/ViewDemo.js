'use strict';
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';


var ViewDemo = React.createClass({
    render: function () {
        return (
            <View style={{flexDirection: 'row', height: 100, padding: 20, backgroundColor: '#dddddd'}}>
                <View style={{backgroundColor: 'blue', flex: 0.3}}/>
                <View style={{backgroundColor: 'red', flex: 0.5}}/>
                <MyCustomComponent {...customProps} />
            </View>
        );
    }
});

let customProps = {name: 'Marlon'};
class MyCustomComponent extends Component{
    render() {
        return (
            <View style={{}}><Text>自定义组件</Text></View>
        )
    }
}

module.exports = ViewDemo;
