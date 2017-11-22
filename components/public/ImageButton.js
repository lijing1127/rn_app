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
	text: PropTypes.string, 
	source: Image.propTypes.source,
	textStyle: Text.propTypes.style,
	imageStyle: Image.propTypes.style,
	touchableStyle: PropTypes.object,
	description: PropTypes.string,
	descriptionStyle: PropTypes.object,
}

const ImageButton = (({
	onPress,
	text,
	source,
	textStyle,
	imageStyle,
	touchableStyle,
	itemsArray,
	description,
	descriptionStyle,
}) => (
		<TouchableOpacity onPress={onPress} style={touchableStyle}>
			<Image source={source} style={imageStyle} />
			<Text style={textStyle}>
				{text}
			</Text>
			<Text style={descriptionStyle}>
				{description}
			</Text>
		</TouchableOpacity>
))

ImageButton.propTypes = propTypes;
ImageButton.defaultProps = {
	source: null,
	description: "",
}

export default ImageButton;