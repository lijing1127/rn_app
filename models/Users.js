import {observable, action, runInAction} from "mobx";
import { AsyncStorage } from "react-native";
import cFetch from "../utils/cfetch";
import API_CONFIG from "../config/api";
// import fetch from "cross-fetch";

class User {
	@observable auth = {
		isAuthenticated: false,
	}
	// @action async getUser(data) {
	// 	const ret = await fetch('http://ybhm.ybyt.cc/auth', {
	// 		mode: "cors",
	// 		method: "POST",
	// 		headers: {"content-type":"application/x-www-form-urlencoded",
	// 				"Accept": "application/json"},
	// 		body: data,
	// 	}).then(
	// 		(response) => {return response.json()
	// 	}).then(
	// 		(jsonData) => {return jsonData
	// 	}).catch((error) => {
	// 		console.log(error);
	// 	})

	// 	if(ret) {
	// 		runInAction("request success!", () => {
	// 			console.log(ret);
	// 		})
	// 	}
	// }

	@action async login(creds) {
		cFetch(API_CONFIG.auth, {method: "POST", body: JSON.stringify(creds)});
	}
}

export default new User();
