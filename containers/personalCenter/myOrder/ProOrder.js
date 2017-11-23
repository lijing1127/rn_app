import React, {Component} from "react";
import {
	View,
	StyleSheet,
} from "react-native";

import MallActivityList from '../../../components/public/mallActivityList';
const styles = StyleSheet.create({
	touchableStyle: {
		width: gScreen.width,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: gColor.borderColors,
		paddingVertical: 10,
		paddingLeft: '12%',
	},
	imageStyle: {
		width: 70, 
		height: 60,
		borderWidth: 1,
		borderColor: gColor.color1,
	},
})

export default class ProOrder extends React.Component{
	ProList = [
		{name:'龙脑喷雾',source:require("../../../assets/images/L-alabo.png"),price:'20ml*20支/盒',specify:'￥960',num:'*1'},
		{name:'龙脑喷雾',source:require("../../../assets/images/L-alabo.png"),price:'20ml*20支/盒',specify:'￥960',num:'*1'},
	]

	_renderProList=(ProList,key) => {
		const {name,source,price,specify,num} = ProList;
 
		return (
			<MallActivityList 
				key = {`${name}-${key}`}
				touchableStyle={styles.touchableStyle}
				source={source}
				imageStyle={styles.imageStyle}
				name={name}
				price={price}
				specify={specify}
				num={num}
				nameStyle={{fontSize:gFontSize.centerText}}
				priceStyle={{fontSize:gFontSize.smallText,paddingVertical:6}}
				actStyle={{paddingLeft:'5%'}}
				specifyStyle={{marginRight:'50%'}}
			/>
		)
	}

	render(){
		return(
			<View >
				{this.ProList.map(this._renderProList)}
			</View>
		)
	}

}