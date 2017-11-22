import React, {Component} from "react";
import { PropTypes } from "prop-types"
import {
	View,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";

const propTypes = {
	onPress: PropTypes.func,
	name: PropTypes.string, 
	source: Image.propTypes.source,
	nameStyle: Text.propTypes.style,
	imageStyle: Image.propTypes.style,
	touchableStyle: PropTypes.object,
	info: PropTypes.string,
	infoStyle: PropTypes.object,
	viewStyle: PropTypes.object,
	docgoStyle: PropTypes.object,
}

const DoctorList = (({
	onPress,
	name,
	source,
	nameStyle,
	imageStyle,
	touchableStyle,
	itemsArray,
	info,
	infoStyle,
	viewStyle,
	docgoStyle,
}) => (
		<TouchableOpacity onPress={onPress} style={touchableStyle}>

			<Image source={source} style={imageStyle} />
			<View style={viewStyle}>
				<Text style={nameStyle}>{name}</Text>
				<Text style={infoStyle} numberOfLines={4}>{info}</Text>
			</View>
			<Text style={docgoStyle}> 》</Text>

		</TouchableOpacity>
))

DoctorList.propTypes = propTypes;
DoctorList.defaultProps = {
	source: null,
	description: "",
}

export default DoctorList;