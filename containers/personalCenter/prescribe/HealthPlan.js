import React, {Component} from "react";
import {
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	StyleSheet,
} from "react-native";
import ProOrder from "../myOrder/AllInOrder/ProOrder";

export default class HealthPlan extends React.Component{
	static navigationOptions = {
		title:'健康管理方案'
	}
	constructor(props){
		super(props);
	}

	render(){
		return(
			<View style={{position:'relative',height:'100%'}}>
				<ScrollView style={{backgroundColor:gColor.whiteColor,paddingTop:10}}>
					<ProOrder />
				</ScrollView>
				<TouchableOpacity style={styles.add}>
					<Text style={styles.addr}>立即购买</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	add: {
		width:gScreen.width,
		backgroundColor:gColor.importColor,
		height:45,
		position: "absolute",
		bottom:0,
	},
	addr: {
		textAlign:'center',
		paddingVertical:13,
		color: gColor.whiteColor,
	}
})