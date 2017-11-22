import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	CheckBox,
	Button,
} from "react-native";
import ReceiveRalate from './ReceiveRalate';
import { List, Checkbox, Flex } from 'antd-mobile';

export default class ReceiveAddr extends React.Component{

	static navigationOptions = {
		title:'收货地址管理'
	}

	constructor(props) {
		super(props);	
	}

	render(){
		return(
			<View style={{position:'relative',height:'100%'}}>
				<ScrollView style={{backgroundColor:gColor.whiteColor,padding:15}}>
					<View style={{flexDirection:'row',paddingVertical:5}}>
						<Text style={{paddingRight:'5%'}}>××</Text>
						<Text>157****1003</Text>	
					</View>
					<Text style={{lineHeight:30,}}>深圳市南山区西丽街道中山园路1001号TCL国际城你好你好你你你你你你你你你123456789</Text>
					<View style={{flexDirection:'row',paddingVertical:10}}>

						
				      	<Checkbox>
				      		<Text  style={{paddingHorizontal:10,paddingVertical:6}}> 设为默认地址</Text>
				      	</Checkbox>
		      
						<TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate('NewAddress')}>
							<Text style={styles.text}>编辑</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.touch}>
							<Text style={styles.text}>删除</Text>
						</TouchableOpacity>
					</View>			
				</ScrollView>
				<TouchableOpacity style={styles.add} onPress={()=> this.props.navigation.navigate('NewAddress')}>
					<Text style={styles.addr}>新增收货地址</Text>
				</TouchableOpacity>
			</View>
		)
	
	}
}



const styles = StyleSheet.create({
	touch: {
		borderColor:gColor.color2,
		borderWidth:1,
		width:'15%',
		borderRadius:5,
		marginHorizontal:10,
	},
	text: {
		textAlign:'center',
		paddingVertical:6,
		color:gColor.textColor,
	},
	add: {
		width:gScreen.width,
		backgroundColor:gColor.importColor,
		height:45,
		position: "absolute",
		bottom:0,
	},
	addr: {
		textAlign:'center',
		paddingVertical:13,
		color: gColor.whiteColor,
	}
})
