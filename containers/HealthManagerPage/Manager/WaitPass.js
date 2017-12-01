import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
} from "react-native";



export default class WaitPass extends Component {

	static navigationOptions = {
		tabBarLabel: "待审核",
	}	

	constructor(props) {
		super(props);

	}
	render() {
		return (
			<ScrollView>
				<Text>WaitPass</Text>
			</ScrollView>
		);
	}
}