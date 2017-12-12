import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";

import ImageButton from "../../components/public/ImageButton";

let allWorkArray = [];

export default class WorkStaBtn extends React.Component{
	constructor(props) {
		super(props);
	}

	render(){
		console.log(this.props.allWork);
		const workItem = this.props.allWork.map((item) => {
			return (
				<ImageButton
					key={item.id}
					touchableStyle={{width: gScreen.width/2, alignItems: "center", paddingVertical: 10}}
					source={{uri: `http://ybhm.ybyt.cc/${item.user_image.url}`}}
					textStyle={this.props.textStyle}
					imageStyle={{width: 140, height: 100,marginBottom: 10}} 
					text={item.name}
					onPress={() => this.props.navigation && this.props.navigation.navigate(item.nav)}
				/>
			)
		})
		return(
			<View style={{flexDirection: "row"}}>
				{ workItem }
			</View>
		)
	}
}
