import React, {Component} from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

export default class Login extends Component{
	static navigationOptions = {
		title:'登录'
	}
	constructor(props){
		super(props);
		this.state = {
			account:'',
			password:'',
		}
	}
	render(){
		return(
			<ScrollView style={styles.contain}>
				<View style={styles.imageCon}>
					<Image source={require('../../../assets/images/u266.png')} 
						style={styles.img}/>
				</View>
				<View style={styles.inputOut}>
					<Text style={styles.textStyle}> 账　号:　</Text>			
					<TextInput underlineColorAndroid="transparent"
						style={{height: 50,flex:1}}
						value={this.state.account}
					/>
				</View>
				<View style={styles.inputOut}>
					<Text style={styles.textStyle}> 密　码:　</Text>			
					<TextInput underlineColorAndroid="transparent"
						style={{height: 50,flex:1}}
						value={this.state.password}
					/>
				</View>



				<View style={{alignItems:'center',marginTop:'15%'}}>

					<TouchableOpacity style={styles.touch}>
						<Text style={styles.text}>登录</Text>
					</TouchableOpacity>
				</View>
				<View style={{alignItems:'flex-end',paddingVertical:10,paddingRight:'10%'}}>

					<TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>
						<Text style={{color:gColor.whiteColor}}>还没账号？去注册</Text>
					</TouchableOpacity>
				</View>

				<View  style={{alignItems:'center'}}>
					<View style={{marginTop:20,flexDirection:'row'}}>
						<Text style={{color:gColor.whiteColor}}>第三方登录：</Text>
						<TouchableOpacity>	
							<FontAwesome name='wechat' size={24} color="white" />
						</TouchableOpacity>
					</View>
				</View>
			
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	contain: {
		backgroundColor:gColor.importColor,

	},
	imageCon: {
		paddingTop:80,
		paddingBottom:30,
		alignItems:'center',
	},
	img: {
		width:100,
		height:100,
		borderRadius:50,
	},
	inputOut:{
		flexDirection:'row',
		borderBottomWidth:1,
		borderBottomColor:gColor.borderColors,
		height: 50,
		alignItems:'center',
		marginHorizontal:20,
	},
	textStyle: {
		fontSize:gFontSize.middleText,
		color:gColor.whiteColor,
	},
	touch: {
		width:'90%',
		justifyContent:'center',
		backgroundColor:gColor.whiteColor,
		borderRadius:5,
	},
	text: {
		textAlign:'center',
		paddingVertical:10,
		fontSize:gFontSize.middleText,
		color:gColor.importColor,	
	}
})