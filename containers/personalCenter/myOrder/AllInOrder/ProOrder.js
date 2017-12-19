import React, {Component} from "react";
import {
	View,
	StyleSheet,
} from "react-native";
import {observer} from "mobx-react/native";

import MallActivityList from '../../../../components/public/mallActivityList';
import Category from "../../../../models/Category";

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

@observer
export default class ProOrder extends React.Component{
	// ProList = [
	// 	{name:'龙脑喷雾',source:require("../../../../assets/images/L-alabo.png"),price:'20ml*20支/盒',specify:'￥960',num:'*1'},
	// 	{name:'龙脑喷雾',source:require("../../../../assets/images/L-alabo.png"),price:'20ml*20支/盒',specify:'￥960',num:'*1'},
	// ]

	_renderProList=(ProList) => { 
		return (
			<MallActivityList 
				key={ProList[0]}
				touchableStyle={styles.touchableStyle}
				imageStyle={styles.imageStyle}
				name={ProList[2]}
				price={this.props.spec}
				specify={ProList[3]}
				num={this.props.count}
				nameStyle={{fontSize:gFontSize.centerText}}
				priceStyle={{fontSize:gFontSize.smallText,paddingVertical:6}}
				actStyle={{paddingLeft:'5%'}}
				specifyStyle={{marginRight:'50%'}}
			/>
		)
	}
	componentDidMount() {
		// console.log(Category.productionDetail[0].slice());
	}
	render(){
		return(
			<View >
				{Category.productionDetail.map(this._renderProList)}
			</View>
		)
	}

}