import React, {Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
	img: {
		height: 100,
		width: 80,
	},
	scroll: {
		width: '100%',
		height: 207,
		flexDirection: 'row',
		marginLeft: 15,
		// borderWidth :1,
	},
	distance: {
		paddingTop: '3%',
		paddingRight: '3%',
	},
	doc: {
		marginVertical: 4,
	},
	name: {
		marginTop: 5,
	}
});

var dataList = [
	{url:require('../../assets/images/doc.jpg'),name:'任严冬0',doc:'主任医师',depart:'心内科'},
	{url:require('../../assets/images/doc.jpg'),name:'任严冬1',doc:'主任医师',depart:'心内科'},
	{url:require('../../assets/images/doc.jpg'),name:'任严冬2',doc:'主任医师',depart:'心内科'},
	{url:require('../../assets/images/doc.jpg'),name:'任严冬3',doc:'主任医师',depart:'心内科'},
	{url:require('../../assets/images/doc.jpg'),name:'任严冬4',doc:'主任医师',depart:'心内科'},
	{url:require('../../assets/images/doc.jpg'),name:'任严冬5',doc:'主任医师',depart:'心内科'},
	{url:require('../../assets/images/doc.jpg'),name:'任严冬6',doc:'主任医师',depart:'心内科'},
	{url:require('../../assets/images/doc.jpg'),name:'任严冬7',doc:'主任医师',depart:'心内科'},
];


export default class ScrollList extends React.Component{
	constructor(props) {
		super(props);
  		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  		this.state = {
    		dataSource: ds.cloneWithRows(dataList),
  		};
	}

	_renderRow(rowData: object, sectionID: number, rowID: number){
	    return (	    	
	        <TouchableOpacity style={styles.distance}>
	          	<Image style={styles.img} source={rowData.url}/>
	          	<Text style={styles.name}> {rowData.name}</Text>
	          	<Text style={styles.doc}> {rowData.doc}</Text>
	          	<Text> {rowData.depart}</Text>
	        </TouchableOpacity>	      
	    );
	 }

	render(){
		return (
			<View style={styles.scroll}>
				<ListView 
					horizontal={true} 
					showsHorizontalScrollIndicator={false}
      				dataSource={this.state.dataSource}
      				renderRow={this._renderRow}
    			/>
			</View>
		);
	}
}

