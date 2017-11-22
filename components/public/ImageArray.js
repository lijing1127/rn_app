import React, {Component} from "react";
import PropTypes from 'prop-types';

import {
	View,
} from "react-native";
import ImageButton from "./ImageButton";

export default class ImageMode extends Component {
	static propTypes = {
		arrItems: PropTypes.array,
		touchableStyle: PropTypes.object,
		imageStyle: PropTypes.object,
		style: PropTypes.object,
		onPress: PropTypes.func,
	}
	constructor(props) {
		super(props);
	}
	render() {
		const arrItm = this.props.arrItems.map(item => (
			<ImageButton
				key={item.text}
				touchableStyle={this.props.touchableStyle}
				source={item.url}
				textStyle={this.props.textStyle}
				imageStyle={this.props.imageStyle} 
				text={item.text}
				description={item.description}
				onPress={() => this.props.navigation && this.props.navigation.navigate(item.nav)}
			/>
		))
		return (
			<View style={this.props.style}>
				{arrItm}
			</View>
		);
	}
}