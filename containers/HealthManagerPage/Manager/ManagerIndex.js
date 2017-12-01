import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
} from "react-native";
import CustomCarousel from "../../../components/public/CustomCarousel"; //轮播图
import ServerIcon from "../../showIndex/IconBtn";//图标


const cusIcon = [
	{url:require('../../../assets/images/Customer.png'), text:'客户列表',nav:'CustomerList'},
	{url:require('../../../assets/images/file.png'), text:'档案',nav:''},
	{url:require('../../../assets/images/scheme.png'), text:'方案',nav:''},
	{url:require('../../../assets/images/abnormal.png'), text:'异常',nav:''},
];


export default class ManagerIndex extends Component {
	static navigationOptions = {
		title: "管理师版",
	}
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
				<ServerIcon dataIcon={cusIcon} navigation={this.props.navigation} />
			</ScrollView>
		);
	}
}