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
import BasicRecord from "../personalCenter/myHealthRecord/BasicRecord";
import DynamicData from "../personalCenter/myHealthRecord/DynamicData";
import ModalDropdown from 'react-native-modal-dropdown';


class ProList extends Component{
	constructor(props){
		super(props);	
		this.state = {
			index:'',
			proListes:['1','2'],
		}	
	}
	handleDel(index){
		// alert('删除');
		// const proListes = [...this.state.proListes];
		// proListes.splice(index,1);
		// this.setState({proListes});
	}
	_renderItem(){
		const proLists = this.props.proListes.map((item,index) => {
			return(
				<View style={[styles.row,{marginBottom:10}]} key={index}>
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
		})
		return proLists;
	}
	render(){
		return(
			<View>
				{this._renderItem()}
			</View>
		)
	}
}
export default class GoPrescribe extends Component{
	static navigationOptions = {
		title:'开方'
	}
	constructor(props){
		super(props);
		this.state = {
			num:'',
			prolistes: ['1'],
		}
	}
	handleAdd = () => {
		this.setState({
			prolistes: ['23','23'],
		})
	}

	render(){
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
					
					<ProList proListes={this.state.prolistes}/>

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