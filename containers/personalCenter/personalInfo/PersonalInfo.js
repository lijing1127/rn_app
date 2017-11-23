import React, {Component} from "react";
import {
	View,
	ScrollView,
	StyleSheet,
	Text,
	BackHandler,
} from "react-native";
import HeadLayOut from "../HeadLayOut";
import CustomTitle from "../../../components/public/CustomTitle";
import { ImagePicker } from "antd-mobile";



export default class Convertible extends Component {
	static navigationOptions = {
		title: "个人资料",
	}
	constructor(props) {
		super(props);
		this.state = {
			baseInfo: [
				{title: "手机号码", rightText: 15986631235,},
				{title: "身份证号码", rightText: 142635633231556324,},
				{title: "邮箱", rightText: '123653654@qq.com',},
			],
			shInfo: [
				{title: "工作地", rightText: '深圳',},
				{title: "常住地", rightText: '深圳',},
				{title: "身份", rightText: '用户',},
				{title: "审核状态", rightText: '已审核',},
			],
			files: [],
		}
	}
	_renderBaseInfo = () => {
		const baseInfo = this.state.baseInfo.map((item) => {
			return (
				<CustomTitle 
					key={item.title}
					title={item.title}
					rightText={item.rightText}
					style={{backgroundColor: gColor.whiteColor, }}
				/>
			)
		})
		return baseInfo;
	}
	_renderSHInfo = () => {
		const baseInfo = this.state.shInfo.map((item) => {
			return (
				<CustomTitle 
					key={item.title}
					title={item.title}
					rightText={item.rightText}
					style={{backgroundColor: gColor.whiteColor, }}
				/>
			)
		})
		return baseInfo;
	}
	onChange = (files, type, index) => {
	    console.log(files, type, index);
	    this.setState({
	      files,
	    });
	  }
	render() {
		const { files } = this.state;
		return (
			<View>
				<ScrollView>
					<HeadLayOut />
					<CustomTitle 
						title="我的信息"
						rightText="编辑"
						touchableStyle={{backgroundColor: gColor.importColor, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 8}}
						rightTextStyle={{color: gColor.whiteColor}}
						textStyle={{fontSize: gFontSize.bigText}}
						style={{backgroundColor: gColor.whiteColor, }}
					/>
					<View style={styles.infoBlock}>
						{this._renderBaseInfo()}
					</View>
					<View style={[styles.infoBlock, {paddingHorizontal: 10, marginBottom: 5,paddingVertical:20}]}>
						<Text style={{fontSize: gFontSize.bigText,marginBottom: 5}}>上传身份证</Text>
						<ImagePicker
							files={files}
							onChange={this.onChange}
							onImageClick={(index, fs) => console.log(index, fs)}
							selectable={files.length < 5}
						/>
					</View>

					<CustomTitle 
						title="审核信息"
						rightText="编辑"
						touchableStyle={{backgroundColor: gColor.importColor, paddingVertical: 5, paddingHorizontal: 20, borderRadius: 8}}
						rightTextStyle={{color: gColor.whiteColor}}
						textStyle={{fontSize: gFontSize.bigText}}
						style={{backgroundColor: gColor.whiteColor, }}
					/>
					<View style={styles.infoBlock}>
						{this._renderSHInfo()}
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	infoBlock: {
		borderBottomWidth: 1, 
		borderTopWidth: 1, 
		borderColor: gColor.borderColors, 
		backgroundColor: gColor.whiteColor, 
		paddingVertical: 5,
	},
})