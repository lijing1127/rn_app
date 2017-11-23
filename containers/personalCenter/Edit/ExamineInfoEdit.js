import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';
import { List, InputItem,} from 'antd-mobile';
import CustomTitle from '../../../components/public/CustomTitle';

const Item = List.Item;


export default class ExamineInfoEdit extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<ScrollView style={styles.outStyle}>
				<View style={{alignItems:'center',}}>
					<Text style={styles.titleStyle}>编辑审核信息</Text>
				</View>
				<List className="my-list">										
					<View style={[styles.listStyle,styles.listBorder]}>
						<Text style={styles.listText}>角色选择 </Text>
						<TouchableOpacity style={styles.selectStyle}>
							<ModalDropdown 
								options={['会员', '家庭健康管理师','家庭医生']} 
								defaultValue="请选择您的身份"
								style={{marginLeft:15}}
								textStyle={{fontSize:gFontSize.bigText}}
								dropdownStyle={{width:'100%',}}
								dropdownTextHighlightStyle={{color:gColor.importColor}}
							/>
						</TouchableOpacity>				
					</View>
				<CustomTitle 
					key={'1'}
					title={'工作信息'}
					style={styles.CustomTitle}
				/>
				<CustomTitle 
					key={'2'}
					title={'常住地信息'}
					style={styles.CustomTitle}
				/>								
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
	},

	CustomTitle: {
		backgroundColor: gColor.borderColors,
		paddingVertical: 10,
		paddingLeft:20,
	}

})