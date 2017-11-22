import React from "react";
import PropTypes from "prop-types";
import {
	View,
	Text,
	StyleSheet,
} from "react-native";

const propTypes = {
	text: PropTypes.string, 
	viewStyle: PropTypes.object,
	style:PropTypes.object,
}

const SmallTitle = (({
	text,
	viewStyle,
	style,
}) => (
		<View style={[styles.opacStyle,style]}>
			<Text style={styles.textStyle}>
				------- {text} -------
			</Text>
		</View>
))

SmallTitle.propTypes = propTypes;
SmallTitle.defaultProps = {
	source: null,
}


const styles = StyleSheet.create ({
	opacStyle:  {
		height: 40,
		paddingTop:10,
		alignItems:'center',
	},
	textStyle: {
		fontSize:gFontSize.smallText,
		paddingHorizontal: 5,
	}
})

export default SmallTitle;