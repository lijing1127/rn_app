import React, {Component} from "react";
import {
	View,
} from "react-native";
import {
	TabNavigator,
} from "react-navigation";
import {Button} from "antd-mobile";

import HeadLayOut from "../HeadLayOut";//用户名和积分的头部
import Usable from "./Usable";
import Convertible from "./Convertible";
import ValueAdded from "./ValueAdded";
import ImageArray from "../../../components/public/ImageArray";

const YiinteralNav = TabNavigator({
	Usable: {
		screen: Usable,
	},
	Convertible: {
		screen: Convertible,
	},
	ValueAdded: {
		screen: ValueAdded,
	},
}, {
	tabBarPosition: "top",
	tabBarOptions: {
		showIcon: false,
		inactiveTintColor: "#9e9898",
		activeTintColor: gColor.importColor,
		labelStyle: {
			fontSize: gFontSize.bigText,
		},
		style: {
			backgroundColor: gColor.color1,
		},
		indicatorStyle: {
			height: 0,
		}
	},
})


class Yiinteral extends Component {
	static navigationOptions = {
		title: "易积分",
	}
	constructor(props) {
		super(props);
		this.state = {
			imageBtnArray: [
				{url: require("../../../assets/images/btnimagey.png"), text: "兑换积分"},
				{url: require("../../../assets/images/btnimagez.png"), text: "赠送好友"},
			]
		}
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<HeadLayOut />
				<YiinteralNav />
				<View>
					<ImageArray 
						arrItems={this.state.imageBtnArray}
						imageStyle={{width: 33, height: 33, marginRight: 5,}}
						style={{flexDirection: "row", paddingVertical: 5}}
						touchableStyle={{flexDirection: "row", alignItems: "center", flex: 1, justifyContent: "center", borderRightWidth: 1, borderLeftWidth: 1, borderColor: gColor.borderColors,}}
						navigation={this.props.navigation}
					/>
				</View>
			</View>
		);
	}
}


export default Yiinteral;