import React, {Component} from "react";
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
	TouchableOpacity
} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import { List,TextareaItem } from 'antd-mobile';

const Item = List.Item;

export default class CustomerService extends Component {

	static navigationOptions = {
		title: "客户服务"
	}

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<ScrollView>
				<View style={{marginTop:20}}>
					<List className="my-list">

						<View style={[styles.listStyle,styles.listBorder]}>
							<Text style={styles.listText}>问题类型</Text>
							<TouchableOpacity style={styles.selectStyle}>
								<ModalDropdown 
									options={['积分问题', '商城问题', '系统问题', '注册问题']} 
									defaultValue="请选择您的问题类型"
									style={{marginLeft:15}}
									textStyle={{fontSize:gFontSize.bigText}}
									dropdownStyle={{width:'100%',}}
									dropdownTextHighlightStyle={{color:gColor.importColor}}
								/>
							</TouchableOpacity>				
						</View>

						<View style={styles.listStyle}>
							<Text style={styles.listText}>请填写您的意见或建议</Text>							
							<TextareaItem
								title="请填写您的意见或建议"
								placeholder="问题描述"
								data-seed="logId"
								ref={el => this.autoFocusInst = el}
								rows={10}
							/>
						</View>

					</List>
					<TouchableOpacity style={styles.submitBtn}>
						<Text style={{color:gColor.whiteColor}}>提交</Text>
					</TouchableOpacity>
				</View>	
			</ScrollView>
		);
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
		height:30,
		borderRadius:5,
		alignItems:'center',
		justifyContent:'center',
	}
})
