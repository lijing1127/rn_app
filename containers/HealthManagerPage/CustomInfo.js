import React, {Component} from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import BasicRecord from "../personalCenter/myHealthRecord/BasicRecord";
import DynamicList from "../personalCenter/myHealthRecord/DynamicList";
import CustomTitle from "../../components/public/CustomTitle";

export default class CustonInfo extends Component{
	static navigationOptions = {
		title:'客户信息'
	}
	constructor(props){
		super(props)
	}

	render(){
		return(
			<ScrollView style={{backgroundColor:gColor.whiteColor}}>
				<BasicRecord />
				<CustomTitle 
					title="目前状况"
					style={styles.titleStyle}
					textStyle={styles.leftStyle}
				/>
				<DynamicList />
				<View style={{alignItems:'center',paddingVertical:10}}>
					<TouchableOpacity style={styles.touch} 
						onPress={()=>this.props.navigation.navigate('GoPrescribe')}>
						<Text style={styles.text}>开方</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	titleStyle:{
		borderBottomWidth: 1,
		borderColor:gColor.borderColors,
		marginTop:15,
	},
	leftStyle:{
		backgroundColor:gColor.importColor,
		color:gColor.whiteColor,
		paddingHorizontal:12,
		paddingVertical:5,
	},
	touch: {
		width:'80%',
		backgroundColor:gColor.importColor,
		borderRadius:5,
	},
	text: {
		fontSize:gFontSize.middleText,
		textAlign:'center',
		paddingVertical:10,
		color:gColor.whiteColor,
	}
})