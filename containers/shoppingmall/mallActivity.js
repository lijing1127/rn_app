import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";
import MallActivityList from "../../components/public/mallActivityList";


export default class MallActivity extends Component {

	mallActivityLists = [
		{name:'龙脑喷雾',source:require("../../assets/images/L-alabo.png"),price:'￥100元'},
		{name:'龙脑喷雾',source:require("../../assets/images/L-alabo.png"),price:'￥100元'},
		{name:'龙脑喷雾',source:require("../../assets/images/L-alabo.png"),price:'￥100元'},
		{name:'龙脑喷雾',source:require("../../assets/images/L-alabo.png"),price:'￥100元'},		
	]

	_renderMallActivityList = (mallActivityLists,key) => {
		const { name,source,price } = mallActivityLists;

		return (
			<MallActivityList
				key = {`${name}-${key}`}
				touchableStyle={{width: gScreen.width/2, alignItems: "center",flexDirection:'row',justifyContent:'center',marginTop:5}}
				source={source}
				imageStyle={{width: 50, height: 50}}
				name={name}
				price={price}
				nameStyle={{fontSize:gFontSize.centerText}}
				priceStyle={{fontSize:gFontSize.smallText}}
			/>			
		)
	}

	render(){
		return (
				<View style={{flexDirection:'row',flexWrap:'wrap'}}>
					{this.mallActivityLists.map(this._renderMallActivityList)}
				</View>	
		)
	}

}