import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
} from "react-native";



export default class AlreadyPass extends Component {

	static navigationOptions = {
		tabBarLabel: "已审核",
	}	

	constructor(props) {
		super(props);

	}
	render() {
		return (
			<ScrollView>
				<Text>AlreadyPass</Text>
			</ScrollView>
		);
	}
}