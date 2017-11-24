import React from "react";
import PropTypes from 'prop-types';
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
	touchableStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
	price: PropTypes.string,
	priceStyle: PropTypes.object,
	actStyle: PropTypes.object,
	specify: PropTypes.string,
	specifyStyle: PropTypes.object,
	num: PropTypes.string,
	numStyle: PropTypes.object,
	apply: PropTypes.string,
	applyStyle: PropTypes.object,
	touchStyle: PropTypes.object,
	onApplyPress: PropTypes.func,
}

const MallActivityList = (({
	onPress,
	name,
	source,
	nameStyle,
	imageStyle,
	touchableStyle,
	itemsArray,
	price,
	priceStyle,
	actStyle,
	specify,
	specifyStyle,
	num,
	numStyle,
	apply,
	applyStyle,
	touchStyle,
	onApplyPress,
}) => (
		<TouchableOpacity onPress={onPress} style={touchableStyle}>
			<Image source={source} style={imageStyle} />
			<View style={actStyle}>
				<Text style={nameStyle}>{name}</Text>
				<View  style={{flexDirection:'row'}}>
					<Text style={priceStyle}>{price}</Text>
					<TouchableOpacity onPress={onApplyPress} style={touchStyle}>
						<Text style={applyStyle}>{apply}</Text>
					</TouchableOpacity>
				</View>
				<View style={{flexDirection:'row'}}>
					<Text style={specifyStyle}>{specify}</Text>
					<Text style={numStyle}>{num}</Text>
				</View>
			</View>
		</TouchableOpacity>
))

MallActivityList.propTypes = propTypes;
MallActivityList.defaultProps = {
	source: null,
	description: "",
}

export default MallActivityList;