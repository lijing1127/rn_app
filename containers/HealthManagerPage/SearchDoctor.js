import React, {Component} from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import ImageButton from "../../components/public/ImageButton";

const categoryItem = [
	{id: 1, title: "全部", data: [
		{id: 1, title: "某某某", source: require("../../assets/images/doctor.png")},
		{id: 2, title: "某某某", source: require("../../assets/images/doctor.png"),},
		{id: 3, title: "某某某", source: require("../../assets/images/doctor.png"),},
		]
	},
	{id: 2, title: "健康管理师", data: [
		{id: 1, title: "某某某", source: require("../../assets/images/doctor.png"),},
		{id: 2, title: "某某某", source: require("../../assets/images/doctor.png"),},
		{id: 3, title: "某某某", source: require("../../assets/images/doctor.png"),},
		{id: 4, title: "某某某", source: require("../../assets/images/doctor.png"),},
		]
	},
	{id: 3, title: "家庭健康管理师", data: [
		{id: 1, title: "某某某", source: require("../../assets/images/doctor.png"),},
		{id: 2, title: "某某某", source: require("../../assets/images/doctor.png"),},
		{id: 3, title: "某某某", source: require("../../assets/images/doctor.png"),},
		]
	},
	{id: 4, title: "家庭医生", data: [
		{id: 1, title: "某某某", source: require("../../assets/images/doctor.png"),},
		{id: 2, title: "某某某", source: require("../../assets/images/doctor.png"),},
		{id: 3, title: "某某某", source: require("../../assets/images/doctor.png"),},
		{id: 4, title: "某某某", source: require("../../assets/images/doctor.png"),},
		]
	},
]

export default class SearchDoctors extends Component {
	static navigationOptions = {
		title: "健康管理师",
	}
	constructor(props) {
		super(props);
		this.state = {
			lisRefresh: false,
			refresh: false,
			data:[
				{id: 1, title: "某某某", source: require("../../assets/images/doctor.png"),},
				{id: 2, title: "某某某", source: require("../../assets/images/doctor.png"),},
				{id: 3, title: "某某某", source: require("../../assets/images/doctor.png"),},
				{id: 4, title: "某某某", source: require("../../assets/images/doctor.png"),},
			],
		}
	}

	_keyExtractor = (item) => item.id;

	_renderItem = ({item}) => (
		<ImageButton 
			text={item.title}
			source={item.source}
			description={item.price}
			imageStyle={{width: gScreen.width/8, height: gScreen.width/8,}}
			touchableStyle={{ flexDirection: "row", borderRightWidth: 0.8, borderBottomWidth: 0.8, borderColor: gColor.borderColors, marginVertical: 5, paddingVertical: 3,}}
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
					style={styles.rightCon}
					refreshing={this.state.refresh}
					onRefresh={() => {
						this.setState({refresh: true})
						setTimeout(() => this.setState({refresh: false}), 1000 )
					}}
					ListFooterComponent={ this.state.lisRefresh && <ActivityIndicator /> }
					onEndReachedThreshold={0.1}
					onEndReached={() => {
						this.setState({lisRefresh: true})
						setTimeout(() => this.setState({lisRefresh: false}), 3000 )
					}}
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
		paddingLeft: 5,
	},
})