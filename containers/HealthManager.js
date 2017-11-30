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
	{url:require('../assets/images/search.png'), text:'搜索医生',nav:'SearchDoctors'},
	{url:require('../assets/images/archives.png'), text:'健康档案',nav:'BasicRecord'},
	{url:require('../assets/images/programme.png'), text:'我的方案',nav:'Prescribe'},
	{url:require('../assets/images/Healthmanager.png'), text:'我的医生',nav:'CustomInfo'},
];

export default class ServerCenter extends Component {
	static navigationOptions = ({navigation}) => ({
		tabBarLabel: "健康管理师",
		tabBarIcon: ({tintColor}) => (
			<Image source={require("../assets/images/administrator.png")} style={{tintColor: tintColor}} />
		),
		header: () => (
			<View style={{width: gScreen.width, backgroundColor: gColor.importColor, paddingTop: 22,alignItems: "center",}}>
				<View style={{backgroundColor: "#efeff4", width: "100%", height: 44, flexDirection: "row", alignItems: "center", paddingRight: 5}}>
					<View style={{flex: 2}}><SearchBar placeholder="甘净" showCancelButton={false} /></View>
					<Text style={{color: gColor.importColor, fontSize: gFontSize.middleText,}} onPress={() => navigation.navigate("ManagerIndex")}>管理师版</Text>
				</View>
			</View>
		),
	})
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
				<ServerIcon dataIcon={serIcon} navigation={this.props.navigation} />
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