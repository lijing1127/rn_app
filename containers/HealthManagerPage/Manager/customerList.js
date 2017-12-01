import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
} from "react-native";
import { Tabs,  } from 'antd-mobile';
import ManagerDoctorHead from '../../../components/public/managerDoctorHead';//管理师版头部组件
import AllList from "./allList";

const tabs = [
  { title: '全部' },
  { title: '已审核' },
  { title: '未审核' },
];

export default class CustomerList extends Component {
	static navigationOptions = {
		title: "客户列表",
	}

	constructor(props) {
		super(props);
		this.state = {
	      selectedTab: 'blueTab',
	    };
	}

	render() {
		managerDoctorInfo = {
			source:require('../../../assets/images/doc.jpg'),
			name:'周发斌',
			role:'家庭健康管理师',
			work:'湖北省武汉市洪山区',
			life:'湖北省武汉市洪山区',
		}
		const { source,name,role,work,life,outViewStyle } = managerDoctorInfo;
		return (
			<View style={{flex: 1,}}>
				<ManagerDoctorHead
					source={source}
					name={name}
					role={role}
					work={work}
					life={life}
					outViewStyle={styles.outViewStyle}
					headPicStyle={styles.headPicStyle}
					imageStyle={styles.imageStyle}
					nameStyle={styles.nameStyle}
					roleStyle={styles.textStyle}
					workStyle={styles.textStyle}
					lifeStyle={styles.textStyle}
				/>
				<Tabs tabs={tabs}
			      tabBarPosition="top"
			      swipeable={false}
			    >
			      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			       	<AllList navigation={this.props.navigation} />
			      </View>
			      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			       	<AllList navigation={this.props.navigation} />
			      </View>
			      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			       	<AllList navigation={this.props.navigation} />
			      </View>
			    </Tabs>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	outViewStyle: {
		backgroundColor:gColor.importColor,
		paddingVertical: 25,
		paddingHorizontal:15,
	},
	headPicStyle: {
		flexDirection:'row',
		alignItems:'center',
	},
	imageStyle: {
		width:80,
		height:80,
		borderWidth:1,
		borderRadius:40,
	},
	nameStyle: {
		color:gColor.whiteColor,
		fontSize:gFontSize.titleText,
		marginLeft: 15,
	},
	textStyle: {
		color:gColor.whiteColor,
		fontSize:gFontSize.bigText,
		marginTop:8,
	}
})