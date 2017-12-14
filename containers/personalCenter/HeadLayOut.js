import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	TouchableOpacity,
} from "react-native";
import {observer} from "mobx-react/native";
import Users from "../../models/Users";

require("../../components/GlobalContants");

@observer
export default class HeadLayOut extends React.Component{
	constructor(props){
		super(props);
	}

	renderItem = () => {
		return (
			<View style={{flexDirection: "row",marginVertical: 10}}>
				<TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center'}} onPress={() => this.props.navigation.navigate("Yiintegral")}>
					<Text style={{color: gColor.whiteColor}}>易积分 999</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{width:'50%',justifyContent:'center',alignItems:'center'}} onPress={() => this.props.navigation.navigate("CashBalance")}>
					<Text style={{color: gColor.whiteColor}}>现金余额 999</Text>
				</TouchableOpacity>
			</View>
		) 
	}
	componentDidMount() {
		storage.load({
			key: 'getToken',
		}).then((ret) => {
			console.log(ret)
			Users.getUsersInfo(ret.id);
			Users.getUserWeChatInfo(ret.id);
		}).catch(err => {
			console.log(err, -1);
		})
	}
	render(){
		console.log(Users.wechatAuth.headimgurl);
		return(
			<View style={{alignItems: "center",paddingVertical:20,backgroundColor:"#ad0e11",width:gScreen.width}}>
				<View >
					<Image 
						source={ !Users.wechatAuth.headimgurl ? require('../../assets/images/userImage.png') : {uri: Users.wechatAuth.headimgurl} }
						style={{width:65,height:65,borderRadius:32.5,borderColor: gColor.borderColors}}
					/>
					<Text style={{marginVertical:10,textAlign: "center",color: gColor.whiteColor}}> { Users.auth && Users.auth.name } </Text>
				</View>
				{ this.props.Per ? this.renderItem() : null }
			</View>
		)
	}
}