import React, {Component} from "react";
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
} from "react-native";
import SmallTitle from '../../../components/public/smallTitle';
import ImageButton from "../../../components/public/ImageButton";



export default class AllGoods extends Component {

	static navigationOptions = {
		title: "全部商品"
	}

	constructor(props) {
		super(props);
	}

	allProduct = [
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'阿拉伯糖',source:require("../../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},	
	]

	_renderAllProduct = (allProduct,key) => {
		const { name,source,price, nav } = allProduct;

		return (
			<ImageButton
				key = {`${name}-${key}`}
				touchableStyle={styles.touchableStyle}
				source={source}
				imageStyle={{width: 90, height: 90}} 
				text={name}
				description={price}
				textStyle={{fontSize:gFontSize.centerText}}
				descriptionStyle={{fontSize:gFontSize.smallText}}
				
			/>			
		)
	}

	render() {
		return (
			<ScrollView style={styles.viewStyle}>
				<SmallTitle text={'全部商品'} />
				<View style={styles.productStyle}>
					{this.allProduct.map(this._renderAllProduct)}
				</View>					
			</ScrollView>
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