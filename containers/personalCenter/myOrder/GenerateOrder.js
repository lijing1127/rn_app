import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet
} from "react-native";
import CustomTitle from '../../../components/public/CustomTitle';

export default class GenerateOrder extends React.Component{
	static navigationOptions = {
		title:'生成订单'
	}

	render(){
		return(
			<View  style={{position:'relative',height:'100%'}}>
				<ScrollView  style={{backgroundColor:gColor.whiteColor}}>

					<View style={{flexDirection:'row',justifyContent:'center',
						borderBottomWidth:1,borderColor:gColor.borderColors,paddingVertical:15
					}}>
						<Text style={{lineHeight:40}}>订单总额：￥</Text>
						<Text style={{lineHeight:43,fontSize:gFontSize.titleText}}>9999</Text>
					</View>

					<View>
						<CustomTitle 
							title="还需支付"
							rightText="￥9999"
							rightTextStyle={{color:gColor.importColor}}
							style={{paddingVertical:10,borderBottomWidth:1,borderBottomColor:gColor.borderColors}}	
						/>
						<Text style={{paddingVertical:10,borderBottomWidth:1,borderBottomColor:gColor.borderColors,
							marginLeft:'2%'}}>提示：  提交订单后，三天未制度，系统将自动取消该订单</Text>
					</View>

				</ScrollView>

				<TouchableOpacity style={styles.add}>
					<Text style={styles.addr}>确认支付</Text>
				</TouchableOpacity>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	textInp: {
		height: 40, 
		borderColor: '#9e9898', 
		borderWidth: 1,
		padding: 0,
	},
	listSty: {
		flexDirection:'row',
		marginTop:10,
		justifyContent:'space-between',
		marginRight:15
	},
	txtSty: {
		marginLeft:10,
		lineHeight:30
	},
	add: {
		width:gScreen.width,
		backgroundColor:gColor.importColor,
		height:45,
		position: "absolute",
		bottom:0,
	},
	addr: {
		textAlign:'center',
		paddingVertical:13,
		color: gColor.whiteColor,
	}
})