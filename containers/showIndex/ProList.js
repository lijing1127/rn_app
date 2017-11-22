import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import ImageArray from "../../components/public/ImageArray";

require("../../components/GlobalContants");

const styles = StyleSheet.create({
	img: {
		width: 80,
		height: 70,
	},
	scroll: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignContent: 'center',
		
	},
	distance: {
		// borderWidth: 1,
		width: gScreen.width/2, 
		alignItems: "center",
		paddingVertical: 10,
	},
});


let proList = [
	{url:require('../../assets/images/L-alabo.png'),text:'L-阿拉伯糖0',description:'960.0'},
	{url:require('../../assets/images/L-alabo.png'),text:'L-阿拉伯糖1',description:'960.0'},
	{url:require('../../assets/images/L-alabo.png'),text:'L-阿拉伯糖2',description:'960.0'},
	{url:require('../../assets/images/L-alabo.png'),text:'L-阿拉伯糖3',description:'960.0'},
];

export default class ProList extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		return (
			<View style={styles.scroll}>
				<ImageArray 
					arrItems={proList}
					key={proList.text}
					style={{flexDirection: "row",flexWrap: 'wrap'}}
					imageStyle={{width: 80, height: 70,marginVertical: 10}}
					touchableStyle={{width: gScreen.width/2, 
	 					alignItems: "center",paddingVertical: 10}} 
				/>
			</View>
		);
	}
}