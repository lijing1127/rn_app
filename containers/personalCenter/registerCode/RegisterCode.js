import React, {Component} from "react";
import {
	View,
	Text,
	ScrollView,
	Image,
} from "react-native";

class RegisterCode extends Component {
	static navigationOptions = {
		title: "我的邀请二维码",
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Image 
					source={require("../../../assets/images/health.jpg")}
					style={{width: gScreen.width, height: gScreen.height}}
				>
					<Text style={{margin: 8}}>
						<Text style={{color: "red"}}>提示：</Text>
						此二维码用于邀请用户注册御易健平台
					</Text>
					<Image 
							source={require('../../../assets/images/erweima.png')}
							style={{width: 160, height: 160, position: "absolute", bottom: gScreen.height/4, right: 20}}
						/>
				</Image>		
			</View>
		);
	}
}

export default RegisterCode;