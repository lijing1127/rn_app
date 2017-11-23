import React, {Component} from "react";
import {
	ScrollView,
	Text,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import CustomTitle from '../../../components/public/CustomTitle';
import MyOrder from '../../personalCenter/myOrder/MyOrder';

export default class OrderAndAddr extends React.Component{
	static navigationOptions = {
		title: "我的订单",
	}
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<ScrollView>
				<MyOrder nav={this.props.navigation} />
				<CustomTitle 
					title="设置"
					rightText="收货地址管理"
					rightIcon={<FontAwesome name="angle-double-right" size={18}/>}
					style={{borderBottomWidth: 1,paddingVertical:10,backgroundColor:gColor.whiteColor,
						borderBottomColor:gColor.borderColors}}
					onPress={() => this.props.navigation.navigate('ReceiveAddr')}
					textStyle={{fontSize:gFontSize.bigText}}
				/>
			</ScrollView>
		)
	
	}
}