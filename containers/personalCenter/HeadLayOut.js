import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";

require("../../components/GlobalContants");

export default class HeadLayOut extends React.Component{
	constructor(props){
		super(props);
	}

	renderItem = () => {
		return (
			<View style={{flexDirection: "row",marginVertical: 10}}>
				<TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center'}}>
					<Text style={{color: gColor.whiteColor}}>易积分 999</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center'}} onPress={() => this.props.navigation.navigate("CashBalance")}>
					<Text style={{color: gColor.whiteColor}}>现金余额 999</Text>
				</TouchableOpacity>
			</View>
		) 
	}
	render(){
		return(
			<View style={{alignItems: "center",paddingVertical:20,backgroundColor:"#ad0e11",width:gScreen.width}}>
				<View >
					<Image source={require('../../assets/images/u266.png')} 
						style={{width:65,height:65,borderRadius:32.5,borderColor: gColor.borderColors}}/>
					<Text style={{marginVertical:10,textAlign: "center",color: gColor.whiteColor}}>用户名</Text>
				</View>
				{ this.props.Per ? this.renderItem() : null }
			</View>
		)
	}
}