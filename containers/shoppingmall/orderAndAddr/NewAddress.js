import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Alert,
} from "react-native";
import { Picker, List, WhiteSpace } from 'antd-mobile';
import CityCode from "../../../components/cityCode/CityCode";

export default class OrderAndAddr extends React.Component{
	static navigationOptions = {
		title: "新增收货地址",
	}
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<View  style={{position:'relative',height:'100%',backgroundColor:gColor.whiteColor}}>
				<ScrollView>
					<View style={styles.listSty}>
						<Text style={styles.txtSty}>收货人姓名：</Text>
						<View style={{width:'75%',}}>
							<TextInput 
				              placeholder="" 
				              style={styles.textInp} 
				              underlineColorAndroid="transparent"
				              />
						</View>
					</View>
					<View style={styles.listSty}>
						<Text style={styles.txtSty}>手机号码：</Text>
						<View style={{width:'75%',}}>
							<TextInput 
				              placeholder="" 
				              style={styles.textInp} 
				              underlineColorAndroid="transparent"
				              />
						</View>
					</View>
					<CityCode />
					<View style={{margin: 15, flexDirection: "row"}}>
					 <Text style={styles.txtSty}>详细地址：</Text>
					 <TextInput 
					  placeholder="" 
					  style={{borderWidth: 1, flex: 1, borderColor: gColor.borderColors,}} 
					  underlineColorAndroid="transparent"
					  multiline={true}
					  numberOfLines={5}
					  maxLength={120}
					  />
					</View>
				</ScrollView>

				<TouchableOpacity style={styles.add}>
					<Text style={styles.addr}>保存</Text>
				</TouchableOpacity>
			</View>
		)
	
	}
}

const styles = StyleSheet.create({
	textInp: {
		height: 40, 
		borderColor: gColor.borderColors,
		borderWidth: 1,
		padding: 0,
		paddingLeft:5,
	},
	listSty: {
		flexDirection:'row',
		marginTop:10,
		justifyContent:'space-between',
		marginRight:15
	},
	txtSty: {
		marginLeft:10,
		lineHeight:30
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
	},
	width: {
		width:gScreen.width/1.5,
		marginLeft:10
	},
	textStyle: {
	    fontSize:gFontSize.centerText,
	    paddingVertical:8,
	    marginLeft:5
	},
	dropdownStyle: {
	    width:gScreen.width/1.2, 
	    borderWidth:1,
		borderColor:gColor.borderColors,
	},
	dropdownTextHighlightStyle: {
	    fontSize:gFontSize.centerText,
	},
	btnSty: {
		borderWidth:1,
		borderColor:gColor.borderColors,
		height:40
	}
})