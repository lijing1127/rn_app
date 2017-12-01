import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import CustomerState from '../../../components/public/customerState'; //客户状态组件




export default class allList extends Component {

	static navigationOptions = {
		tabBarLabel: "全部客户",
	}	

	constructor(props) {
		super(props);
	}

	customerLists = [
		{ name:'李婧',states:'待审核',phone:'18064079991' },
		{ name:'李婧',states:'待审核',phone:'18064079992' },
		{ name:'李婧',states:'待审核',phone:'18064079993' },
		{ name:'李婧',states:'待审核',phone:'18064079994' },
		{ name:'李婧',states:'待审核',phone:'18064079995' },
		{ name:'李婧',states:'待审核',phone:'18064079996' },
		{ name:'李婧',states:'待审核',phone:'18064079997' },
		{ name:'李婧',states:'待审核',phone:'18064079998' },
	]

	_renderCustomerLists = (customerLists,key) => {
		const { name,states,phone } = customerLists;
		return (
				<TouchableOpacity key={phone} onPress={() => this.props.navigation.navigate("CustomInfo")} style={{width: gScreen.width}}>
					<CustomerState
						outViewStyle={styles.outViewStyle}
						name={name}
						userState={states}
						rightStyle={styles.rightStyle}
						nameStyle={styles.leftText}
						stateStyle={[styles.leftText,styles.stateStyle]}
						otherStyle={styles.btnStyle}
						passStyle={styles.btnStyle}
						textStyle={styles.textStyle}
					/>			
				</TouchableOpacity>
		)
	}

	render() {
		return (
			<ScrollView style={{backgroundColor:gColor.whiteColor,}}>
				{this.customerLists.map(this._renderCustomerLists)}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	outViewStyle: {
		borderBottomWidth:1,
		borderBottomColor:gColor.borderColors,
		paddingVertical: 20,
		paddingHorizontal:10,
		flexDirection:'row',
	},

	rightStyle: {
		width:'50%',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		marginLeft:20,
	},

	leftText: {
		fontSize:gFontSize.bigText,
	},

	stateStyle: {
		marginTop:10,
	},

	btnStyle: {
		paddingVertical:5,
		paddingHorizontal:10,
		borderWidth:1,
		borderColor:gColor.importColor,
		borderRadius:3,
		marginLeft:10,
	},

	textStyle: {
		fontSize:gFontSize.bigText,
		color:gColor.importColor,
	}
})