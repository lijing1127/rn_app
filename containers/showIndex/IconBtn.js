import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";

import ImageArray from "../../components/public/ImageArray";

export default class IconBtn extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<View style={{backgroundColor: gColor.whiteColor}}>
				<ImageArray 
					arrItems={this.props.dataIcon}
					style={{flexDirection: "row",flexWrap: 'wrap'}}
					imageStyle={{width: 32, height: 32,marginVertical: 10}}
					touchableStyle={{width: gScreen.width/4, 
	 					alignItems: "center",paddingVertical: 10}} 
				/>
			</View>
		)
	}
}
