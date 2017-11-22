//
import React, {Component, PropTypes} from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

const propTypes = {
	text: PropTypes.string, 
	style:PropTypes.object,
}

const Specifications = (({
	text,
	style,
}) => (
		<TouchableOpacity style={[styles.touchStyle,style]}>
			<Text style={styles.textStyle}>
				{text}
			</Text>
		</TouchableOpacity>
))

Specifications.propTypes = propTypes;
Specifications.defaultProps = {
	source: null,
}


const styles = StyleSheet.create ({
	touchStyle:  {
		height: 20,
		width:'30%',
		alignItems:'center',
		borderWidth:1,
		borderColor:gColor.importColor,
		borderRadius:5,
		marginLeft:5,
	},
	textStyle: {
		fontSize:gFontSize.smallText,
		paddingHorizontal: 5,
		color:gColor.importColor,
	}
})

export default Specifications;