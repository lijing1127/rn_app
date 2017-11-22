import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import AndApplyOrder from './AndApplyOrder';
import CustomTitle from '../../../components/public/CustomTitle';
import ReceiveRalate from './ReceiveRalate';
import ProOrder from './ProOrder';

export default class Returns extends React.Component{

	static navigationOptions = {
		title:'待收货'
	}
	constructor(props) {
		super(props);
		
	}

	render(){
		return(
			<ScrollView style={{backgroundColor:gColor.whiteColor}}>
				<CustomTitle 
					title="订单号：20171025162617283420"
					rightText="待收货"
					style={{borderBottomWidth: 1,paddingVertical:10,borderBottomColor:gColor.borderColors,
						justifyContent:'space-between'}}
				/>
				<ReceiveRalate />
				<ProOrder />
				<View style={styles.dubBtn}>
					<TouchableOpacity style={styles.touch} >
						<Text style={styles.text}>查看物流</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touch} >
						<Text style={styles.text}>确认收货</Text>
					</TouchableOpacity>
					<Text style={styles.total}>共1件，合计：￥999</Text>
				</View>
			</ScrollView>
		)
	
	}
}


const styles = StyleSheet.create({
	dubBtn: {
		flexDirection:'row',
		justifyContent:'flex-end',
		paddingVertical:10,
		borderBottomWidth: 1,
		borderBottomColor:gColor.borderColors,
		// justifyContent:'space-between',
		paddingLeft:20,
	},
	total: {
		textAlign:'right',
		paddingRight:15,
		borderBottomWidth: 1,
		borderBottomColor:gColor.borderColors,
		paddingVertical:10,
	},
	touch: {
		borderColor:gColor.importColor,
		borderWidth:1,
		width:'20%',
		borderRadius:5,
		marginRight:10,
	},
	text: {
		textAlign:'center',
		paddingVertical:6,
		color:gColor.importColor,
	},
})
