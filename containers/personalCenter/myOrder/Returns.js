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

export default class Returns extends React.Component{

	static navigationOptions = {
		title:'退换货'
	}
	constructor(props) {
		super(props);
		
	}

	render(){
		return(
			<ScrollView style={{backgroundColor:gColor.whiteColor}}>
				<CustomTitle 
					title="订单号：20171025162617283420"
					rightText="已收货"
					style={{borderBottomWidth: 1,paddingVertical:10,borderBottomColor:gColor.borderColors,
						justifyContent:'space-between'}}
				/>
				<ReceiveRalate />
				<AndApplyOrder navi={this.props.navigation}/>
				<View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:20,
					paddingVertical:10,borderBottomWidth:1,borderBottomColor:gColor.borderColors}}>
					<TouchableOpacity style={styles.touch} >
						<Text style={styles.text}>查看物流</Text>
					</TouchableOpacity>
					<Text style={styles.total}>共1件，合计：￥999</Text>
				</View>
			</ScrollView>
		)
	
	}
}


const styles = StyleSheet.create({
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
