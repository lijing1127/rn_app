import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";

import CustomTitle from '../../../components/public/CustomTitle';
import ReceiveRalate from '../../shoppingmall/orderAndAddr/ReceiveRalate';
import MallActivityList from '../../../components/public/mallActivityList';
import ProOrder from './AllInOrder/ProOrder';
import AndApplyOrder from './AllInOrder/AndApplyOrder';


export default class AllOrders extends React.Component{

	static navigationOptions = {
		title: "全部订单",
	}

	CancelList = [
		{name:'龙脑喷雾',source:require("../../../assets/images/L-alabo.png"),price:'20ml*20支/盒',specify:'￥960',num:'*1'},
	]
	
	_renderCancelList=(CancelList,key) => {
		const {name,source,price,specify,num} = CancelList;
 
		return (
			<MallActivityList 
				key = {`${name}-${key}`}
				touchableStyle={styles.touchableStyle}
				source={source}
				imageStyle={styles.imageStyle}
				name={name}
				price={price}
				specify={specify}
				num={num}
				nameStyle={{fontSize:gFontSize.centerText}}
				priceStyle={{fontSize:gFontSize.smallText,paddingVertical:6}}
				actStyle={{paddingLeft:'5%'}}
				specifyStyle={{marginRight:'50%'}}
			/>
		)
	}

	render(){
		return (
			<ScrollView style={{backgroundColor:gColor.whiteColor}}>
				<CustomTitle 
					title="订单号：20171025162617283420"
					rightText="待付款"
					style={{borderBottomWidth: 1,paddingVertical:10,borderBottomColor:gColor.borderColors,
						justifyContent:'space-between'}}
				/>
				<ReceiveRalate />
				<ProOrder />
				<Text style={styles.total}>共2件，合计：￥9999</Text>
				<View style={styles.dubBtn}>
					<TouchableOpacity style={styles.touch} onPress={() => this.props.navigation.navigate('ConfirmOrder')}>
						<Text style={styles.text}>线上支付</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.touch}>
						<Text style={styles.text}>取消订单</Text>
					</TouchableOpacity>
				</View>

				<CustomTitle 
					title="订单号：20171025162617283420"
					rightText="已收货"
					style={{borderBottomWidth: 1,paddingVertical:10,borderBottomColor:gColor.borderColors,
						justifyContent:'space-between'}}
				/>
				<ReceiveRalate />
				<AndApplyOrder navi={this.props.navigation}/>
				<View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:20,paddingVertical:10,
					borderBottomWidth:1,borderBottomColor:gColor.borderColors}}>
					<TouchableOpacity style={styles.touch} onPress={()=> this.props.navigation.navigate('Logistic')}>
						<Text style={styles.text}>查看物流</Text>
					</TouchableOpacity>
					<Text style={{paddingRight:15,paddingVertical:5}}>共1件，合计：￥999</Text>
				</View>

				<CustomTitle 
					title="订单号：20171025162617283420"
					rightText="已取消"
					style={{borderBottomWidth: 1,paddingVertical:10,borderBottomColor:gColor.borderColors,
						justifyContent:'space-between'}}
				/>
				<ReceiveRalate />
				<View >
					{this.CancelList.map(this._renderCancelList)}
				</View>
				<Text style={styles.total}>共1件，合计：￥999</Text>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	touchableStyle: {
		width: gScreen.width,
		flexDirection:'row',
		borderBottomWidth:1,
		borderBottomColor:gColor.borderColors,
		paddingVertical:10,
		paddingLeft:'12%',
	},
	imageStyle: {
		width: 70, 
		height: 60,
		borderWidth:1,
		borderColor:gColor.color1,
	},
	total: {
		textAlign:'right',
		paddingRight:15,
		borderBottomWidth: 1,
		borderBottomColor:gColor.borderColors,
		paddingVertical:10,
	},
	dubBtn: {
		flexDirection:'row',
		justifyContent:'flex-end',
		paddingVertical:10,
		borderBottomWidth: 1,
		borderBottomColor:gColor.borderColors,
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
	bac: {
		backgroundColor:gColor.importColor,
		width:'12%',
		borderRadius:5,
		paddingRight:10,
		justifyContent:'center',
		// paddingTop:'5%',
	},
	apply: {
		textAlign:'center',
		paddingVertical:8,
		justifyContent:'center',
		color:gColor.whiteColor,
	},

})