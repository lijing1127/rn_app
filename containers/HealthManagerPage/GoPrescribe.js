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
import {observer} from "mobx-react/native";
import { FontAwesome } from '@expo/vector-icons';
import BasicRecord from "../personalCenter/myHealthRecord/BasicRecord";
import DynamicData from "../personalCenter/myHealthRecord/DynamicData";
import ModalDropdown from 'react-native-modal-dropdown';
import GoPrescribeMode from "../../models/GoPrescribeMode";

let i = 0;

@observer
class ProList extends Component{
	constructor(props){
		super(props);	
	}
	handleDel =() => {
		// alert('删除');
		// const proListes = [...this.state.proListes];
		// proListes.splice(index,1);
		// this.setState({proListes});
		// GoPrescribeMode.list.splice(this.props.indexProps -1, 1);
		let a = GoPrescribeMode.list.findIndex((value) => {
			return value == this.props.indexProps;
		});
		GoPrescribeMode.list.splice(a, 1);
	}
	render(){
		return(
			<View style={[styles.row,{marginBottom:10}]}>
				<View style={{alignItems:'center',width:'55%',marginLeft:10}}>
					<ModalDropdown options={['御邦甘净','御邦C筑','阿拉伯糖','护航心灯','虚拟商品YBZ会员商品']} defaultValue="御邦甘净" 
		              style={styles.btnSty}
		              textStyle={styles.textStyle}
		              dropdownStyle={styles.dropdownStyle}
		              dropdownTextHighlightStyle={styles.dropdownTextHighlightStyl}/>
		        </View>

	            <View style={styles.inputOut}>
		            <TextInput underlineColorAndroid="transparent" 
		            	style={{width:'90%'}}
		            />
		        </View>
		        <View style={{alignItems:'center'}}>
					<TouchableOpacity style={{marginLeft:10}} onPress={this.handleDel}>
						<Text style={styles.delete}>删除</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

@observer
export default class GoPrescribe extends Component{
	static navigationOptions = {
		title:'开方'
	}
	constructor(props){
		super(props);
		this.state = {
			num:'',
		}
	}
	handleAdd = () => {
		// if (GoPrescribeMode.list.length == 0) {
		// 	i = 0;
		// 	i ++;
		// }else {
		// 	i ++;
		// }
		if (GoPrescribeMode.list.length == 0) {
			i = 0;
		}
		i ++;
		GoPrescribeMode.list.push(...[i]);
		console.log(GoPrescribeMode.list.slice());
	}

	render(){
		let listItem;
		if ( GoPrescribeMode.list ) {
			listItem = GoPrescribeMode.list.map((item) => (
				<ProList key={item} indexProps={item} />
			))
		}else {
			listItem = null;
		}
		return(
			<ScrollView>
				<View style={styles.contain}>
					<View style={styles.row}>
						<Text style={[styles.thead,{width:'55%'}]}>产品</Text>
						<Text style={[styles.thead,{width:'25%'}]}>数量</Text>
						<View  style={styles.touchFa}>
							<TouchableOpacity style={styles.touch} onPress={this.handleAdd}>
								<Text style={styles.txtBtn}>添加</Text>
							</TouchableOpacity>
						</View>
					</View>
					
					{listItem}

					<View style={styles.submit}>
						<TouchableOpacity style={styles.touch}>
							<Text style={styles.txt}>提交</Text>
						</TouchableOpacity>
					</View>
				</View>

			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	contain: {
		alignItems: "center",
		width:gScreen.width,
		backgroundColor:gColor.whiteColor
	},
	row:{
		flexDirection:'row',
		width:gScreen.width,
	},
	touchFa: {
		width:'20%',
		alignItems: "center",
		justifyContent:'center',
		paddingVertical:5,
	},
	touch: {
		borderWidth:1,
		borderColor:gColor.importColor,
		borderRadius:3,
		backgroundColor:gColor.importColor,
	},
	thead: {
		textAlign:"center",
		color:gColor.textColor,
		fontSize:gFontSize.middleText,
		paddingVertical:7,
	},
	txtBtn: {
		color:gColor.whiteColor,
		paddingVertical:5,
		paddingHorizontal:10,
		fontSize:gFontSize.bigText,
	},
	btnSty: {
		width:'95%',
	    paddingVertical:7,
	    paddingLeft:8,
	    borderWidth:1,
	    borderColor:gColor.color2,
	    borderRadius:5,
	    justifyContent:'center',
	},
	textStyle: {
	    // paddingVertical:5,
	    fontSize:gFontSize.bigText,     
	},
	dropdownStyle: {
	    width:'55%',
	    paddingVertical:7
	},
	dropdownTextHighlightStyle: {
	    fontSize:gFontSize.bigText,
	},
	inputOut:{
		marginHorizontal:5,
		alignItems: "center",
		justifyContent:'center',
		width:'20%',
		borderWidth:1,
		borderColor:gColor.color2,
		borderRadius:5,
	},
	submit: {
		width:'90%',
		backgroundColor:gColor.importColor,
		marginVertical:20,
		borderRadius:5,
	},
	txt: {
		color:gColor.whiteColor,
		textAlign:'center',
		fontSize:gFontSize.middleText,
		paddingVertical:10
	},
	delete: {
		paddingVertical:7,
		color:"blue",
		textAlign:"center",

	}
})