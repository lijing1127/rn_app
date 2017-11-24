import React, {Component} from "react";
import {
	ScrollView,
	Text,
	Image,
	View,
} from "react-native";
import HeadLayOut from "./personalCenter/HeadLayOut";
import MyOrder from "./personalCenter/myOrder/MyOrder";
import TitleArray from "./personalCenter/TitleArray";

export default class ShowIndex extends Component {
	static navigationOptions = {
		tabBarLabel: "我的",
		tabBarIcon: ({tintColor}) => (
			<Image source={require("../assets/images/mine.png")} style={{tintColor: tintColor}}  />
		),
		header: () => (
			<View style={{height: 22, backgroundColor: gColor.importColor}}></View>
		),
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollView>
				<HeadLayOut Per={true} navigation={this.props.navigation}/>
				<MyOrder nav={this.props.navigation}/>
				<TitleArray navigation={this.props.navigation} />
			</ScrollView>
		);
	}
}