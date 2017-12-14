import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
} from "react-native";
import {observer} from "mobx-react/native";
import CustomTitle from '../../../components/public/CustomTitle'; 
import HeadLayOut from "../HeadLayOut";

import Users from "../../../models/Users";
require("../../../components/GlobalStorage");

@observer
export default class BasicRecord extends Component {
	static navigationOptions = {
		title:'基础档案'
	}
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		storage.load({
			key: 'getToken',
		}).then((ret) => {
			if (ret) {
				Users.getUserHealthRecord(ret.id_number);
			}
		}).catch(err => {
			console.log(err, -1);
		})
	}
	render() {
		const { id_number, name, sex, phone, birthday, nation, marriage, } = Users.healthRecord;
		const health = Users.healthRecord.health_status;
		return (
			<ScrollView style={{backgroundColor: gColor.whiteColor,}}>
				<HeadLayOut />	
				<CustomTitle 
					title="基础信息"
					style={styles.titleStyle}
					textStyle={styles.leftStyle}
				/>

				<View style={{paddingLeft: 35}}>
					<Text>ID: { id_number && id_number }</Text>
				</View>
				<View style={styles.rowStyle}>
					<Text style={styles.widthSty}>姓名: { name && name }</Text>
					<Text style={styles.widthSty}>性别: { sex && sex }</Text>
				</View>
				<View style={styles.rowStyle}>
					<Text style={styles.widthSty}>电话: { phone && phone }</Text>
					<Text style={styles.widthSty}>生日: { birthday && birthday }</Text>
				</View>
				<View style={styles.rowStyle}>
					<Text style={styles.widthSty}>民族: { nation && nation }</Text>
					<Text style={styles.widthSty}>婚姻: { marriage && marriage }</Text>
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