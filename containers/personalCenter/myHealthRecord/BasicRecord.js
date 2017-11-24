import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
} from "react-native";
import CustomTitle from '../../../components/public/CustomTitle'; 
import HeadLayOut from "../HeadLayOut";


export default class BasicRecord extends Component {
	static navigationOptions = {
		title:'基础档案'
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollView style={{backgroundColor: gColor.whiteColor,}}>
				<HeadLayOut />	
				<CustomTitle 
					title="基础信息"
					style={styles.titleStyle}
					textStyle={styles.leftStyle}
				/>

				<View style={styles.rowStyle}>
					<Text style={styles.widthSty}>ID:1234563217</Text>
					<Text style={styles.widthSty}>性别:女</Text>
				</View>
				<View style={styles.rowStyle}>
					<Text style={styles.widthSty}>姓名:×××</Text>
					<Text style={styles.widthSty}>电话:123****4567</Text>
				</View>
				<View style={styles.rowStyle}>
					<Text style={styles.widthSty}>民族:汉</Text>
					<Text style={styles.widthSty}>婚姻:未婚</Text>
				</View>
				<View style={styles.rowStyle}>
					<Text style={styles.widthSty}>生日:2017年10月26日</Text>
					<Text style={styles.widthSty}></Text>
				</View>

				<CustomTitle 
					title="目前状况"
					style={styles.titleStyle}
					textStyle={styles.leftStyle}
				/>

				
				<View style={styles.rowSty}>
					<Text style={styles.widthOut}>目前患有疾病:无</Text>
				</View>
				<View style={styles.rowSty}>
					<Text style={styles.widthOut}>过去一段时间疲劳程度:一般</Text>
				</View>
				<View style={styles.rowSty}>
					<Text style={styles.widthOut}>同一年前相比体重浮动是:无</Text>
				</View>
				<View style={styles.rowSty}>
					<Text style={styles.widthOut}>是否试图减重:无</Text>
				</View>
				<View style={styles.rowSty}>
					<Text style={styles.widthOut}>半年内是否测量过血压:有</Text>
				</View>
				<View style={styles.rowSty}>
					<Text style={styles.widthOut}>近一年是否曾经住院:无</Text>
				</View>


			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	titleStyle:{
		borderBottomWidth: 1,
		borderColor:gColor.borderColors,
		marginTop:15,
	},
	leftStyle:{
		backgroundColor:gColor.importColor,
		color:gColor.whiteColor,
		paddingHorizontal:12,
		paddingVertical:5,
	},
	listItem: {
		paddingVertical:10,
		backgroundColor: gColor.whiteColor,
	},
	rowStyle: {
		flexDirection:'row',
		justifyContent:'space-around',
	},
	rowSty: {
		justifyContent:'space-around',	
	},
	widthSty: {
		width:gScreen.width/2,
		textAlign:'left',
		paddingHorizontal:'10%',
		paddingVertical:8,
	},
	widthOut: {
		textAlign:'left',
		paddingHorizontal:'10%',
		paddingVertical:8,
	}
})