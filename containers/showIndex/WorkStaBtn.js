import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";

import ImageArray from "../../components/public/ImageArray";

var dataWorkSta = [
	{url:require('../../assets/images/u266.png'),text:'御邦深圳工作站'},
	{url:require('../../assets/images/u266.png'),text:'御邦新疆工作站'},
];

export default class WorkStaBtn extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<View>
				<ImageArray 
					arrItems={dataWorkSta}
					key={dataWorkSta.text}
					style={{flexDirection: "row"}}
					imageStyle={{width: 140, height: 100,marginBottom: 10}}
					touchableStyle={{width: gScreen.width/2, 
	 					alignItems: "center",paddingVertical: 10}} 
				/>
			</View>
		)
	}
}
