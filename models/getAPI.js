import { observable, action, runInAction } from "mobx";

module.exports = {
	//首页轮播图
	@action sliderImg: async function(params) {
	      let { resolve, reject, syncParams: { number } } = params;
	      fetch(`http://ybhm.ybyt.cc/scroll_the_picture?number=${number}`, {
	        method: 'GET',
	      }).then(response => {
	        return response.json();
	      }).then(json => {
	        //console.log(json);
	        if(json){
	          storage.save({
	            key: 'sliderImg',
	            data: json,
	          });
	          // 成功则调用resolve
	          resolve && resolve(json);
	        }
	        else{
	          // 失败则调用reject
	          reject && reject(new Error('data parse error'));
	        }
	      }).catch(err => {
	        console.warn(err);
	        reject && reject(err);
	      });
	},
	//商城轮播图
	@action mallImg: async function(params) {
	     let { resolve, reject, syncParams: { number } } = params;
		 fetch(`http://ybhm.ybyt.cc/scroll_the_picture?number=${number}`, {
	        method: 'GET',
	      }).then(response => {
	        return response.json();
	      }).then(json => {
	        //console.log(json);
	        if(json){
	          storage.save({
	            key: 'mallImg',
	            data: json.slice(0, 2),
	          });
	          // 成功则调用resolve
	          resolve && resolve(json);
	        }
	        else{
	          // 失败则调用reject
	          reject && reject(new Error('data parse error'));
	        }
	      }).catch(err => {
	        console.warn(err);
	        reject && reject(err);
	      });
	},
	//服务中心
	@action getAllWork: async function(params) {
	     let { resolve, reject } = params;
		 fetch('http://ybhm.ybyt.cc/work/all_work', {
	        method: 'GET',
	      }).then(response => {
	        return response.json();
	      }).then(json => {
	        // console.log(json);
	        if(json){
	          storage.save({
	            key: 'getAllWork',
	            data: json.slice(0,2),
	          });
	          // 成功则调用resolve
	          resolve && resolve(json);
	        }
	        else{
	          // 失败则调用reject
	          reject && reject(new Error('data parse error'));
	        }
	      }).catch(err => {
	        console.warn(err);
	        reject && reject(err);
	      });
	},
	//登录
	@action getToken: async function(params) {
		let { resolve, reject, syncParams: { account, password } } = params;
		// const ret = await cFetch(API_CONFIG.auth, {method: "POST", body: JSON.stringify({account: account, password: password})});
		// if (ret.access_token) {
		// 	runInAction("login success", () => {
		// 		console.log(ret);
		// 		storage.save({
		// 			key: "login",
		// 			data: ret,
		// 		})
		// 	})
		// }
		fetch('http://ybhm.ybyt.cc/auth', {
	        method: 'POST',
	        headers: {
	        	'content-type': 'application/json',
	        },
	        body: JSON.stringify({account: account, password: password}),
	      }).then(response => {
	        return response.json();
	      }).then(json => {
	        console.log(json);
	        if(json){
	          storage.save({
	            key: 'getToken',
	            data: json,
	          });
	          // 成功则调用resolve
	          resolve && resolve(json);
	        }
	        else{
	          // 失败则调用reject
	          reject && reject(new Error('data parse error'));
	        }
	      }).catch(err => {
	        console.warn(err);
	        reject && reject(err);
	      });
	},

	//商城部分
	//分类
	@action getCategory: async function(params) {
		 let { resolve, reject } = params;
		 fetch('http://ybhm.ybyt.cc/shop_mall/sort', {
	        method: 'GET',
	      }).then(response => {
	        return response.json();
	      }).then(json => {
	        if(json){
	          storage.save({
	            key: 'getCategory',
	            data: json,
	          });
	          // 成功则调用resolve
	          resolve && resolve(json);
	        }
	        else{
	          // 失败则调用reject
	          reject && reject(new Error('data parse error'));
	        }
	      }).catch(err => {
	        console.warn(err);
	        reject && reject(err);
	      });
	},

	//热卖产品
	@action getHotProduction: async function(params) {
		let { resolve, reject } = params;
		 fetch('http://ybhm.ybyt.cc/shop_mall/hot_product', {
	        method: 'GET',
	      }).then(response => {
	        return response.json();
	      }).then(json => {
	        if(json){
	          storage.save({
	            key: 'getHotProduction',
	            data: json,
	          });
	          // 成功则调用resolve
	          resolve && resolve(json);
	        }
	        else{
	          // 失败则调用reject
	          reject && reject(new Error('data parse error'));
	        }
	      }).catch(err => {
	        console.warn(err);
	        reject && reject(err);
	      });
	},

	//活动
	@action getActivety: async function(params) {
		let { resolve, reject } = params;
		fetch('http://ybhm.ybyt.cc/shop_mall/activity', {
			method: 'GET',
		}).then(response => {
			return response.json();
		}).then(json => {
			if(json){
			  storage.save({
			    key: 'getActivety',
			    data: json,
			  });
			  // 成功则调用resolve
			  resolve && resolve(json);
			}
			else{
			  // 失败则调用reject
			  reject && reject(new Error('data parse error'));
			}
		}).catch(err => {
			console.warn(err);
			reject && reject(err);
		});
	},
	//获取默认地址
	@action getDefaultAddress: async function(params) {
		let { resolve, reject, syncParams: { user_id } } = params;
		fetch(`http://ybhm.ybyt.cc/shop_mall/get_default_address?user_id=${user_id}`, {
			method: 'GET',
		}).then(response => {
			return response.json();
		}).then(json => {
			if(json){
				storage.save({
					key: 'getDefaultAddress',
					data: json,
				});

				resolve && resolve(json);
			}else {
				reject && reject(new Error('data parse error'));
			}
		}).catch(err => {
			console.warn(err);
			reject && reject(err);
		})
	}
}
