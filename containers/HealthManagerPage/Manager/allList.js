import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
} from "react-native";



export default class allList extends Component {

	static navigationOptions = {
		tabBarLabel: "全部客户",
	}	

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView>
				<Text>全部</Text>
			</ScrollView>
		);
	}
}