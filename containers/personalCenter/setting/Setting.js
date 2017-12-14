import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	AsyncStorage,
} from "react-native";
import { Toast } from "antd-mobile";
import { FontAwesome } from '@expo/vector-icons';
import {observer} from "mobx-react/native";
import CustomTitle from '../../../components/public/CustomTitle'; 
 
import Users from "../../../models/Users";

@observer
export default class HealthRecord extends Component {
	static navigationOptions = {
		title:'设置'
	}
	constructor(props) {
		super(props);
	}
	_removeToken = () => {
		if ( storage.load({key: 'getToken'}) ) {
			storage.load({
				key: 'getToken',
			}).then((ret) => {
				if (ret.access_token) {
					console.log(1);
					storage.remove({
						key: 'getToken',
					}).then(() => {
						Toast.success("成功退成账户", 3, () => this.props.navigation.navigate("Login"));
					})
				}
			}).catch((error) => console.log(error))
		}
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
					redirectPress={this._removeToken}
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