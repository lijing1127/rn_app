import React, {Component} from "react";
import {
	View,
	ScrollView,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import CustomTitle from "../../../components/public/CustomTitle";

export default class Prescribe extends React.Component{
	static navigationOption = {
		title:''
	}
	constructor(props){
		super(props);
		this.state = {
			dateRecord: [
				{title: "2017-11-21 10:00",nav:'HealthPlan'},
				{title: "2017-11-22 10:00",nav:'HealthPlan'},
				{title: "2017-11-23 10:00",nav:'HealthPlan'},
			]
		}
	}
	_renderdateRecord(){
		const dateRecord = this.state.dateRecord.map((item) => {
			return (
				<CustomTitle 
					key={item.title}
					title={item.title}
					rightIcon={<FontAwesome name="angle-double-right" size={18} />}
					style={{backgroundColor: gColor.whiteColor,paddingVertical:10,borderBottomWidth:1,
						borderColor:gColor.borderColors }}
					redirectPress={() => this.props.navigation.navigate(item.nav)}
				/>
			)
		})
		return dateRecord;
	}

	render(){
		return (
			<ScrollView>
				
				{this._renderdateRecord()}
			
			</ScrollView>
		)
	}
}