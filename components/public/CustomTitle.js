import React from "react";
import PropTypes from "prop-types";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";

require("../GlobalContants");

const propTypes = {
	onPress: PropTypes.func,
	title: PropTypes.string,
	rightText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	rightIcon: PropTypes.element,
	textStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
	rightTextStyle: PropTypes.object,
	style: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.array]),
	touchableStyle: PropTypes.object,
	redirectPress: PropTypes.func,
}

const CustomTitle = (({
	onPress,
	title,
	rightText,
	rightIcon,
	textStyle,
	rightTextStyle,
	style,
	touchableStyle,
	redirectPress,
}) => (
	<TouchableWithoutFeedback onPress={redirectPress}>
		<View style={[styles.container, style]}>
			<Text style={textStyle}>{title}</Text>
			<TouchableOpacity onPress={onPress} style={touchableStyle}>
				<Text style={[styles.rightAlign, rightTextStyle]}>{rightText} {rightIcon}</Text>
			</TouchableOpacity>	
		</View>
	</TouchableWithoutFeedback>
))

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 3,
		paddingHorizontal: 10,
	},

	rightAlign: {
		color:gColor.textColor2,
	}
})

CustomTitle.propTypes = propTypes;
CustomTitle.defaultProps = {
	rightIcon: null,
}

export default CustomTitle;