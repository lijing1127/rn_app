import React, {Component} from "react";
import {
	View,
	StyleSheet,
} from "react-native";

import MallActivityList from '../../../../components/public/mallActivityList';


export default class ProOrder extends React.Component{

	constructor(props){
		super(props);
	}

	OneList = [
		{name:'龙脑喷雾',source:require("../../../../assets/images/L-alabo.png"),price:'20ml*20支/盒',apply:'申请',specify:'￥960',num:'*1'},
	]


	_renderOneList=(OneList,key) => {
		const {name,source,price,specify,num,apply} = OneList;
 
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
				apply={apply}
				touchStyle={{borderWidth:1,borderColor:gColor.importColor,borderRadius:5,width:60,
					backgroundColor:gColor.importColor,marginLeft:'30%'}}
				applyStyle={{color:gColor.whiteColor,textAlign:'center',paddingVertical:6}}
				onApplyPress={ () => this.props.navi.navigate('ApplyForReturn')}	
			/>
		)
	}


	render(){
		return(
			<View >
				{this.OneList.map(this._renderOneList)}
			</View>
		)
	}

}



const styles = StyleSheet.create({
	touchableStyle: {
		width: gScreen.width,
		flexDirection:'row',
		borderBottomWidth:1,
		borderBottomColor:gColor.borderColors,
		paddingVertical:10,
		paddingLeft:'12%',
	},
	imageStyle: {
		width: 70, 
		height: 60,
		borderWidth:1,
		borderColor:gColor.color1,
	},
})