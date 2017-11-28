import React, {Component} from "react";
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
	FlatList,
	ActivityIndicator,
} from "react-native";
import SmallTitle from '../../../components/public/smallTitle';
import ImageButton from "../../../components/public/ImageButton";

export default class AllCategory extends Component {

	static navigationOptions = {
		title: "全部商品"
	}

	constructor(props) {
		super(props);
		this.state = {
			lisRefresh: false,
			refresh: false,
			allProduct: [
				{id: 'a_01',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_02',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_03',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_04',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_05',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_06',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_07',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_08',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},		
				{id: 'a_09',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_10',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_11',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
				{id: 'a_12',name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},		
			],
		}
	}


	_keyExtractor = (item) => item.id;
	
	_renderAllProduct = ({item}) => (
		<ImageButton
			touchableStyle={styles.touchableStyle}
			source={item.source}
			imageStyle={{width: 90, height: 90}} 
			text={item.name}
			description={item.price}
			textStyle={{fontSize:gFontSize.centerText}}
			descriptionStyle={{fontSize:gFontSize.smallText}}
			onPress={() => this.props.navigation.navigate(item.nav)}
		/>			
	)	

	render() {
		return (
			<View>
				<SmallTitle text={'全部商品'} style={{backgroundColor:gColor.whiteColor,}}/>
				<FlatList 
					data={this.state.allProduct}
					style={{backgroundColor:gColor.whiteColor}}
					renderItem={this._renderAllProduct}
					keyExtractor={this._keyExtractor}
					horizontal={false}
					numColumns={2}
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
	viewStyle: {
		backgroundColor:gColor.whiteColor,
	},

	productStyle: {
		flexDirection:'row',
		flexWrap:'wrap',
		borderTopWidth:1,
		borderTopColor:gColor.borderColors,		
	},

	touchableStyle: {
		width: gScreen.width/2, 
		alignItems: "center",
		paddingVertical:10,
		borderRightWidth:1,
		borderRightColor:gColor.borderColors,
		borderBottomWidth:1,
		borderBottomColor:gColor.borderColors,		
	}
})