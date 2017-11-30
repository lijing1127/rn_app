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
	source: Image.propTypes.source,
	nameStyle: Text.propTypes.style,
	imageStyle: Image.propTypes.style,
	outViewStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	headPicStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	infoStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	roleStyle: Text.propTypes.style,
	role: PropTypes.string,
	workStyle: Text.propTypes.style,
	work: PropTypes.string,
	lifeStyle: Text.propTypes.style,
	life: PropTypes.string,
}

const ManagerDoctorHead = (({
	name,
	source,
	nameStyle,
	imageStyle,
	outViewStyle,
	headPicStyle,
	infoStyle,
	roleStyle,
	role,
	workStyle,
	work,
	lifeStyle,
	life,
}) => (
		<View style={outViewStyle}>
			<View style={headPicStyle}>
				<Image source={source} style={imageStyle} />
				<Text style={nameStyle}>{name}</Text>
			</View>
			<View style={infoStyle}>
				<Text style={roleStyle}>角　色：{role}</Text>
				<Text style={workStyle}>工作地：{work}</Text>
				<Text style={lifeStyle}>居住地：{life}</Text>
			</View>

		</View>
))

ManagerDoctorHead.propTypes = propTypes;
ManagerDoctorHead.defaultProps = {
	source: null,
	name: "",
	role: "",
	work: "",
	life: "",
}

export default ManagerDoctorHead;