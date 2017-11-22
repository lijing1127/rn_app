import React, {Component} from "react";
import {
	Text,
} from "react-native";

export default class ValueAdded extends Component {
	static navigationOptions = {
		tabBarLabel: "可增值",
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Text>可增值</Text>
		)
	}
}