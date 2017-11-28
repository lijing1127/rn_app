import React, {Component} from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import ProductCarousel from '../../../components/public/ProductSwipe';
import SmallTitle from '../../../components/public/smallTitle';
import Specifications from '../../../components/public/Specifications';
import ImageButton from '../../../components/public/ImageButton';


export default class CategoryDetails extends Component {


	static navigationOptions = {
		title: "商品详情"
	}

	constructor(props) {
		super(props);
		this.state = {
			data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
		}
	}
	render() {
		return (
			<View style={{position:'relative',height:'100%'}}>
				<ScrollView style={styles.outView}>

					<ProductCarousel data={this.state.data}/>

					<View style = {styles.propName}>
						<Text style={styles.nameStyle}>阿拉伯糖</Text>
						<Text style={styles.priceStyle}>￥100元</Text>
					</View>

					<SmallTitle text={'基本信息'} style={{backgroundColor:gColor.borderColors,}}/>
					
					<View>
						<View style={styles.infoStyle}>
							<Text>规格：</Text>
							<Specifications text={'20ml*20支/盒'} />
							<Specifications text={'20ml*20支/盒'} />
						</View>
						<View style={styles.infoStyle}>
							<Text>数量：</Text>
							
						</View>
						<View style={styles.infoStyle}>
							<Text>包装：</Text>
							<Text style={styles.infoDataStyle}>20ml*20支/盒</Text>
						</View>					
						<View style={styles.infoStyle}>
							<Text>生产厂家：</Text>
							<Text style={styles.infoDataStyle}>泰安市泰来生物科技有限公司</Text>
						</View>													
					</View>

					<SmallTitle text={'详细信息'} style={{backgroundColor:gColor.borderColors,}}/>

					<View style={styles.produceStyle}>
						<Text>调血糖 优化肠道菌群 活力肠道 排毒养颜 降血压L-阿拉伯糖的功效►调节血糖L-阿拉伯糖对
						蔗糖的代谢转化具有阻断作用，使蔗糖大量通过小肠进入大肠产生大量短链脂肪酸，调节肠道酸性环
						境，进而起到抑制有害菌增殖，同时达到减肥、控制糖尿病等作用。►调节肠道菌群 活力肠道小肠癌、
						结肠癌，直肠癌等与体内毒垢（宿便）菌群失衡有一定关系，阿拉伯糖可以快速增值体内益生菌，改
						善肠道健康。将添加了3％L-阿拉伯糖的蔗糖加入红茶等饮品中连续服用，可明显增加每周排便次数，
						润肠通便。►减肥 排毒养颜大量的糖类会导致肥胖。L-阿拉伯糖不但可以阻断人体内蔗糖的代谢转化，
						抑制蔗糖的吸收，还可以在大肠内大量增殖双歧杆菌和嗜酸乳杆菌等厌氧菌，快速清理体内垃圾、毒素，
						并最终以液体或气体形式排出体外，达到清理肠道、预防肠道疾病的目的，进而起到减肥、美容、排毒
						养颜的作用►防治龋齿L-阿拉伯糖不但可以避免普通糖类在口腔内会被蛀牙细菌转变为酸性物质而腐蚀牙
						齿的情况发生，还可以使口腔环境由酸性变为中性，避免牙齿受到腐蚀。同时还能促进唾液的分泌，补充
						唾液中的磷和钙，促进牙齿的自然修复。►保护肝脏L-阿拉伯糖可以降低小肠中蔗糖酶的活性，抑制蔗糖的
						分解吸收，使未被吸收的蔗糖到达大肠后生成大量有机酸，有机酸与酒精反应生成有机酸酯，阻止了乙醇进
						入肝脏，起到保护肝脏的作用。►降血压研究证实，木糖与L-阿拉伯糖在一定比例下具有降血压、抑制血压升
						高的作用。主要成分L-阿拉伯糖，D-木糖，低聚木糖服用方法每日二到三次，餐前饮用，每次将10-20毫升
						L-阿拉伯糖浆加入200毫升的水中摇匀，于餐前饮用（注：清肠、排宿便、排肠毒，便秘者可适当加量）。本
						品为食品，饮用量和饮用次数可根据自身情况适当增减，自己掌握饮用量，适当调整饮用量通便润肠。适用
						人群1、“三高”人群（高血压、高血脂、高血糖）2、肥胖超重人群3、便秘人群温馨提示部分
						饮用本品者可能会出现大便次数增加和水样大便，属正常润肠通便现象，根据自身情况饮用量可适量增减。
						因本品是食品，无毒副作用。如出现其他不适，请及时咨询健康管理师。</Text>
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
						<TouchableOpacity style={[styles.btnStyle,styles.btnBac2]}>
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