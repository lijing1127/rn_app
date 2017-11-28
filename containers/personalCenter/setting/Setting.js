import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import CustomTitle from '../../../components/public/CustomTitle'; 


export default class HealthRecord extends Component {
	static navigationOptions = {
		title:'设置'
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<CustomTitle 
					title="登录"
					rightIcon={<FontAwesome name="angle-right" size={18}/>}
					style={styles.listItem}
					redirectPress={()=> this.props.navigation.navigate('Login')}
					textStyle={{fontSize: gFontSize.bigText}}
				/>
				<CustomTitle 
					title="注册"
					rightIcon={<FontAwesome name="angle-right" size={18}/>}
					style={styles.listItem}
					redirectPress={()=> this.props.navigation.navigate('Register')}
					textStyle={{fontSize: gFontSize.bigText}}
					
				/>
				<CustomTitle 
					title="退出登录"
					rightIcon={<FontAwesome name="angle-right" size={18}/>}
					style={styles.listItem}
					redirectPress={()=> this.props.navigation.navigate('')}
					textStyle={{fontSize: gFontSize.bigText}}
					
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		borderBottomWidth: 1, 
		borderBottomColor: gColor.borderColors,
		paddingVertical:15,
		backgroundColor: gColor.whiteColor,
	} 
})