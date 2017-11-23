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
				<HeadLayOut Per={true} />

				<MyOrder nav={this.props.navigation} />
				<TitleArray  navigation={this.props.navigation} />

			</ScrollView>
		);
	}
}