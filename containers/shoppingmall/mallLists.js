import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";
import ImageButton from "../public/ImageButton";


export default class MallList extends Component {

	mallLists = [
		{name:'龙脑喷雾',source:require("../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'龙脑喷雾',source:require("../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'龙脑喷雾',source:require("../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
		{name:'龙脑喷雾',source:require("../../assets/images/L-alabo.png"),price:'￥100元', nav: "CategoryDetails"},
	]

	_renderMallList = (mallLists,key) => {
		const { name,source,price, nav } = mallLists;

		return (
			<ImageButton
				key = {`${name}-${key}`}
				touchableStyle={{width: gScreen.width/2, alignItems: "center"}}
				source={source}
				imageStyle={{width: 90, height: 90}} 
				text={name}
				description={price}
				textStyle={{fontSize:gFontSize.centerText}}
				descriptionStyle={{fontSize:gFontSize.smallText}}
				
			/>			
		)
	}

	render(){
		return (
				<View style={{flexDirection:'row',flexWrap:'wrap'}}>
					{this.mallLists.map(this._renderMallList)}
				</View>			
		)
	}

}