import React, {Component} from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";
import {observer} from 'mobx-react/native';
import { FontAwesome } from '@expo/vector-icons';

import Users from "../../../models/Users";

@observer
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
	_onSubmit = () => {
    Users.login({account: this.state.account, password: this.state.password}).then(() => {
      // console.log(1);
      console.log(Users.auth.isFetching);
      // Users.auth.isFetching ? this.props.navigation.navigate("PersonalCenter") : null;
      if (Users.auth.isFetching) {
        this.props.navigation.navigate("PersonalCenter");
      }
    });
	}
	render(){
		return(
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={styles.imageCon}>
          <Image 
            source={require('../../../assets/images/u266.png')} 
            style={styles.img}
          />
        </View>
        <View style={styles.inputOut}>
          <Text style={styles.textStyle}> 账　号:　</Text>      
            <TextInput underlineColorAndroid="transparent"
              style={{height: 50,flex:1, color: gColor.whiteColor}}
              value={this.state.account}
              onChangeText={(account)=> this.setState({account})}
            />
        </View>
        <View style={styles.inputOut}>
          <Text style={styles.textStyle}> 密　码:　</Text>      
          <TextInput underlineColorAndroid="transparent"
            secureTextEntry={true}
            style={{height: 50,flex:1, color: gColor.whiteColor}}
            value={this.state.password}
            onChangeText={(password)=> this.setState({password})}
          />
        </View>
        <View style={{alignItems:'center',marginTop:'10%', width: "100%"}}>
            <TouchableOpacity style={styles.touch} onPress={this._onSubmit}>
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
        <View style={{ height: 60 }} />
      </KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
    backgroundColor:gColor.importColor,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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