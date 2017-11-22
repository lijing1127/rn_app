import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";

import ImageArray from "../../components/public/ImageArray";

var docList = [
	{url:require('../../assets/images/doc.jpg'),text:'张仲景',description:'全科'},
	{url:require('../../assets/images/doc.jpg'),text:'华佗',description:'全科'},
	{url:require('../../assets/images/doc.jpg'),text:'李时珍',description:'全科'},
	{url:require('../../assets/images/doc.jpg'),text:'孙思邈',description:'全科'},
];

export default class Physician extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<View>
				<ImageArray 
					arrItems={docList}
					key={docList.text}
					style={{flexDirection: "row"}}
					imageStyle={{width: 80, height: 100,marginVertical: 10}}
					touchableStyle={{width: gScreen.width/4, 
	 					alignItems: "center",paddingVertical: 5}} 
				/>
			</View>
		);
	}
}