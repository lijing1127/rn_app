import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
	FlatList,
	DeviceEventEmitter,
} from "react-native";
import { List, Stepper, Checkbox, Button, } from "antd-mobile";
import {observer} from "mobx-react/native";

import CartModels from "../../../models/CartModels";
import CartItems from "./CartItems";

const CheckboxItem = Checkbox.CheckboxItem;
const Item = List.Item;


@observer
export default class Demo extends React.Component {
	static navigationOptions = {
		title: "购物车",
	}
	constructor(props) {
		super(props);
		this.dataModels = new CartModels();
	}
	componentDidMount() {
		this.dataModels.replace();
	}
	allSelect = () => {
		DeviceEventEmitter.emit("allSelect", !this.dataModels.itemData.isAllSelect);
		this.dataModels.selectAll();
	}
	_keyExtractor = (item) => item._id
	_renderItems = ({item}) => (
		<CartItems item={item} dataModels={this.dataModels} />
	)
	separatorView = () => {
        return (
            <View style={{ height : 10, backgroundColor : '#e9e9e9' }}/>
        )
    };
	render() {
		return (
		  <View style={styles.container}>
		      
		      <FlatList 
		      	data={this.dataModels.itemData.datas}
		      	keyExtractor={this._keyExtractor}
		      	renderItem={this._renderItems}
		      	ItemSeparatorComponent={ this.separatorView }
		      />
		      <View style={{height: 47}}></View>
		      <View style={styles.footerBlock}>
		      	<View style={styles.checkBlock}>
			      	<Checkbox checked={this.dataModels.itemData.isAllSelect ? true : false } onChange={this.allSelect}>
			      		<Text> 全选 </Text>
			      	</Checkbox>
		      	</View>
		      	<Text style={styles.priceBlock}>
		      		合计：￥
		      		<Text>{this.dataModels.itemData.totalMoney}</Text>
		      	</Text>
		      	<Button style={styles.btnblock}>
		      		<Text style={{color: "#fff"}}>立即购买</Text>
		      	</Button>
		      </View>
		  </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	footerBlock: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: gColor.whiteColor,
		position: "absolute",
		bottom: 0,

	},
	checkBlock: {
		marginLeft: 5,
		marginRight: 40,
		paddingLeft: 5,
	},
	priceBlock: {
		flex: 3,
	},
	btnblock: {
		flex: 2,
		backgroundColor: gColor.importColor,
	},

})