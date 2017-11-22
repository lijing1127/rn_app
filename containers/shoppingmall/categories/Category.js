import React, {Component} from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import ImageButton from "../../../components/public/ImageButton";

const categoryItem = [
	{id: 1, title: "点亮心灯", data: [
		{id: 1, title: "点亮心灯", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		{id: 2, title: "点亮心灯", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		{id: 3, title: "点亮心灯", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		{id: 4, title: "点亮心灯", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		]
	},
	{id: 2, title: "销售商品", data: [
		{id: 1, title: "销售商品", source: require("../../../assets/images/u266.png"), price: "￥100元"},
		{id: 2, title: "销售商品", source: require("../../../assets/images/u266.png"), price: "￥100元"},
		{id: 3, title: "销售商品", source: require("../../../assets/images/u266.png"), price: "￥100元"},
		{id: 4, title: "销售商品", source: require("../../../assets/images/u266.png"), price: "￥100元"},
		]
	},
	{id: 3, title: "活动商品", data: [
		{id: 1, title: "活动商品", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		{id: 2, title: "活动商品", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		{id: 3, title: "活动商品", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		{id: 4, title: "活动商品", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		]
	},
	{id: 4, title: "虚拟商品", data: [
		{id: 1, title: "虚拟商品", source: require("../../../assets/images/u266.png"), price: "￥100元"},
		{id: 2, title: "虚拟商品", source: require("../../../assets/images/u266.png"), price: "￥100元"},
		{id: 3, title: "虚拟商品", source: require("../../../assets/images/u266.png"), price: "￥100元"},
		{id: 4, title: "虚拟商品", source: require("../../../assets/images/u266.png"), price: "￥100元"},
		]
	},
	{id: 5, title: "组合商品", data: [
		{id: 1, title: "组合商品", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		{id: 2, title: "组合商品", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		{id: 3, title: "组合商品", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		{id: 4, title: "组合商品", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
		]
	},
]

export default class ShoppingCategory extends Component {
	static navigationOptions = {
		title: "分类",
	}
	constructor(props) {
		super(props);
		this.state = {
			data:[
				{id: 1, title: "基因修复1", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
				{id: 2, title: "基因修复1", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
				{id: 3, title: "基因修复1", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
				{id: 4, title: "基因修复1", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
				{id: 5, title: "基因修复1", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
				{id: 6, title: "基因修复1", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
				{id: 7, title: "基因修复1", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
				{id: 8, title: "基因修复1", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
				{id: 9, title: "基因修复1", source: require("../../../assets/images/L-alabo.png"), price: "￥100元"},
			],
		}
	}

	_keyExtractor = (item) => item.id;

	_renderItem = ({item}) => (
		<ImageButton 
			text={item.title}
			source={item.source}
			description={item.price}
			imageStyle={{width: gScreen.width*0.73/2, height: gScreen.width*0.73/2,}}
			touchableStyle={{alignItems: "center", borderRightWidth: 0.8, borderBottomWidth: 0.8, borderColor: gColor.borderColors}}
		/>
	);

	getCategory = (item) => {
		alert(item.id);
	};

	_renderNewCategory = (item) => {
		this.setState({
			data: item.data,
		})
	}

	render() {
		const getTextList = categoryItem.map((item) => 
			<TouchableOpacity style={styles.leftBlock} key={item.id}  onPress={() => this._renderNewCategory(item)}><Text style={styles.leftText}>{item.title}</Text></TouchableOpacity>
		)
		return (
			<View style={styles.container}>
				<View style={styles.leftCon}>
					{getTextList}
				</View>
				<FlatList 
					data={this.state.data}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					horizontal={false}
					numColumns={2}
					style={styles.rightCon}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		flex: 1,
	},
	leftCon: {
		borderRightWidth: 1,
		backgroundColor: gColor.whiteColor,
		borderRightColor: "#e1e1e1",
		width: gScreen.width*0.27,
	},
	leftBlock: {
		borderBottomColor: "#6b8fd4",
		borderBottomWidth: 1,
		paddingVertical: 20, 
		alignItems: "center",
	},
	leftText: {
		color: "#6b8fd4",
		fontSize: gFontSize.igText,
	},
	rightCon: {
		width: gScreen.width*0.73,
		backgroundColor: gColor.whiteColor,
	},
})