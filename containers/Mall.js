import React, {Component} from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
} from "react-native";
import CustomCarousel from "../components/public/CustomCarousel"; //轮播图
import ShoppingIcon from './shoppingmall/shoppingIcons';
import CustomTitle from '../components/public/CustomTitle';
import MallList from './shoppingmall/mallLists';
import Activity from './shoppingmall/activity';


export default class ShowIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
		}		
	}
	render() {
		return (
			<ScrollView>
				<CustomCarousel data={this.state.data} />
				<ShoppingIcon />
				<CustomTitle 
					title="热门推荐"
					rightText="更多 》"
					style={styles.titleStyle}
					textStyle={styles.leftStyle}
				/>
				<MallList />
				<CustomTitle 
					title="活动专区"
					rightText="更多 》"
					style={styles.titleStyle}
					textStyle={styles.leftStyle}
				/>
				<Activity />				
			</ScrollView>
		);
	}
}


const styles = StyleSheet.create({
	titleStyle:{
		borderBottomWidth: 1,
		borderColor:gColor.borderColors,
		marginTop:15,
	},
	leftStyle:{
		backgroundColor:gColor.importColor,
		color:gColor.whiteColor,
		paddingHorizontal:12,
		paddingVertical:5,
	},
})