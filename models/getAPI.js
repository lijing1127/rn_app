import { observable, action, runInAction } from "mobx";
import cFetch from "../utils/cfetch";
import API_CONFIG from "../config/api";

module.exports = {
	//首页轮播图
	@action sliderImg: async function(params) {
		 let { syncParams: { number } } = params;
		const ret = await cFetch(API_CONFIG.sliderImage, {method: "GET", params: {number: number}}).catch((error) => console.log(error) );
		runInAction("sliderImg success", () => {
			storage.save({
				key: "sliderImg",
				data: ret,
			})
		})
	},
	//商城轮播图
	@action mallImg: async function(params) {
		 let { syncParams: { number } } = params;
		const ret = await cFetch(API_CONFIG.sliderImage, {method: "GET", params: {number: number}}).catch((error) => console.log(error) );
		runInAction("sliderImg success", () => {
			storage.save({
				key: "mallImg",
				data: ret,
			})
		})
	},
	//服务中心
	@action getAllWork: async function() {
		const ret = await cFetch(API_CONFIG.allWork, {method: "GET"}).catch((error) => console.log(error) );
		runInAction("sliderImg success", () => {
			storage.save({
				key: "getAllWork",
				data: ret.slice(0,2),
			})
		})
	},
	//登录
	@action login: async function(params) {
		let { syncParams: { account, password } } = params;
		const ret = await cFetch(API_CONFIG.auth, {method: "POST", body: JSON.stringify({account: account, password: password})});
		if (ret.access_token) {
			runInAction("login success", () => {
				console.log(ret);
				storage.save({
					key: "login",
					data: ret,
				})
			})
		}

	},
}
