import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
} from "react-native";




export default class MyDoctors extends Component {
	static navigationOptions = {
		title: "我的医生",
	}
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<ScrollView>
				<Text>我的医生</Text>
			</ScrollView>
		);
	}
}