import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import { List, InputItem, Modal, Button, WhiteSpace, WingBlank, Radio, Flex, } from 'antd-mobile';

const Item = List.Item;


export default class MyInfoEdit extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ScrollView style={styles.outStyle}>
				<View style={{alignItems:'center',}}>
					<Text style={styles.titleStyle}>编辑我的信息</Text>
				</View>
				<List className="my-list">										
					<InputItem
						clear labelNumber={5}
						placeholder="请输入正确的手机号码"
					>
						手机号码:
					</InputItem>
					<InputItem
						clear labelNumber={5}
						placeholder="请输入正确的身份证号码"
					>
						身份证号:
					</InputItem>
					<InputItem
						clear labelNumber={5}
						placeholder="请输入正确的邮箱账号"
					>
						邮　　箱:
					</InputItem>					
				</List>
				<TouchableOpacity style={styles.submitBtn}>
					<Text style={{color:gColor.whiteColor}}>确认充值</Text>
				</TouchableOpacity>				
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create ({

	titleStyle: {
		fontSize:gFontSize.titleText,
		color:gColor.importColor,
		paddingVertical:25,
	},

	outStyle: {
		backgroundColor: gColor.borderColors,
	},

	submitBtn: {
		backgroundColor:gColor.importColor,
		borderColor:gColor.importColor,
		marginTop:30,
		width:'90%',
		marginLeft:'5%',
		height:40,
		borderRadius:5,
		alignItems:'center',
		justifyContent:'center',
	}
})