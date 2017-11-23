import React, {Component} from "react";
import PropTypes from "prop-types";
import {
	View,
	Text,
	Image,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	DeviceEventEmitter,
	Alert,
} from "react-native";
import { List, Stepper, Checkbox, Button, } from "antd-mobile";
import { FontAwesome } from '@expo/vector-icons';
import {observer} from "mobx-react/native";

import CartModels from "../../../models/CartModels";

const CheckboxItem = Checkbox.CheckboxItem;
const Item = List.Item;

@observer
export default class CartItems extends Component {
	static propTypes = {
		itemData: PropTypes.object,
		dataModels: PropTypes.object,
	}

	constructor(props) {
		super(props);
		this.itemData = this.props.item;
		this.dataModels = this.props.dataModels;

	}

	componentDidMount() {
		this.subscription = DeviceEventEmitter.addListener('allSelect', (isSelAll) => {
			this.itemData.isSelect = isSelAll;
		})
	}

	componentWillUnmount() {
		this.subscription && this.subscription.remove();
	}

	selectPress = () => {
		this.itemData.isSelect = !this.itemData.isSelect;
		let money = this.itemData.money * this.itemData.count;
		if(this.itemData.isSelect) {
			this.dataModels.increase(money);
		}else {
			this.dataModels.reduce(money);
		}
		this.dataModels.itemPress();
	}

	increase = () => {
		this.itemData.count += 1;
		if(this.itemData.isSelect) {
			this.dataModels.increase(this.itemData.money);
		}else {
			this.itemData.isSelect = !this.itemData.isSelect;
			this.dataModels.increase(this.itemData.money * this.itemData.count);
		}
		this.dataModels.itemPress();
	}

	reduce = () => {
		if(this.itemData.count <= 1) {
			// if(this.itemData.isSelect) {
			// 	this.itemData.isSelect = !this.itemData.isSelect;
			//  this.dataModels.reduce(this.itemData.money);
			// }
			return false;
		}
		this.itemData.count -= 1;
		if(this.itemData.isSelect) {
			this.dataModels.reduce(this.itemData.money);
		}
	}
	deleteOrder = () => {
		Alert.alert(
			"删除商品",
			"您确定要删除该商品吗？",
			[
				{text: "取消", onPress: () => console.log("取消删除")},
				{text: "确定", onPress: () => console.log("删除成功")}
			]
		)
	}
	render() {
		return (
			<List>
		        <Item extra={
		        	<TouchableOpacity onPress={this.deleteOrder}>
		        		<FontAwesome name="trash-o" size={22} style={{color: gColor.importColor}}  />
		        	</TouchableOpacity>}
		        >
					<View style={styles.cardContainer}>
						<Checkbox checked={this.itemData.isSelect ? true: false} onChange={this.selectPress}>
						</Checkbox>
						<View style={{flex: 1}}>
							<Image  source={{uri: this.itemData.img}} style={{width: gScreen.width/5, height: gScreen.width/5, }} />
						</View>
						<View style={{flex: 1}}>
							<Text numberOfLines={1} >{this.itemData.name}</Text>
							<Text style={{color: gColor.importColor}}>￥<Text>{this.itemData.money}</Text></Text>
						</View>
						<View style={{flex: 1}}>
							<View style={ styles.numControllStyle }>
	                            <TouchableOpacity style={  styles.reduceStyle } onPress={ this.reduce }>
	                                <Text style={{ color : this.itemData.count <= 1 ? 'red' : 'black' } }>-</Text>
	                            </TouchableOpacity>
	                            <View style={ styles.numberViewStyle }>
	                                <Text style={ styles.numberStyle }>{ this.itemData.count }</Text>
	                            </View>
	                            <TouchableOpacity style={  styles.increaseStyle } onPress={ this.increase }>
	                                <Text>+</Text>
	                            </TouchableOpacity>
	                        </View>
						</View>
					</View>
		        </Item>
			</List>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	cardContainer: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
		paddingRight: 15,
	},
	numControllStyle : {
        flexDirection : 'row',
        borderWidth : 1,
        borderColor : '#e9e9e9',
        justifyContent : 'center',
        alignItems : 'center',
        marginLeft: 5,
    },
    reduceStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        borderRightWidth : 1,
        borderColor : '#e9e9e9',
        flex: 1,
    },
    numberViewStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        flex: 1,
    },
    numberStyle : {
        fontSize : 16,
    },
    increaseStyle : {
        alignItems : 'center',
        justifyContent : 'center',
        borderLeftWidth : 1,
        borderColor : '#e9e9e9',
        flex: 1,
    }
})