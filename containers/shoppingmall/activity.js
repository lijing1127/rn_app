import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
} from "react-native";
import MallActivity from "./mallActivity";



export default class Activity extends Component {

	activityImage = [
		{img:require("../../assets/images/health.jpg")},
		{img:require("../../assets/images/health.jpg")},
	]

	_renderActivity = (activityImage,key) => {
		const { img } = activityImage;

		return (

			<View key = {`${img}-${key}`} style={styles.viewStyle}>
				<Image source={img} style={{width:gScreen.width-20,height:gScreen.width/3}}/>
				<MallActivity />
			</View>

		)
	}

	render(){
		return(
				<View>
					{this.activityImage.map(this._renderActivity)}
				</View>			
		)
	}

}


const styles = StyleSheet.create({
	viewStyle:{
		marginVertical :10,
		alignItems:'center',
	}
})