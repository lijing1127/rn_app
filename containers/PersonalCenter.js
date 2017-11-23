import React, {Component} from "react";
import {
	ScrollView,
	Text,
} from "react-native";
import HeadLayOut from "./personalCenter/HeadLayOut";
import MyOrder from "./personalCenter/myOrder/MyOrder";
import TitleArray from "./personalCenter/TitleArray";

export default class ShowIndex extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ScrollView>
				<HeadLayOut Per={true} navigation={this.props.navigation} />
				<MyOrder />
				<TitleArray navigation={this.props.navigation} />
			</ScrollView>
		);
	}
}