import React, {Component} from "react";
import {
	ScrollView,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Alert,
	CheckBox,
} from "react-native";
import ReceiveRalate from '../../../shoppingmall/orderAndAddr/ReceiveRalate';
import ProOrder from './ProOrder';
import { List, InputItem } from 'antd-mobile';
import ModalDropdown from 'react-native-modal-dropdown';

//antd的List Item组件
const Item = List.Item;

class BasicInput extends React.Component {

  render() {
    return ( 
        <List>
          <InputItem
            clear labelNumber={5}
            placeholder="备注"
          >用户备注</InputItem>
          <InputItem
            clear labelNumber={5}
            placeholder="可用99易积分"
          >易积分数量</InputItem>
          <InputItem type="money"
            clear labelNumber={5}
            placeholder="可用0.00现金"
          >现金余额</InputItem>
        
        </List>
    );
  }
}

export default class ConfirmOrder extends React.Component{

  static navigationOptions = {
    title: "确认订单",
  }

	constructor(props) {
		super(props);		
	}

	render(){
		return(
			<ScrollView style={{backgroundColor:gColor.whiteColor,paddingTop:10}}>
				<ReceiveRalate />
				<ProOrder />
				<Text style={{color:gColor.importColor,paddingLeft:10,paddingVertical:10,
					borderBottomWidth: 1,borderBottomColor:gColor.borderColors,}}>
					请详细了解该活动的活动规则，选定活动，订单提交后不可更改
				</Text>
				<View style={styles.rowSty}>
          <Text style={styles.useSty}>参与活动</Text>
          <ModalDropdown options={['不参与活动','管理健康--YBJ会员', '管理健康--YBZ会员','合伙人计划','护航心灯']} defaultValue="管理健康--YBJ会员" 
              style={styles.btnSty}
              textStyle={styles.textStyle}
              dropdownStyle={[styles.dropdownStyle,styles.height1]}
              dropdownTextHighlightStyle={styles.dropdownTextHighlightStyl}/>
        </View>
        <View style={styles.rowSty}>
          <Text style={styles.useSty}>支付方式</Text>
          <ModalDropdown options={['微信支付','银行卡支付', '线下支付']} defaultValue="微信支付" 
              style={styles.btnSty}
              textStyle={styles.textStyle}
              dropdownStyle={[styles.dropdownStyle,styles.height2]}
              dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}/>
        </View>
        <View style={[styles.rowSty,styles.borderBot]}>
          <Text style={styles.useSty}>使用优惠</Text>
          <ModalDropdown options={['不使用优惠']} defaultValue="不使用优惠" 
              style={styles.btnSty}
              textStyle={styles.textStyle}
              dropdownStyle={[styles.dropdownStyle,styles.height3]}
              dropdownTextHighlightStyle={styles.dropdownTextHighlightStyle}/>
        </View>
				<BasicInput />
       

				<View style={{flexDirection:'row',justifyContent:'flex-end',paddingVertical:8}}>
					<Text style={{padding:15}}>共2件，合计￥9999</Text>
					<TouchableOpacity style={{backgroundColor:gColor.importColor}} 
            onPress={()=> this.props.navigation.navigate('GenerateOrder')}
            >
						<Text style={{color:gColor.whiteColor,paddingVertical:15,
              paddingHorizontal:30}}>提交订单</Text>
					</TouchableOpacity>
				</View>

			</ScrollView>
		)	
	}
}


const styles = StyleSheet.create({
  rowSty: {
    flexDirection:'row',
    padding:15,
    borderBottomWidth:1,
    borderColor:gColor.borderColors,
  },
  borderBot: {
    borderBottomWidth:0,
  },
  useSty: {
    // paddingVertical:5,
    fontSize:gFontSize.bigText,
  },
  btnSty: {
    width:gScreen.width/1.2,
  },
  textStyle: {
    // paddingVertical:5,
    fontSize:gFontSize.bigText,
    marginLeft:25,
  },
  dropdownStyle: {
    marginTop:-10,
    marginLeft:20,
    width:gScreen.width/1.2, 
  },
  dropdownTextHighlightStyle: {
    fontSize:gFontSize.bigText,
  },
  height1: {
    height: 175,
  },
  height2: {
    height: 105,
  },
  height3: {
    height: 35,
  }
})