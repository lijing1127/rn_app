import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";
import {observer} from "mobx-react/native";
import MallActivityList from "../../components/public/mallActivityList";

@observer
export default class MallActivity extends Component {

	_renderMallActivityList = (item) => {

		return (
			<MallActivityList
				key = {item[0]}
				touchableStyle={{width: gScreen.width/2, alignItems: "center",flexDirection:'row',justifyContent:'center',marginTop:5}}
				imageStyle={{width: 50, height: 50}}
				name={item[1]}
				price={item[3]}
				nameStyle={{fontSize:gFontSize.centerText}}
				priceStyle={{fontSize:gFontSize.smallText}}
				onPress={() => this.props.navigation.navigate("CategoryDetails", {uid: item[0]})}
			/>			
		)
	}

	render(){
		return (
				<View style={{flexDirection:'row',flexWrap:'wrap'}}>
					{this.props.product && this.props.product.map(this._renderMallActivityList)}
				</View>	
		)
	}

}