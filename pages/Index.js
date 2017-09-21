/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
	NavigatorIOS
} from 'react-native';
import ViewDemoComponent from './ViewDemo';

var BUIcon = [
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
	'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'
];

var Index = React.createClass({
	_pressButton() {
		let _this = this;
		const { navigator } = this.props;
		//为什么这里可以取得 props.navigator?请看上文:
		//<Component {...route.params} navigator={navigator} />
		//这里传递了navigator作为props
		if(navigator) {
			navigator.push({
				name: 'ViewDemoComponent',
				component: ViewDemoComponent
			});
		}
	},

  render: function() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={[styles.sbu_red, styles.sbu_view]}>
        	<TouchableHighlight underlayColor={'#FA6778'} style={{flex:1}} onPress={this._pressButton}>
	        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
	        		<View style={[styles.sub_con_flex, styles.sub_text]}>
	        			<Text style={[styles.font16]}>酒店</Text>
	        		</View>
	        		<View style={[styles.sub_con_flex]}>
	        			<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[0]}}></Image>
	        		</View>
	        	</View>
	        </TouchableHighlight>
        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>海外</Text>
        		</View>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>周边</Text>
        		</View>
        	</View>
        	<View style={[styles.sbu_flex]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>团购.特惠</Text>
        		</View>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>客栈.公寓</Text>
        		</View>
        	</View>
        </View>

        <View style={[styles.sbu_view, styles.sbu_blue]}>
        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>机票</Text>
        		</View>
        		<View style={[styles.sub_con_flex]}>
        			<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[1]}}></Image>
        		</View>
        	</View>
        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>火车票</Text>
        		</View>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>接收机</Text>
        		</View>
        	</View>
        	<View style={[styles.sbu_flex]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>汽车票</Text>
        		</View>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>自驾.专车</Text>
        		</View>
        	</View>
        </View>

        <View style={[styles.sbu_view, styles.sbu_green]}>
        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>旅游</Text>
        		</View>
        		<View style={[styles.sub_con_flex]}>
        			<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[2]}}></Image>
        		</View>
        	</View>
        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>门票.玩乐</Text>
        		</View>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>出境WiFi</Text>
        		</View>
        	</View>
        	<View style={[styles.sbu_flex]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>邮轮</Text>
        		</View>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>签证</Text>
        		</View>
        	</View>
        </View>
        <View style={[styles.sbu_view, styles.sbu_yellow]}>
        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>攻略</Text>
        		</View>
        		<View style={[styles.sub_con_flex]}>
        			<Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[3]}}></Image>
        		</View>
        	</View>
        	<View style={[styles.sbu_flex, styles.sbu_borderRight]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>周末游</Text>
        		</View>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>礼品卡</Text>
        		</View>
        	</View>
        	<View style={[styles.sbu_flex]}>
        		<View style={[styles.sub_con_flex, styles.sub_text, styles.sbu_borderBottom]}>
        			<Text style={[styles.font16]}>美食.购物</Text>
        		</View>
        		<View style={[styles.sub_con_flex, styles.sub_text]}>
        			<Text style={[styles.font16]}>更多</Text>
        		</View>
        	</View>
        </View>

      </View>
      </ScrollView>
    );
  }
});
var styles = StyleSheet.create({
	//container
  	container:{
    	backgroundColor:'#F2F2F2',
    	flex:1,
  	},
  	//slider
  	wrapper: {
    	height:80,
  	},
  	//sbu
  	sbu_view:{
  		height:84,
  		marginLeft: 5,
  		marginRight:5,
  		borderWidth:1,
  		borderRadius:5,
  		marginBottom:10,
  		flexDirection:'row',
  	},
  	sbu_red:{
  		backgroundColor: '#FA6778',
  		borderColor:'#FA6778',
      marginTop: 60
  	},

  	sbu_blue:{
  		backgroundColor: '#3D98FF',
  		borderColor:'#3D98FF',
  	},

  	sbu_green:{
  		backgroundColor: '#5EBE00',
  		borderColor:'#5EBE00',
  	},

  	sbu_yellow:{
  		backgroundColor: '#FC9720',
  		borderColor:'#FC9720',
  	},
  	sbu_flex:{
  		flex:1,
  	},
  	sbu_borderRight:{
  		borderColor:'#fff',
  		borderRightWidth: 0.5,
  	},
  	sbu_icon_img:{
  		height:40,
  		width:40,
  		resizeMode:Image.resizeMode.contain, //设置图片根据宽度和高度自适应大小
  	},
  	sub_con_flex:{
  		flex:1,
  		justifyContent: 'center',
  		alignItems: 'center',
  	},
  	sub_text:{
  		justifyContent:'center',
  	},
  	font16:{
  		fontSize:17,
  		color:'#FFF',
  		fontWeight:'900',
  	},
  	sbu_borderBottom:{
  		borderBottomWidth:0.5,
  		borderBottomColor:'#fff',
  	}
});

var NV = React.createClass({
	render: function(){
		return(
			<NavigatorIOS
				style={styles.container}
				barTintColor='#ffffcc'
				initialRoute={{
					title: '首页',
					component: Index,
				}}
			/>
		);
	}
});


module.exports = Index;
