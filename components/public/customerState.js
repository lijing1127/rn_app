//managerDoctorHead
import React, {Component} from "react";
import { PropTypes } from "prop-types"
import {
	View,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";

const propTypes = {
	name: PropTypes.string, 
	nameStyle: Text.propTypes.style,
	outViewStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.object]),
	leftStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.object]),
	rightStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.object]),
	stateStyle: Text.propTypes.style,
	userState: PropTypes.string,
	passStyle:  PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.object]),
	textStyle: Text.propTypes.style,
	otherStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number,PropTypes.object]),
}

const CustomerState = (({
	outViewStyle,
	leftStyle,
	nameStyle,
	name,
	stateStyle,
	userState,
	rightStyle,
	textStyle,
	passStyle,
	otherStyle,
}) => (
		<View style={outViewStyle}>
			<View style={leftStyle}>
				<Text style={nameStyle}>申请人：{name}</Text>
				<Text style={stateStyle}>审核状态：{userState}</Text>
			</View>
			<View style={rightStyle}>
				<TouchableOpacity style={passStyle}><Text style={textStyle}>通过</Text></TouchableOpacity>
				<TouchableOpacity style={otherStyle}><Text style={textStyle}>不通过</Text></TouchableOpacity>
			</View>

		</View>
))

CustomerState.propTypes = propTypes;
CustomerState.defaultProps = {
	name: "",
	userState: "",
}

export default CustomerState;