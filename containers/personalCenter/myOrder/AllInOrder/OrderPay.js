import React, {Component} from "react";
import {
	View,
	ScrollView,
	Text,
	StyleSheet,
} from "react-native";

export default class OrderPay extends React.Component{
	static navigationOptions = {
		title:'订单支付'
	}

	render(){
		return (
			<View>
				<ScrollView>
					<View style={{flexDirection:'row'}}>
						<Text>订单总额:</Text>
						<Text style={{fontSize:gFontSize.titleText}}>¥ 1920.00</Text>
					</View>
					<View style={{flexDirection:'row',justifyContent:'space-between'}}>
						<Text>还需支付:</Text>
						<Text>¥ 1920.00</Text>
					</View>
					<Text>提示：提交订单后，三天未付款，系统将取消该订单</Text>
				</ScrollView>
				
			</View>
		)
	}
}