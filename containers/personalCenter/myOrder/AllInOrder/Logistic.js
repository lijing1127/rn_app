import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
} from "react-native";

export default class Logistic extends React.Component{
	static navigationOptions = {
		title:'物流情况'
	}
	constructor(props){
		super(props);
	}

	render(){	
		return(
			<ScrollView style={{backgroundColor:gColor.whiteColor}}>
				<View style={{flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:gColor.borderColors}}>
					<Text>编号：</Text>
					<Text>20171025162617283420</Text>
				</View>
				<View style={{flexDirection:'row',padding:10,borderBottomWidth:1,borderColor:gColor.borderColors}}>
					<Text>快递单号：</Text>
					<Text>89/457894894</Text>
				</View>
				<Text style={{textAlign:'center',paddingVertical:10}}>未查到物流情况，或请重新刷新页面</Text>
				<Text style={{textAlign:'center'}}>刷新</Text>
			</ScrollView>
		)
		
	}
}