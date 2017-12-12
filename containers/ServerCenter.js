import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
} from "react-native";
import { SearchBar } from 'antd-mobile';
import { FontAwesome } from '@expo/vector-icons';

import CustomCarousel from "../components/public/CustomCarousel"; //轮播图
import ImageArray from "../components/public/ImageArray";
import CustomTitle from '../components/public/CustomTitle'; 



export default class ShowIndex extends Component {
	static navigationOptions = ({navigation}) => ({
		tabBarLabel: "服务中心",
		tabBarIcon: ({tintColor}) => (
			<Image source={require("../assets/images/center.png")} style={{tintColor: tintColor}} />
		),
		header: () => (
			<View style={{width: gScreen.width, backgroundColor: gColor.importColor, paddingTop: 22,}}>
				<SearchBar placeholder="甘净" />
			</View>
		),
	})
	constructor(props) {
		super(props);
		this.state = {
			data: [{"id": 32, "desc": "御易健", "url": "ybyt.cc", "image": { "url": "/uploads/slide/image/32/_.png" }, }],
			ImageBtn: [
				{url:require('../assets/images/u266.png'), text:'爱心解答'},
				{url:require('../assets/images/u266.png'), text:'服务'},
				{url:require('../assets/images/u266.png'), text:'健康数据'},
				{url:require('../assets/images/u266.png'), text:'店家'},
			],
			ImageList: [
				{url:require('../assets/images/lightOne.jpg'), text:'健康管理师1', description: '这部分属于详细描述的部分！'},
				{url:require('../assets/images/lightOne.jpg'), text:'健康管理师2', description: '这部分属于详细描述的部分！'},
			],
		}
	}
	componentDidMount() {
		storage.load({
			key: 'sliderImg',
			autoSync: true,
			syncInBackground: true,
			syncParams: {
				number: 1,
			},
		}).then((ret) => {
			this.setState({
				data: ret,
			})
		}).catch(err => {
			console.warn(err.message);
		})
	}
	render() {
		return (
			<ScrollView>
				<CustomCarousel data={this.state.data} />
				<ImageArray 
					arrItems={this.state.ImageBtn}
					style={{flexDirection: "row",flexWrap: 'wrap', backgroundColor: gColor.whiteColor}}
					imageStyle={{width: 32, height: 32,marginVertical: 10}} 
					touchableStyle={{width: gScreen.width/4, alignItems: "center", paddingVertical: 5}}
				/>
				<CustomTitle 
					title="热门话题"
					rightText="查看全部"
					rightIcon={<FontAwesome name="angle-double-right" size={18} />}
				/>
				<ImageArray 
					arrItems={this.state.ImageList}
					touchableStyle={{backgroundColor: gColor.whiteColor, marginVertical: 5, paddingLeft: 5, paddingBottom: 5,}}
					imageStyle={{width: gScreen.width - 10, height: gScreen.width/4,}} 
					textStyle={{fontSize: gFontSize.bigText, marginVertical: 5}}
				/>
			</ScrollView>
		);
	}
}