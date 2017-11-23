import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import CustomTitle from '../../../components/public/CustomTitle';

export default class ReceiveRalate extends React.Component{

	render(){
		return (
			<View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:gColor.borderColors,paddingVertical:10}}>
				<View style={{justifyContent:'space-around',paddingLeft:20,paddingRight:13}}>
					<FontAwesome name="map-marker" size={28}/>
				</View>
				<View style={{paddingVertical:5,width:'80%',paddingLeft:10}}>
					<View style={{flexDirection:'row',justifyContent:'space-between'}}>
						<Text>收货人：XX</Text><Text >157****1003</Text>
					</View>
							
					<Text style={{lineHeight:25}}>
						收货地址：深圳市南山区西丽街道中山园路1001号TCL国际城你好你好你你你你你你你你你123456789
					</Text>
					
				</View>
			</View>
		)
	}
}