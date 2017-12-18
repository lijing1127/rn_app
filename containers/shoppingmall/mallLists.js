import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";
import ImageButton from "../../components/public/ImageButton";


export default class MallList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hotProduction: [],
		};
	}

	_renderMallList = (mallLists) => {
		return (
			<ImageButton
				key = {mallLists[0]}
				touchableStyle={{width: gScreen.width/2, alignItems: "center"}}
				imageStyle={{width: 90, height: 90}} 
				text={mallLists[1]}
				description={mallLists[3]}
				textStyle={{fontSize:gFontSize.centerText}}
				descriptionStyle={{fontSize:gFontSize.smallText}}
				onPress={() => this.props.navigation.navigate("CategoryDetails", {uid: mallLists[0]})}
			/>			
		)
	}
	componentDidMount() {
			//热卖产品
			storage.load({
				key: 'getHotProduction',
				autoSync: true,
				syncInBackground: false,
			}).then((ret) => {
				this.setState({
					hotProduction: ret,
				})
			}).catch(err => {
				console.warn(err.message);
			})
	}
	render(){
		return (
				<View style={{flexDirection:'row',flexWrap:'wrap'}}>
					{ this.state.hotProduction && this.state.hotProduction.map(this._renderMallList) }
				</View>			
		)
	}

}