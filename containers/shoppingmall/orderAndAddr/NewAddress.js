import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from "react-native";

import ModalDropdown from 'react-native-modal-dropdown';

class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <TextInput
		underlineColorAndroid="transparent"
        style={styles.textInp}     
        value={this.state.text}
      />
    );
  }
}
export default class OrderAndAddr extends React.Component{
	static navigationOptions = {
		title: "新增收货地址",
	}
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<View  style={{position:'relative',height:'100%',backgroundColor:gColor.whiteColor}}>
				<ScrollView>
					<View style={styles.listSty}>
						<Text style={styles.txtSty}>收货人姓名：</Text>
						<View style={{width:'75%',marginLeft:10}}>
							<UselessTextInput/>
						</View>
					</View>
					<View style={styles.listSty}>
						<Text style={styles.txtSty}>手机号码：</Text>
						<View style={styles.width}>
							<UselessTextInput />
						</View>
					</View>
					<View style={styles.listSty}>
						<Text style={styles.txtSty}>省份：</Text>
						<View style={styles.width}>
							<ModalDropdown options={['北京', '上海','广东','河南','山东']} defaultValue="北京" 
								style={styles.btnSty}
								textStyle={styles.textStyle}
								dropdownStyle={styles.dropdownStyle}
								dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}/>
						</View>
					</View>

					<View style={styles.listSty}>
						<Text style={styles.txtSty}>城市：</Text>
						<View style={styles.width}>
							<ModalDropdown options={['北京', '上海','深圳','广州','济南']} defaultValue="北京" 
								style={{borderWidth:1,borderColor:gColor.borderColors,height:40}}
								textStyle={styles.textStyle}
								dropdownStyle={styles.dropdownStyle}
								dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}/>
						</View>
					</View>

					<View style={styles.listSty}>
						<Text style={styles.txtSty}>地区或街道：</Text>
						<View style={styles.width}>
							<UselessTextInput />
						</View>
					</View>
			
				</ScrollView>

				<TouchableOpacity style={styles.add}>
					<Text style={styles.addr}>保存</Text>
				</TouchableOpacity>
			</View>
		)
	
	}
}

const styles = StyleSheet.create({
	textInp: {
		height: 40, 
		borderColor: gColor.borderColors,
		borderWidth: 1,
		padding: 0,
		paddingLeft:5,
	},
	listSty: {
		flexDirection:'row',
		marginTop:10,
		justifyContent:'space-between',
		marginRight:15
	},
	txtSty: {
		marginLeft:10,
		lineHeight:30
	},
	add: {
		width:gScreen.width,
		backgroundColor:gColor.importColor,
		height:45,
		position: "absolute",
		bottom:0,
	},
	addr: {
		textAlign:'center',
		paddingVertical:13,
		color: gColor.whiteColor,
	},
	width: {
		width:gScreen.width/1.5,
		marginLeft:10
	},
	textStyle: {
	    fontSize:gFontSize.centerText,
	    paddingVertical:8,
	    marginLeft:5
	},
	dropdownStyle: {
	    width:gScreen.width/1.2, 
	    borderWidth:1,
		borderColor:gColor.borderColors,
	},
	dropdownTextHighlightStyle: {
	    fontSize:gFontSize.centerText,
	},
	btnSty: {
		borderWidth:1,
		borderColor:gColor.borderColors,
		height:40
	}
})