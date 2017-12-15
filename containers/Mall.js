import React, {Component} from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
} from "react-native";
import { SearchBar } from 'antd-mobile';

import CustomCarousel from "../components/public/CustomCarousel"; //轮播图
import ShoppingIcon from './shoppingmall/shoppingIcons';
import CustomTitle from '../components/public/CustomTitle';
import MallList from './shoppingmall/mallLists';
import Activity from './shoppingmall/activity';


export default class ShowIndex extends Component {
	static navigationOptions = {
		tabBarLabel: "商城",
		tabBarIcon: ({tintColor}) => (
			<Image source={require("../assets/images/mall.png")} style={{tintColor: tintColor}} />
		),
		header: () => (
			<View style={{width: gScreen.width, backgroundColor: gColor.importColor, paddingTop: 22,}}>
				<SearchBar placeholder="搜索商品" />
			</View>
		),
	}
	constructor(props) {
		super(props);
		this.state = {
			data: [{"id": 7, "desc": "御邦C筑", "url": "", "image": { "url": "/uploads/slide/image/7/__.jpg" }, }],
		}		
	}
	componentDidMount() {
			//轮播图片
			storage.load({
				key: 'mallImg',
				autoSync: true,
				syncInBackground: false,
				syncParams: {
					number: 2,
				},
			}).then((ret) => {
				this.setState({
					data: ret.slice(0,4),
				})
			}).catch(err => {
				console.warn(err.message);
			});
	}
	render() {
		return (
			<ScrollView style={{backgroundColor:gColor.whiteColor}}>
				<CustomCarousel data={this.state.data} />
				<ShoppingIcon navigation={this.props.navigation} />
				<CustomTitle 
					title="热门推荐"
					rightText="更多 》"
					style={styles.titleStyle}
					textStyle={styles.leftStyle}
				/>
				<MallList navigation={this.props.navigation} />
				<CustomTitle 
					title="活动专区"
					rightText="更多 》"
					style={styles.titleStyle}
					textStyle={styles.leftStyle}
				/>
				<Activity navigation={this.props.navigation} />				
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
})