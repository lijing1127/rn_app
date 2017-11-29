import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	ScrollView,
} from "react-native";
import { Checkbox, Button, } from "antd-mobile";
import ModalDropdown from 'react-native-modal-dropdown';

import CityCode from "../../../components/cityCode/CityCode";
import ImagePicker from "../../../components/public/ImagePacker";


export default class GeneralUser extends Component {
	static navigationOptions = {
		title: "管理师",
	}
	constructor(props) {
		super(props);
		this.state = {
			isAddSelect: true,
		}
	}
	_selectAddress = () => {
		this.setState({
			isAddSelect: !this.state.isAddSelect,
		})
	}
	render() {
		return (
			<ScrollView style={{backgroundColor: gColor.whiteColor, flex: 1,}}>
				<Text style={styles.titleStyle}>编辑医生验证信息</Text>
				<View style={styles.jsBlock}>
					<Text>角色选择：</Text>
					<ModalDropdown options={['家庭医生','家庭健康管理师', '健康管理师',]} defaultValue="家庭医生" 
						style={styles.btnSty}
						textStyle={styles.textStyle}
						dropdownStyle={{ marginTop: -20, width: "71%" }}
					/>
				</View>
				<Text style={{marginLeft: 15, marginTop: 15,}}>工作地信息</Text>
				<CityCode />
				<View style={styles.czBlock}>
					<Text style={{ marginTop: 15,}}>常住地信息</Text>
					<Checkbox onChange={this._selectAddress} checked={this.state.isAddSelect} > 常住地同工作地 </Checkbox>
				</View>
				{
					this.state.isAddSelect ? null : <CityCode />
				}
				<View>
					<Text style={{ marginLeft: 15, marginTop: 15,marginBottom: 5,}}>执业医师证号</Text>
					<TextInput 
						placeholder="" 
						style={styles.textInp} 
						underlineColorAndroid="transparent"
					/>
				</View>
				<Button style={{backgroundColor: gColor.importColor, marginHorizontal: 15,marginVertical: 15,}} size="large" inline>
					<Text style={{color: gColor.whiteColor}}>提交</Text>
				</Button>
				<View style={[styles.infoBlock, {paddingHorizontal: 10, marginBottom: 5,paddingVertical:20}]}>
					<Text style={{fontSize: gFontSize.bigText,marginBottom: 5}}>执业医师证</Text>
					<ImagePicker onImageClick={(index, fs) => console.log(index, fs)} />
				</View>
				<View style={[styles.infoBlock, {paddingHorizontal: 10, marginBottom: 5,paddingVertical:20}]}>
					<Text style={{fontSize: gFontSize.bigText,marginBottom: 5}}>教育经历资格证</Text>
					<ImagePicker onImageClick={(index, fs) => console.log(index, fs)} />
				</View>
				<View style={[styles.infoBlock, {paddingHorizontal: 10, marginBottom: 5,paddingVertical:20}]}>
					<Text style={{fontSize: gFontSize.bigText,marginBottom: 5}}>其他资格证</Text>
					<ImagePicker onImageClick={(index, fs) => console.log(index, fs)} />
				</View>
			</ScrollView>
		);
	}
} 

const styles = StyleSheet.create({
	titleStyle: {
		alignSelf: "center",
		marginVertical: 15,
		fontSize: gFontSize.bigText,
		color: gColor.importColor,
	},
	jsBlock: {
		flexDirection: "row", 
		borderWidth: 1, 
		marginHorizontal: 15, 
		paddingHorizontal: 15, 
		height: 45, 
		alignItems: "center", 
		borderColor: gColor.borderColors,
	},
	btnSty: {
		flex: 2,
		// alignItems: "flex-end",
	},
	textStyle: {
		fontSize:gFontSize.bigText,
	},
	czBlock: {
		flexDirection: "row", 
		alignItems: "flex-end", 
		justifyContent: "space-between", 
		paddingHorizontal: 15, 
		borderColor: gColor.borderColors,
	},
	textInp: {
		height: 40, 
		borderColor: gColor.borderColors,
		borderWidth: 1,
		padding: 0,
		paddingLeft:5,
		marginHorizontal: 15,
	},
})