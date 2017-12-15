import React, {Component} from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import {observer} from 'mobx-react/native';
// import { Stepper } from 'antd-mobile';

import ProductCarousel from '../../../components/public/ProductSwipe';
import SmallTitle from '../../../components/public/smallTitle';
import Specifications from '../../../components/public/Specifications';
import ImageButton from '../../../components/public/ImageButton';

import Category from "../../../models/Category";

@observer
export default class CategoryDetails extends Component {


	static navigationOptions = {
		title: "商品详情"
	}

	constructor(props) {
		super(props);
		this.state = {
			data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
			 val: 1,
		}
	}

	componentDidMount() {
		// alert(this.props.navigation.state.params.uid);
		Category.getProductionDetail(this.props.navigation.state.params.uid);
	}

	render() {
		let productionDetail = Category.productionDetail.slice()[0];
		return (
			<View style={{position:'relative',height:'100%'}}>
				<ScrollView style={styles.outView}>

					<ProductCarousel data={this.state.data}/>

					<View style = {styles.propName}>
						<Text style={styles.nameStyle}>{productionDetail && productionDetail[2]}</Text>
						<Text style={styles.priceStyle}>{productionDetail && productionDetail[3]}</Text>
					</View>

					<SmallTitle text={'基本信息'} style={{backgroundColor:gColor.borderColors,}}/>
					
					<View>
						<View style={styles.infoStyle}>
							<Text>规格：</Text>
							<Text style={styles.priceStyle}>{productionDetail && productionDetail[4]}</Text>
							<Text style={styles.priceStyle}>{productionDetail && productionDetail[5]}</Text>
						</View>
						<View style={styles.infoStyle}>
							<Text>数量：</Text>
							
						</View>
						{/*<View style={styles.infoStyle}>
							<Text>包装：</Text>
							<Text style={styles.infoDataStyle}>20ml*20支/盒</Text>
						</View>	*/}				
						<View style={styles.infoStyle}>
							<Text>生产厂家：</Text>
							<Text style={styles.infoDataStyle}>{productionDetail && productionDetail[6]}</Text>
						</View>													
					</View>

					<SmallTitle text={'详细信息'} style={{backgroundColor:gColor.borderColors,}}/>

					<View style={styles.produceStyle}>
						<Text>{productionDetail && productionDetail[7]}</Text>
					</View>

				</ScrollView>

				<View style={styles.bottomCart}>
					<View style={{flexDirection : 'row',justifyContent: 'space-between',marginLeft:'4%'}}>
						<ImageButton
							text={'商城'}
							source={require('../../../assets/images/mall.png')}
							imageStyle={styles.imageStyle}
							touchableStyle={styles.touchableStyle}
						/>
						<ImageButton
							text={'购物车'}
							source={require('../../../assets/images/ShoppingCart.png')}
							imageStyle={styles.imageStyle}
							touchableStyle={styles.touchableStyle}
						/>
					</View>
					<View style={{flexDirection : 'row',width:'66%'}}>
						<TouchableOpacity style={[styles.btnStyle,styles.btnBac1]}>
							<Text style={styles.fontStyle}>加入购物车</Text>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.btnStyle,styles.btnBac2]} onPress={() => this.props.navigation.navigate("ConfirmOrder") }>
							<Text style={styles.fontStyle}>立即购买</Text>
						</TouchableOpacity>
					</View>					
				</View>

			</View>
		);
	}
}


const styles = StyleSheet.create({
	outView: {
		backgroundColor:gColor.whiteColor,
	},

	propName: {
		paddingLeft:15,
		borderTopWidth:1,
		borderTopColor:gColor.borderColors,
		borderBottomWidth:1,
		borderBottomColor:gColor.borderColors,
		paddingVertical:5,
		flexDirection : 'row',
		justifyContent: 'space-between',
	},

	nameStyle: {
		fontSize: gFontSize.centerText,
		color: gColor.textColor,
	},

	priceStyle: {
		fontSize: gFontSize.smallText,
		color: gColor.importColor,
		marginRight: '10%',
	},

	infoStyle: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: gColor.borderColors,
		paddingLeft: 15,
		paddingVertical: 5,
		alignItems: 'center',
	},

	infoDataStyle: {
		fontSize: gFontSize.smallText,
		color: gColor.textColor,
	},

	produceStyle: {
		paddingTop:15,
		paddingBottom:70,
		paddingHorizontal:10,
	},

	bottomCart: {
		backgroundColor:gColor.whiteColor,
		height:60,
		borderTopWidth:1,
		borderTopColor:gColor.borderColors,
		width:'100%',
		position:'absolute',
		bottom:0,
		left:0,
		flexDirection:'row',
		justifyContent:'space-between'
	},

	touchableStyle: {
		justifyContent:'center',
		alignItems:'center',
		paddingHorizontal:'3%',
		marginTop:'2%',
	},

	imageStyle: {
		width:30,
		height:30,
	},

	btnStyle: {
		width:'50%',
		justifyContent:'center',
		alignItems:'center',		
	},

	btnBac1: {
		backgroundColor:gColor.textColor2,
	},

	btnBac2: {
		backgroundColor:gColor.importColor,
	},

	fontStyle: {
		fontSize:gFontSize.centerText,
		color:gColor.whiteColor,
	}	

})