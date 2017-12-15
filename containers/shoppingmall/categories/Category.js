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
import { observer } from "mobx-react/native";
import ImageButton from "../../../components/public/ImageButton";

import Categoty from "../../../models/Category";


@observer
export default class ShoppingCategory extends Component {
	static navigationOptions = {
		title: "分类",
	}
	constructor(props) {
		super(props);
		this.state = {
			lisRefresh: false,
			refresh: false,
			sortId: 1,
			categoryData: [{sort_id: 1, sort: "点亮心灯"},],
		};
	}

	_keyExtractor = (item) => item[0];

	_renderItem = ({item}) => (
		<ImageButton 
			text={item[1]}
			description={item[2]}
			imageStyle={{width: gScreen.width*0.73/2, height: gScreen.width*0.73/2,}}
			touchableStyle={{alignItems: "center", borderRightWidth: 0.8, borderBottomWidth: 0.8, borderColor: gColor.borderColors}}
			onPress={() => this.props.navigation.navigate("CategoryDetails", {uid: item[0]})}
		/>
	);

	_getSort = (sortId) => {
		Categoty.getCategoryProduct(sortId);
	};

	componentDidMount() {
		//分类
		storage.load({
			key: 'getCategory',
		}).then((ret) => {
			// console.log(ret);
			this.setState({
				categoryData: ret,
			})
		}).then(() => {
			Categoty.getCategoryProduct(1);
		}).catch(err => {
			console.warn(err.message);
		});
	}
	render() {
		const getTextList = this.state.categoryData.map((item) => 
			<TouchableOpacity style={styles.leftBlock} key={item.sort_id} onPress={ () => this._getSort(item.sort_id) }><Text style={styles.leftText}>{item.sort}</Text></TouchableOpacity>
		)
		return (
			<View style={styles.container}>
				<View style={styles.leftCon}>
					{getTextList}
				</View>
				<FlatList 
					data={Categoty.sortProduct}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
					horizontal={false}
					numColumns={2}
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
	},
})