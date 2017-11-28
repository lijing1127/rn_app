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

export default class Login extends React.Component{
	static navigationOptions = {
		title:'登录'
	}
	constructor(props){
		super(props);
		this.state = {text:''}
	}
	render(){
		return(
			<ScrollView style={styles.contain}>
				<View style={styles.imageCon}>
					<Image source={require('../assets/images/u266.png')} 
						style={styles.img}/>
				</View>
				<View style={styles.listSty}>
					<Text style={styles.txtSty}>账号：</Text>
					<View style={styles.width}>
						<TextInput
							underlineColorAndroid="transparent"
					        style={styles.textInp}     
					      />
					</View>
				</View>
				<View style={styles.listSty}>
					<Text style={styles.txtSty}>密码：</Text>
					<View style={styles.width}>
						 <TextInput
							underlineColorAndroid="transparent"
					        style={styles.textInp}        
					      />
					</View>
				</View>
				<View style={{alignItems:'center',marginTop:20}}>

					<TouchableOpacity style={styles.touch}>
						<Text style={styles.text}>登录</Text>
					</TouchableOpacity>
				</View>
				<View style={{alignItems:'flex-end',paddingVertical:10,paddingRight:'10%'}}>

					<TouchableOpacity onPress={()=>this.props.navigation.navigate('')}>
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
				


				<Test />
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
		width:65,
		height:65,
		borderRadius:32.5,
		borderColor: gColor.borderColors,		
	},
	textInp: {
		height: 40, 
		borderColor: gColor.borderColors,
		borderBottomWidth: 1,
		padding: 0,
		// paddingLeft:5,
	},
	listSty: {
		flexDirection:'row',
		marginTop:10,
		justifyContent:'space-between',
		paddingHorizontal:"10%",
	},
	txtSty: {
		marginLeft:10,
		paddingVertical:20,
		fontSize:gFontSize.bigText,
		color:gColor.borderColors
	},
	width: {
		width:gScreen.width/1.5,
		marginLeft:10
	},
	touch: {
		width:'80%',
		justifyContent:'center',
		backgroundColor:gColor.whiteColor,
		borderRadius:5,
	},
	text: {
		textAlign:'center',
		paddingVertical:10,
		fontSize:gFontSize.bigText,
		color:gColor.importColor,
		
	}
})