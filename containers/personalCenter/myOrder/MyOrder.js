import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import CustomTitle from '../../../components/public/CustomTitle'; 
import ImageArray from "../../../components/public/ImageArray";

export default class MyOrder extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			ImageBtn: [
				{url:require('../../../assets/images/payment.png'), text:'待付款', nav: "PendPay"},
				{url:require('../../../assets/images/receipt.png'), text:'待收货', nav: "ToReceive"},
				{url:require('../../../assets/images/evaluate.png'), text:'待评价'},
				{url:require('../../../assets/images/Return.png'), text:'退换货', nav: "Returns"},
			]
		}
	}

	render(){
		return(
			<View>
				<CustomTitle 
					title="我的订单"
					rightText="查看全部订单"
					rightIcon={<FontAwesome name="angle-double-right" size={18}/>}
					style={{borderBottomWidth: 1,paddingVertical:15,backgroundColor:gColor.whiteColor,
						borderBottomColor:gColor.borderColors}}
					textStyle={{fontSize:gFontSize.bigText}}
					onPress={()=> this.props.nav.navigate('AllOrders')}
				/>
				<ImageArray 
					arrItems={this.state.ImageBtn}
					style={{flexDirection: "row",flexWrap: 'wrap', backgroundColor: gColor.whiteColor}}
					imageStyle={{width: 32, height: 32,marginVertical: 10}} 
					touchableStyle={{width: gScreen.width/4, alignItems: "center", paddingVertical: 5,
						borderBottomWidth: 1,borderBottomColor:gColor.borderColors}}
					navigation={this.props.nav}
				/>
			</View>
		)
	
	}
}