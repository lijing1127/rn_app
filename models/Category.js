import {observable, action, runInAction} from "mobx";
import { AsyncStorage } from "react-native";
import cFetch from "../utils/cfetch";
import API_CONFIG from "../config/api";
// import fetch from "cross-fetch";

class Category {
	//产品分类；
	@observable sortProduct = [];

	@action async getCategoryProduct(sortId) {
		const ret = await cFetch(API_CONFIG.sort_product, {method: "GET", params: {sort: sortId}});
		if (ret) {
			runInAction("get category produce success", () => {
				this.sortProduct = ret;
			})
		}
	}

	//产品详情；
	@observable productionDetail = [];

	@action async getProductionDetail(proId) {
		const ret = await cFetch(API_CONFIG.product_id, {method: 'GET', params: {product_id: proId}});
		if (ret) {
			runInAction("get production success", () => {
				this.productionDetail = ret;
			})
		}
	}

	//全部产品；
	@observable allProduction = [];

	@action async getAllProduction() {
		const ret = await cFetch(API_CONFIG.all_product, {method: 'GET',});
		if (ret) {
			runInAction("get all production success", () => {
				this.allProduction = ret;
			})
		}
	}

	//活动产品；
	@observable activityProduct = {
	  "activety_image": {
	    "image": {
	      "url": "",
	    }
	  },
	  "product": [
	    [
	      33,
	      "测试合伙人",
	      "_____1_.png",
	      "0.01"
	    ]
	  ]
	};

	@action async getActivityProduct(activityId) {
		const ret = await cFetch(API_CONFIG.activity_id, {method: 'GET', params: {activity_id: activityId}});
		if (ret.activety_image) {
			runInAction("get activity success", () => {
				this.activityProduct = Object.assign({}, this.activityProduct, ret);
			})
		}
	}


}

export default new Category();
