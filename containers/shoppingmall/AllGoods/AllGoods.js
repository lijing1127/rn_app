import React, {Component} from "react";
import {
	ScrollView,
	Text,
	View,
	StyleSheet,
	FlatList,
	ActivityIndicator,
} from "react-native";
import {observer} from "mobx-react/native";
import SmallTitle from '../../../components/public/smallTitle';
import ImageButton from "../../../components/public/ImageButton";

import Category from "../../../models/Category";

@observer
export default class AllCategory extends Component {

	static navigationOptions = {
		title: "全部商品"
	}

	constructor(props) {
		super(props);
		this.state = {
			lisRefresh: true,
			refresh: false,
		}
	}

	componentDidMount() {
		Category.getAllProduction();
	}
	_keyExtractor = (item) => item[0];
	
	_renderAllProduct = ({item}) => (
		<ImageButton
			touchableStyle={styles.touchableStyle}
			imageStyle={{width: 90, height: 90}} 
			text={item[2]}
			description={item[3]}
			textStyle={{fontSize:gFontSize.centerText}}
			descriptionStyle={{fontSize:gFontSize.smallText}}
			onPress={() => this.props.navigation.navigate("CategoryDetails", {uid: item[0]})}
		/>			
	)	

	render() {
		let allProduction = Category.allProduction.slice();
		return (
			<View>
				<SmallTitle text={'全部商品'} style={{backgroundColor:gColor.whiteColor,}}/>
				<FlatList 
					data={allProduction}
					style={{backgroundColor:gColor.whiteColor}}
					keyExtractor={this._keyExtractor}
					renderItem={this._renderAllProduct}
					horizontal={false}
					numColumns={2}
					refreshing={this.state.refresh}
					onRefresh={() => {
						this.setState({refresh: true})
						setTimeout(() => this.setState({refresh: false}), 1000 )
					}}
					ListEmptyComponent={<Text style={{alignSelf: 'center'}}>正在加载中...</Text>}
					ListFooterComponent={ this.state.lisRefresh && <ActivityIndicator /> }
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewStyle: {
		backgroundColor:gColor.whiteColor,
	},

	productStyle: {
		flexDirection:'row',
		flexWrap:'wrap',
		borderTopWidth:1,
		borderTopColor:gColor.borderColors,		
	},

	touchableStyle: {
		width: gScreen.width/2, 
		alignItems: "center",
		paddingVertical:10,
		borderRightWidth:1,
		borderRightColor:gColor.borderColors,
		borderBottomWidth:1,
		borderBottomColor:gColor.borderColors,		
	}
})