import React, {Component} from "react";
import {
	View,
	StyleSheet,
	ScrollView,
} from "react-native";
import CustomTitle from "../../../components/public/CustomTitle";
import IntegralItem from "./IntegralItem";

export default class Usable extends Component {
	static navigationOptions = {
		tabBarLabel: "可使用",
	}
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{id: 1, integralCount: 655, integraltime: "2016-10-22", integralname: "张三", integraltype: "邀请好友注册"  },
				{id: 2, integralCount: 734, integraltime: "2016-05-12", integralname: "李四", integraltype: "邀请好友注册"  },
				{id: 3, integralCount: 81, integraltime: "2017-10-12", integralname: "王五", integraltype: "邀请好友注册"  },
				{id: 4, integralCount: 23, integraltime: "2016-05-12", integralname: "赵六", integraltype: "邀请好友注册"  },
				{id: 5, integralCount: 23, integraltime: "2016-05-12", integralname: "赵六", integraltype: "邀请好友注册"  },
				{id: 6, integralCount: 23, integraltime: "2016-05-12", integralname: "赵六", integraltype: "邀请好友注册"  },

			]
		}
	}
	renderIntegralItems = () => {
		const itemList = this.state.items.map((item) => (
			<IntegralItem 
				integralitems={item}
				key={item.id}
			/>
		))
		return itemList;
	}
	render() {
		return (
			<ScrollView>
				{ this.renderIntegralItems() }
			</ScrollView>
		)
	}
}