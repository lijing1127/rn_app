import React, {Component} from "react";
import {
	View,
	Text,
} from "react-native";

import { Picker, List, WhiteSpace } from 'antd-mobile';
import { district, provinceLite as province } from 'antd-mobile-demo-data';
import arrayTreeFilter from 'array-tree-filter';

import ChinaCityCode from "./ChinaCityCode";

export default class CityCode extends React.Component{
	constructor(props) {
		super(props);
	    this.state = {
	      data: [],
	      cols: 1,
	      pickerValue: [],
	      asyncValue: [],
	      visible: false,
	    }
	}
	getSel() {
		const value = this.state.pickerValue;
		if (!value) {
		  return '';
		}
		const treeChildren = arrayTreeFilter(ChinaCityCode, (c, level) => c.value === value[level]);
		return treeChildren.map(v => v.label).join(',');
	}
	render(){
		return(
			<List style={{marginTop: 15, borderWidth: 1, marginHorizontal: 15, borderColor: gColor.borderColors}}>
				<Picker
					visible={this.state.visible}
					data={ChinaCityCode}
					value={this.state.pickerValue}
					onChange={v => this.setState({ pickerValue: v })}
					onOk={() => this.setState({ visible: false })}
					onDismiss={() => this.setState({ visible: false })}
				>
					<List.Item extra={this.getSel()} onClick={() => this.setState({ visible: true })}>
						<Text>省份/市/区：</Text>
					</List.Item>
				</Picker>  
			</List>
		)
	
	}
}
