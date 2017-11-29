import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
} from "react-native";



export default class SearchDoctors extends Component {
	static navigationOptions = {
		title: "搜索医生",
	}
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<ScrollView>
				<Text>搜索医生</Text>
			</ScrollView>
		);
	}
}