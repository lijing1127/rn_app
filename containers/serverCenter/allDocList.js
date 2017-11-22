import React, {Component} from "react";
import {
	View,
	Text,
	StyleSheet,
} from "react-native";
import DoctorList from "../../components/public/doctorList";

require("../../components/GlobalContants");

export default class AllDocList extends Component {

	docData = [
		{name:'李医生',info:'乱七八糟介绍还有8天就可以买猫狗资料片啦开心捏给小人儿当兽医哈哈哈哈养一只猫一只狗小房子刚刚好够大！！乱七八糟介绍还有8天就可以买猫狗资料片啦开心捏给小人儿当兽医哈哈哈哈养一只猫一只狗小房子刚刚好够大！！',img:require('../../assets/images/doc.jpg')},
		{name:'王医生',info:'乱七八糟介绍还有8天就可以买猫狗资料片啦开心捏给小人儿当兽医哈哈哈哈养一只猫一只狗小房子刚刚好够大！！乱七八糟介绍还有8天就可以买猫狗资料片啦开心捏给小人儿当兽医哈哈哈哈养一只猫一只狗小房子刚刚好够大！！',img:require('../../assets/images/doc.jpg')},
		{name:'赵医生',info:'乱七八糟介绍还有8天就可以买猫狗资料片啦开心捏给小人儿当兽医哈哈哈哈养一只猫一只狗小房子刚刚好够大！！乱七八糟介绍还有8天就可以买猫狗资料片啦开心捏给小人儿当兽医哈哈哈哈养一只猫一只狗小房子刚刚好够大！！',img:require('../../assets/images/doc.jpg')},
	];

	_renderDoctorList = (docData,key) => {

		const { name,info,img } = docData;

		return (
			<DoctorList
				key={name}
				source={img}
				imageStyle={styles.docImg}
				name={name}
				info={info}
				viewStyle={styles.docInfo}
				nameStyle={styles.docTitle}
				touchableStyle={styles.docList}
				infoStyle={styles.docImport}
				docgoStyle={styles.docGo}
			/>
		)
	}


	render(){
		return (
			<View>
				{this.docData.map(this._renderDoctorList)}
			</View>
		)
	}

}


const styles = StyleSheet.create({
	docList: {
		flexDirection: 'row',
		width: gScreen.width,
		height: 95,
		padding: 5,
		alignItems: 'center',
	},

	docImg: {
		width: 60,
		height: 80,
	},

	docInfo: {
		marginLeft: 10,
		flex:1,
		height: 80,
		overflow: 'hidden',
	},

	docTitle: {
		fontSize: gFontSize.bigText,
		fontWeight: 'bold',
		marginBottom: 5,
	},

	docImport: {
		fontSize: gFontSize.smallText,
	},

	docGo: {
		width: 40,
		textAlign: 'center',
	}
})