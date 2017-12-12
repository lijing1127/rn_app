import React, {Component} from "react";
import {
	ScrollView,
	Text,
	Image,
	View,
	AsyncStorage,
} from "react-native";
import {observer} from "mobx-react/native";
import Login from "./personalCenter/setting/Login";
import HeadLayOut from "./personalCenter/HeadLayOut";
import MyOrder from "./personalCenter/myOrder/MyOrder";
import TitleArray from "./personalCenter/TitleArray";
import Users from '../models/Users';

@observer
export default class ShowIndex extends Component {
	static navigationOptions = {
		tabBarLabel: "我的",
		tabBarIcon: ({tintColor}) => (
			<Image source={require("../assets/images/mine.png")} style={{tintColor: tintColor}}  />
		),
		header: () => (
			<View style={{height: 22, backgroundColor: gColor.importColor}}></View>
		),
	}
	constructor(props) {
		super(props);

	}
	componentDidMount() {
		// Users.getToken();
		// if ( !Users.auth.token ) {
		// 	this.props.navigation.navigate('Login');
		// 	return false;
		// }
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView>
					<HeadLayOut Per={true} navigation={this.props.navigation}/>
					<MyOrder nav={this.props.navigation}/>
					<TitleArray navigation={this.props.navigation} />
				</ScrollView>
			</View>
		);
	}
}