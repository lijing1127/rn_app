import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	FlatList,
	ActivityIndicator,
} from "react-native";

import CustomCarousel from "../components/public/CustomCarousel"; //轮播图
import IconBtn from "./showIndex/IconBtn"; //八个图标
import ScrollList from './showIndex/ScrollList';//可以滑动的医生列表
import WorkStaBtn from './showIndex/WorkStaBtn';//服务中心
import Graphic from './showIndex/Graphic';//热卖产品
import ProList from './showIndex/ProList';//产品列表
import CustomTitle from '../components/public/CustomTitle'; 

const dataIcon = [
	{url:require('../assets/images/u276.png'), text:'健康教育',nav:'CustomerService'},
	{url:require('../assets/images/u276.png'), text:'服务中心',nav:'CustomerService'},
	{url:require('../assets/images/u276.png'), text:'健康管理师',nav:'CustomerService'},
	{url:require('../assets/images/u276.png'), text:'活动',nav:'CustomerService'},
	{url:require('../assets/images/u276.png'), text:'一盏明灯',nav:'CustomerService'},
	{url:require('../assets/images/u276.png'), text:'商盟',nav:'CustomerService'},
	{url:require('../assets/images/u276.png'), text:'健康档案',nav:'CustomerService'},
	{url:require('../assets/images/u276.png'), text:'客户服务',nav:'CustomerService'},
];


export default class ShowIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lisRefresh: false,
			refresh: false,
			pageName: ['首页'],
			data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
		}
	}
	_keyExtractor = (item) => item
	_renderItem = ({item}) => (
		<View>
			<CustomCarousel data={this.state.data} />
				<IconBtn dataIcon={dataIcon} navigation={this.props.navigation} />
				<CustomTitle 
					title="健康管理师"
					rightText="更多"
					style={{borderBottomWidth: 1,paddingVertical:10}}
				/>
				<ScrollList />
				<CustomTitle 
					title="服务中心"
					rightText="更多"
					style={{borderBottomWidth: 1,paddingVertical:10}}
				/>
				<WorkStaBtn />
				<CustomTitle 
					title="热卖产品"
					rightText="更多"
					style={{borderBottomWidth: 1,paddingVertical:10}}
				/>
				<Graphic />
				<ProList />
		</View>
	)
	render() {
		return (
			<FlatList 
				data={this.state.pageName}
				keyExtractor={this._keyExtractor}
				renderItem={this._renderItem}
				refreshing={this.state.refresh}
				onRefresh={() => {
					this.setState({refresh: true})
					setTimeout(() => this.setState({refresh: false}), 1000 )
				}
				}
				ListFooterComponent={ this.state.lisRefresh && <ActivityIndicator /> }
				onEndReachedThreshold={0.1}
				onEndReached={() => this.setState({lisRefresh: true})}

			/>
		);
	}
}