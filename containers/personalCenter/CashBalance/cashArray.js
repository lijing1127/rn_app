import React, {PropTypes,Component} from "react";
import {
	View,
	Text,
	StyleSheet,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomTitle from "../../../components/public/CustomTitle";

var TextBtn = [
	{title:'充值', nav: "Recharge"},
	{title:'提现', nav: "Withdrawals"},
];

export default class CashArray extends Component{

	constructor(props){
		super(props);
	}

	renderText(item){
		return(
			<CustomTitle 
				key={item.title}
				title={item.title}
				rightIcon={<Icon name="angle-double-right" size={18} />}
				textStyle={{fontSize:gFontSize.centerText}}
				style={{paddingVertical:10,borderBottomWidth:1,
					borderBottomColor:gColor.borderColors,
					backgroundColor:gColor.whiteColor,
				}}
				redirectPress={() => this.props.navigation.navigate(item.nav)}
			/>
		)
	}

	render(){
		return(
			<View>
				{
					TextBtn.map((item)=>this.renderText(item))
				}
				
			</View>
		)
	}
}