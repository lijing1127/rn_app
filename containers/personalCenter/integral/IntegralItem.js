import React, {Component} from "react";
import {
	View,
	StyleSheet,
} from "react-native";
import CustomTitle from "../../../components/public/CustomTitle";

export default class Usable extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { integralCount, integraltime, integralname, integraltype } = this.props.integralitems
		return (
			<View style={styles.containerList}>
				<CustomTitle 
					title={`${integraltype}`}
					rightText={`${integraltime}`}
				/>
				<CustomTitle 
					title={`${integralname}`}
					rightText={`${integralCount}`}

				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containerList: {
		backgroundColor: gColor.whiteColor,
		paddingVertical: 8,
		borderTopWidth: 1,
		borderTopColor: gColor.borderColors,
		borderBottomWidth: 1,
		borderBottomColor: gColor.borderColors,
	}
})