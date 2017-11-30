import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";

import DynamicList from "./DynamicList";


export default class DynamicData extends React.Component{

	static navigationOptions = {
		title:'动态监测数据'
	}
	constructor(props) {
		super(props);		
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
					<DynamicList />
			</ScrollView>
		)
	}
}