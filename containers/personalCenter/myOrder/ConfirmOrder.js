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
import ReceiveRalate from './ReceiveRalate';
import ProOrder from './ProOrder';
import { List, InputItem } from 'antd-mobile';
import ModalDropdown from 'react-native-modal-dropdown';

//antd的List Item组件
const Item = List.Item;

class ListExample extends React.Component {
  state = {
    disabled: false,
  }

  render() {
    return (
      <List className="my-list">
        <Item extra="管理健康--YBJ会员(易积分)" arrow="horizontal" 
          onClick={() => {
          	return(
          		<Item>
  			         <ModalDropdown options={['option 1', 'option 2']}/>
  			      </Item>
          	)
        }}>参与活动</Item>   
        <Item extra="微信支付" arrow="horizontal" onClick={() => {}}>支付方式</Item>
        <Item extra="不使用优惠" arrow="horizontal" onClick={() => {}}>使用优惠</Item>      
      </List>    
    );
  }
}

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
				<ListExample />
				<BasicInput />
       

				<View style={{flexDirection:'row',justifyContent:'flex-end'}}>
					<Text style={{padding:15}}>共2件，合计￥9999</Text>
					<TouchableOpacity style={{backgroundColor:gColor.importColor}} 
            onPress={()=> this.props.navigation.navigate('GenerateOrder')}
            >
						<Text style={{color:gColor.whiteColor,paddingVertical:15,paddingHorizontal:30}}>提交订单</Text>
					</TouchableOpacity>
				</View>

			</ScrollView>
		)	
	}
}