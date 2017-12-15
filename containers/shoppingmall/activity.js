import React, {Component} from "react";
import {
	View,
	Text,
	Image,
	StyleSheet,
} from "react-native";
import {observer} from "mobx-react/native";
import MallActivity from "./mallActivity";

import Category from "../../models/Category";

@observer
export default class Activity extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		//获取活动
		storage.load({
			key: 'getActivety',
			autoSync: true,
			syncInBackground: false,
		}).then((ret) => {
			// console.log(ret);
			ret.map( active => Category.getActivityProduct(active[0]) );
			// this.setState({
			// 	data: ret.slice(0,4),
			// })
		}).catch(err => {
			console.warn(err.message);
		});
	}

	render(){
		const { activety_image, product } = Category.activityProduct;
		return(
			<View>
				<View style={styles.viewStyle}>
					<Image source={{uri: `http://ybhm.ybyt.cc/${activety_image.image.url}`}} style={{width:gScreen.width-20,height:gScreen.width/3}}/>
					<MallActivity navigation={this.props.navigation} product={product} />
				</View>
			</View>			
		)
	}

}


const styles = StyleSheet.create({
	viewStyle:{
		marginVertical :10,
		alignItems:'center',
	}
})