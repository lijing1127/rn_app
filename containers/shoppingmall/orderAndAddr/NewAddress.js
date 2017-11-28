import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Alert,
} from "react-native";
import { Picker, List, WhiteSpace } from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';
import arrayTreeFilter from 'array-tree-filter';

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
    this.state = {
      data: [],
      cols: 1,
      pickerValue: [],
      asyncValue: [],
      visible: false,
    }
	}
   getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
    return treeChildren.map(v => v.label).join(',');
  }
	render(){
		return(
			<View  style={{position:'relative',height:'100%',backgroundColor:gColor.whiteColor}}>
				<ScrollView>
					<View style={styles.listSty}>
						<Text style={styles.txtSty}>收货人姓名：</Text>
						<View style={{width:'75%',}}>
							<UselessTextInput/>
						</View>
					</View>
					<View style={styles.listSty}>
						<Text style={styles.txtSty}>手机号码：</Text>
						<View style={{width:'75%',}}>
							<UselessTextInput />
						</View>
					</View>
					 <List style={{marginTop: 15, borderWidth: 1, marginHorizontal: 15, borderColor: gColor.borderColors}}>
               <Picker
                visible={this.state.visible}
                data={district}
                value={this.state.pickerValue}
                onChange={v => this.setState({ pickerValue: v })}
                onOk={() => this.setState({ visible: false })}
                onDismiss={() => this.setState({ visible: false })}
              >
                <List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
                  <Text>省份/市/区：</Text>
                </List.Item>
              </Picker>  
           </List>
           <View style={{margin: 15, flexDirection: "row"}}>
             <Text>详细地址：</Text>
             <TextInput 
              placeholder="" 
              style={{borderWidth: 1, flex: 1, borderColor: gColor.borderColors,}} 
              underlineColorAndroid="transparent"
              multiline={true}
              numberOfLines={5}
              maxLength={120}
              />
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