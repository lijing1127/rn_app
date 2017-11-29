import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";

import ImageArray from "../../../components/public/ImageArray";


export default class DynamicList extends React.Component{

	static navigationOptions = {
		title:'动态监测数据'
	}
	constructor(props) {
		super(props);
		this.state = {
			ImageBtn: [
				{url:require('../../../assets/images/pressure.png'), text:'血压'},
				{url:require('../../../assets/images/bloodsugar.png'), text:'血糖'},
				{url:require('../../../assets/images/rate.png'), text:'心率'},
				{url:require('../../../assets/images/uricacid.png'), text:'尿酸'},
				{url:require('../../../assets/images/weight.png'), text:'体重'},
				{url:require('../../../assets/images/temperature.png'), text:'体温'},
				{url:require('../../../assets/images/fat.png'), text:'血脂'},
				{url:require('../../../assets/images/TDS.png'), text:'TDS'},
				{url:require('../../../assets/images/ECG.png'), text:'心电'},
			]
		}		
	}

	render(){
		return(
			<ScrollView>
				<ImageArray 
					arrItems={this.state.ImageBtn}
					style={{flexDirection: "row",flexWrap: 'wrap', backgroundColor: gColor.whiteColor}}
					imageStyle={{width: 50, height: 50,marginVertical: 10}} 
					touchableStyle={{width: gScreen.width/3, alignItems: "center", paddingVertical: 5}}
				/>
			</ScrollView>
		)
	}
}