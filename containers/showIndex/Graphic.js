import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListView,
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	img: {
		height: 152,
		width: 225,	
	},
	font: {
		marginHorizontal: 10,
		marginVertical: 3,
	}
});

export default class Graphic extends React.Component{
	render(){
		return(
			<View>
				<View style={styles.container}>
					<Image style={styles.img} source={require('../../assets/images/L-alabo.png')}/>
				</View>
				<Text style={styles.font}>基因修复剂</Text>
				<Text style={styles.font}>基因修复剂是一个从大豆、大麦、小麦、苋菜、中草药种子和其它植物种子分离纯化得到的抗肿瘤多肽。能够进入肿瘤细胞的内部...</Text>
				<Text style={styles.font}>¥2980.0</Text>
			</View>
		)
	}
}