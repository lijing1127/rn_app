import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
} from "react-native";
import { SearchBar } from 'antd-mobile';
import CustomCarousel from "../components/public/CustomCarousel"; //轮播图
import ServerIcon from "./showIndex/IconBtn";//图标
import Physician from "./serverCenter/Physician";//主治医师
import AllDocList from "./serverCenter/allDocList";//医生列表

import CustomTitle from '../components/public/CustomTitle'; 

const serIcon = [
	{url:require('../assets/images/u266.png'), text:'健康教育'},
	{url:require('../assets/images/u266.png'), text:'服务中心'},
	{url:require('../assets/images/u266.png'), text:'健康管理师'},
	{url:require('../assets/images/u266.png'), text:'活动'},
];

export default class ServerCenter extends Component {
	static navigationOptions = {
		tabBarLabel: "服务中心",
		tabBarIcon: ({tintColor}) => (
			<Image source={require("../assets/images/center.png")} style={{tintColor: tintColor}} />
		),
		header: () => (
			<View style={{width: gScreen.width, backgroundColor: gColor.importColor, paddingTop: 22,}}>
				<SearchBar placeholder="甘净" />
			</View>
		),
	}
	constructor(props) {
		super(props);
		this.state = {
			data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
		}
	}
	render() {
		return (
			<ScrollView>
				<CustomCarousel data={this.state.data} />
				<ServerIcon dataIcon={serIcon} />
				<CustomTitle 
					title="主治医师"
					style={{borderBottomWidth: 1,borderBottomColor:gColor.borderColors,paddingVertical:10}}
				/>
				<Physician />
				<CustomTitle 
					title="医生列表"
					style={{borderBottomWidth: 1,borderBottomColor:gColor.borderColors,paddingVertical:10}}
				/>
				<AllDocList />
			</ScrollView>
		);
	}
}