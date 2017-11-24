import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import CustomTitle from '../../../components/public/CustomTitle'; 
import HeadLayOut from "../HeadLayOut";


export default class HealthRecord extends Component {
	static navigationOptions = {
		title:'健康档案'
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<HeadLayOut />	
				<CustomTitle 
					title="我的基础健康档案"
					rightIcon={<FontAwesome name="angle-right" size={18}/>}
					style={[styles.listItem, {borderTopWidth: 1,borderTopColor: gColor.color2,}]}
					redirectPress={()=> this.props.navigation.navigate('BasicRecord')}
					textStyle={{fontSize: gFontSize.bigText}}
				/>
				<CustomTitle 
					title="我的动态监测"
					rightIcon={<FontAwesome name="angle-right" size={18}/>}
					style={styles.listItem}
					redirectPress={()=> this.props.navigation.navigate('DynamicData')}
					textStyle={{fontSize: gFontSize.bigText}}
					
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		borderBottomWidth: 1, 
		borderBottomColor: gColor.borderColors,
		paddingVertical:10,
		backgroundColor: gColor.whiteColor,
	} 
})