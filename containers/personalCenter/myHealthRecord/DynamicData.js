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


export default class DynamicData extends React.Component{

	static navigationOptions = {
		title:'动态监测数据'
	}
	constructor(props) {
		super(props);
		this.state = {
			ImageBtn: [
				{url:require('../../../assets/images/u266.png'), text:'血压'},
				{url:require('../../../assets/images/u266.png'), text:'血糖'},
				{url:require('../../../assets/images/u266.png'), text:'心率'},
				{url:require('../../../assets/images/u266.png'), text:'尿酸'},
				{url:require('../../../assets/images/u266.png'), text:'体重'},
				{url:require('../../../assets/images/u266.png'), text:'体温'},
				{url:require('../../../assets/images/u266.png'), text:'血脂'},
				{url:require('../../../assets/images/u266.png'), text:'TDS'},
				{url:require('../../../assets/images/u266.png'), text:'心电'},
			]
		}		
	}

	render(){
		return(
			<ScrollView>
					<View style={{height:gScreen.height/5,paddingVertical:20,alignItems: "center",backgroundColor:gColor.importColor,width:gScreen.width}}>
						<Image source={require('../../../assets/images/u266.png')}
							style={{width:65,height:65,borderRadius:32.5}}
						/>
						<Text style={{marginVertical:10,textAlign: "center",color: gColor.whiteColor}}>用户名</Text>
					</View>
					<ImageArray 
						arrItems={this.state.ImageBtn}
						style={{flexDirection: "row",flexWrap: 'wrap', backgroundColor: gColor.whiteColor}}
						imageStyle={{width: 32, height: 32,marginVertical: 10}} 
						touchableStyle={{width: gScreen.width/3, alignItems: "center", paddingVertical: 5}}
					/>
			</ScrollView>
		)
	}
}