import React, {Component} from "react";
import {
	View,
	Text,
	TouchableOpacity,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import CustomTitle from '../../../components/public/CustomTitle';

import Users from "../../../models/Users";

export default class ReceiveRalate extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			addressStatus: false,
		}
	}

	componentDidMount() {
		//获取用户的id；
		storage.load({
			key: 'getToken',
		}).then((retUser) => {
			//获取用户的默认收货地址；
			storage.load({
				key: 'getDefaultAddress',
				autoSync: true,
				syncInBackground: true,
				syncParams: {
					user_id: retUser.id,
				},
			}).then((ret) => {
				if(ret == "该用户无默认地址！") {
					Users.getAllAddress(retUser.id).then(() => {
						if (Users.allAddress == "该用户还未创建地址！") {
							this.setState({
								addressStatus: false,
							})
						}else{
							console.log("用户有地址,但是未设置默认地址");
						}
					});
				}else {
					console.log("有默认地址");
					this.setState({
						addressStatus: true,
					})
				}
			}).catch(err => {
				console.warn(err.message);
			})
			
		}).catch(err => {
			console.log(err);
		})
	}

	render(){
		//收货地址
		const addressView = () => (
			<View>
				<View style={{justifyContent:'space-around',paddingLeft:20,paddingRight:13}}>
					<FontAwesome name="map-marker" size={28}/>
				</View>
				<View style={{paddingVertical:5,width:'80%',paddingLeft:10}}>
					<View style={{flexDirection:'row',justifyContent:'space-between'}}>
						<Text>收货人：XX</Text><Text >157****1003</Text>
					</View>
							
					<Text style={{lineHeight:25}}>
						收货地址：深圳市南山区西丽街道中山园路1001号TCL国际城你好你好你你你你你你你你你123456789
					</Text>
					
				</View>
			</View>
		)
		const addressNone = () => (
			<View style={{flexDirection: "row"}}>
				<View style={{justifyContent:'space-around',paddingLeft:20,paddingRight:13}}>
					<FontAwesome name="map-marker" size={28}/>
				</View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate("NewAddress")}>
					<Text style={{fontSize: gFontSize.middleText}}>收货地址：</Text>
					<Text style={{lineHeight:25, color: "red", marginLeft: 100, marginBottom: 15}}>
						添加收货地址
					</Text>
				</TouchableOpacity>
			</View>
			
		)
		console.log(this.state.addressStatus);
		return (
			<View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:gColor.borderColors,paddingVertical:10}}>
				{ this.state.addressStatus ? addressView() : addressNone() }
			</View>
		)
	}
}