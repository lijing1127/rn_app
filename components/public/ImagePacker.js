import React, {Component} from "react";
import {
	View,
	ScrollView,
	StyleSheet,
	Text,
	BackHandler,
} from "react-native";
import { ImagePicker } from "antd-mobile";



export default class Convertible extends Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
		}
	}
	onChange = (files, type, index) => {
	    console.log(files, type, index);
	    this.setState({
	      files,
	    });
	  }
	render() {
		const { files } = this.state;
		return (
			<ImagePicker
				files={files}
				onChange={this.onChange}
				onImageClick={this.props.onImageClick}
				selectable={files.length < 5}
			/>
		)
	}
}
