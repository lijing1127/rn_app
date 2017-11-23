import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import { List, InputItem, Modal, Button, WhiteSpace, WingBlank, Radio, Flex, } from 'antd-mobile';


const Item = List.Item;

export default class Recharge extends React.Component{

	static navigationOptions = {
		title:'充值'
	}

	constructor(props){
		super(props);
	}

	render(){
		return(
			<View>

				<List className="my-list">

					<View style={[styles.listStyle,styles.listBorder]}>
						<Text style={styles.listText}>支付方式</Text>
						<TouchableOpacity style={styles.selectStyle}>
							<ModalDropdown 
								options={['支付宝', '银联卡']} 
								defaultValue="请选择您的充值方式"
								style={{marginLeft:15}}
								textStyle={{fontSize:gFontSize.bigText}}
								dropdownStyle={{width:'100%',}}
								dropdownTextHighlightStyle={{color:gColor.importColor}}
							/>
						</TouchableOpacity>				
					</View>									
												
					<InputItem
						clear labelNumber={4}
						placeholder="请输入正确的账号"
					>
						账　　号
					</InputItem>
					<View>
						<Text style={styles.listStyle}>充值金额</Text>
					<InputItem
						clear labelNumber={2}
					>
						￥
					</InputItem>						
					</View>
				</List>
				<TouchableOpacity style={styles.submitBtn}>
					<Text style={{color:gColor.whiteColor}}>确认充值</Text>
				</TouchableOpacity>
			</View>
		)
	}
}


const styles = StyleSheet.create ({
	listStyle: {
		marginLeft:'5%',
		marginTop:10,
	},

	listBorder: {
		borderBottomWidth:1,
		borderBottomColor:gColor.borderColors,
		flexDirection:'row',
		paddingBottom:'2%',
	},

	listText: {
		fontSize:18,
		color:gColor.textColor,
	},

	selectStyle: {
		width:'100%',
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