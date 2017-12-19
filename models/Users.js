import {observable, action, runInAction} from "mobx";
import { AsyncStorage } from "react-native";
import cFetch from "../utils/cfetch";
import API_CONFIG from "../config/api";
// import fetch from "cross-fetch";

class User {
	//用户信息；
	@observable auth = {
		isFetching: false,
	};

	@action async getUsersInfo(userId) {
		const ret = await cFetch(API_CONFIG.user_info, {method: "GET", params: {user_id: userId}});
		if (ret) {
			runInAction("login success", () => {
				this.auth = Object.assign({}, {isFetching: true}, ret);
			})
		}
	}

	//微信用户信息；
	@observable wechatAuth = {};

	@action async getUserWeChatInfo(userId) {
		const ret = await cFetch(API_CONFIG.wechat_user_info, {method: "GET", params: {user_id: userId}});
		if (ret) {
			runInAction("login success", () => {
				this.wechatAuth = Object.assign({}, ret);
				// console.log(this.wechatAuth);
			})
		}
	}
	
	//用户健康档案
	@observable healthRecord = {};

	@action async getUserHealthRecord(idNumber) {
		const ret = await cFetch(API_CONFIG.health_record, {method: "GET", params: {id_number: idNumber}});
		if (ret) {
			runInAction("get users healthrecord", () => {
				this.healthRecord = Object.assign({}, ret);
				console.log(JSON.stringify(this.healthRecord));
			})
		}
	}

	//用户收货地址
	@observable allAddress = [];

	@action async getAllAddress(user_id) {
		const ret = await cFetch(API_CONFIG.get_address, {method: "GET", params: {user_id: user_id}});
		if (ret) {
			runInAction('get all address', () => {
				this.allAddress = ret;
				console.log(this.allAddress);
			})
		}
	}
}

export default new User();
