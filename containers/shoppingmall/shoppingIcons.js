import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
} from "react-native";
import ImageButton from "../../components/public/ImageButton";

export default class ShoppingIcon extends Component {

	shoppingIcons = [
		{text:'分类商品',source:require('../../assets/images/u276.png'), nav: "Category"},
		{text:'全部商品',source:require('../../assets/images/u276.png'), nav: "AllCategory"},
		{text:'购物车',source:require('../../assets/images/u276.png'), nav: "Cart"},
		{text:'我的订单',source:require('../../assets/images/u276.png'), nav: "OrderAndAddr"},
	]


	_renderShoppingIcon = (shoppingIcons,key) => {
		const { text,source, nav } = shoppingIcons;

		return (
			<ImageButton
				key = {`${text}-${key}`}
				touchableStyle={{width: gScreen.width/4, alignItems: "center"}}
				source={source}
				imageStyle={{width: 32, height: 32}} 
				text={text}
				textStyle={styles.textStyle}
			/>
		)
	}

	render(){
		return(
				<View style={styles.viewStyle}>
					{this.shoppingIcons.map(this._renderShoppingIcon)}
				</View>
		)
	}


}

const styles = StyleSheet.create({
	viewStyle: {
		flexDirection:'row',
		marginTop :15,
	},

	textStyle: {
		marginTop:8,
	}
})
