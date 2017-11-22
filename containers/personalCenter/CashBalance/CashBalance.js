import React, {Component} from "react";
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
} from "react-native";
import CashArray from './cashArray';


export default class CashBalance extends React.Component{
	static navigationOptions = {
		title: "现金余额",
	}
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<ScrollView>
				<View style={styles.dataDisplay}>
					<View style={styles.dataView}>
						<Text style={styles.textStyle}>可提现（元）</Text>
						<Text style={styles.numberStyle}>150023.00元</Text>
					</View>
					<View style={styles.dataView}>
						<Text style={styles.textStyle}>可使用（元）</Text>
						<Text style={styles.numberStyle}>0.00元</Text>
					</View>					
				</View>
				<CashArray navigation={this.props.navigation} />
			</ScrollView>
		)
	
	}
}

const styles = StyleSheet.create({

	dataDisplay: {
		flexDirection:'row',
		backgroundColor:gColor.importColor,
		paddingVertical:25,
	},

	dataView: {
		width:'50%',
		alignItems:'center',
		justifyContent:'center',
	},

	textStyle: {
		fontSize:gFontSize.centerText,
		color:gColor.whiteColor,
	},

	numberStyle: {
		fontSize:24,
		color:gColor.whiteColor,
		marginTop:5,
	}

})