import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	FlatList,
	ActivityIndicator,
} from "react-native";
import { SearchBar } from 'antd-mobile';
require("../components/GlobalStorage");

import CustomCarousel from "../components/public/CustomCarousel"; //轮播图
import IconBtn from "./showIndex/IconBtn"; //八个图标
import ScrollList from './showIndex/ScrollList';//可以滑动的医生列表
import WorkStaBtn from './showIndex/WorkStaBtn';//服务中心
import Graphic from './showIndex/Graphic';//热卖产品
import ProList from './showIndex/ProList';//产品列表
import CustomTitle from '../components/public/CustomTitle'; 

const dataIcon = [
	{url:require('../assets/images/teach.png'), text:'健康教育',},
	{url:require('../assets/images/service.png'), text:'服务中心',nav:'ServerCenter'},
	{url:require('../assets/images/administrator.png'), text:'健康管理师',nav:'ManagerIndex'},
	{url:require('../assets/images/activity.png'), text:'活动',},
	{url:require('../assets/images/u276.png'), text:'一盏明灯',},
	{url:require('../assets/images/lianmeng.png'), text:'商盟',},
	{url:require('../assets/images/dangan.png'), text:'健康档案',nav:'HealthRecord'},
	{url:require('../assets/images/help.png'), text:'客户服务',nav:'CustomerService'},
];


export default class ShowIndex extends Component {
	static navigationOptions = ({navigation}) => ({
		tabBarLabel: "首页",
		tabBarIcon: ({tintColor}) => (
			<Image source={require("../assets/images/home.png")} style={{tintColor: tintColor}}  />
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
			allWork: [],
		}
	}
	componentDidMount() {
		//轮播图
		storage.load({
			key: 'sliderImg',
			autoSync: true,
			syncInBackground: false,
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
		//服务中心
		storage.load({
			key: 'getAllWork',
			autoSync: true,
			syncInBackground: false,
		}).then((ret) => {
			this.setState({
				allWork: ret,
			})
		}).catch(err => {
			console.warn(err.message);
		})
	}
	render() {
		return (
			<ScrollView>
				<CustomCarousel data={this.state.data} />
				<IconBtn dataIcon={dataIcon} navigation={this.props.navigation} />
				<CustomTitle 
				title="健康管理师"
				rightText="更多"
				style={{borderBottomWidth: 1,paddingVertical:10}}
				/>
				<ScrollList />
				<CustomTitle 
				title="服务中心"
				rightText="更多"
				style={{borderBottomWidth: 1,paddingVertical:10}}
				/>
				<WorkStaBtn allWork={this.state.allWork} />
				<CustomTitle 
				title="热卖产品"
				rightText="更多"
				style={{borderBottomWidth: 1,paddingVertical:10}}
				/>
				<Graphic />
				<ProList />
			</ScrollView>
		);
	}
}