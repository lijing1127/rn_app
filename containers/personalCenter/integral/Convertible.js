import React, {Component} from "react";
import {
	Text,
	ScrollView,
} from "react-native";

export default class Convertible extends Component {
	static navigationOptions = {
		tabBarLabel: "可兑换",
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Text>可兑换</Text>
		)
	}
}