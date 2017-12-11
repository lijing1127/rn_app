import fetch from "cross-fetch";
require('es6-promise').polyfill();
import {AsyncStorage, Alert} from "react-native";
import API_CONFIG from "../config/api";

const errorMessages = (res) => `${res.status} ${res.statusText}`;

function check401(res) {
	if(res.status == 401) {
		Alert.alert(
    	'登录',
    	'您的账号或密码不正确,请重新输入',
    	[
    		{text: '确定', onPress: () => {return false}},
    	],)

    	return Promise.reject(errorMessages(res))
	}
	return res;
}

function check404(res) {
	if(res.status == 404) {
		Alert.alert(
    	'您好',
    	'服务器响应超时,请您稍后重试',
    	[
    		{text: '确定', onPress: () => {return false}},
    	],)

    	return Promise.reject(errorMessages(res))
	}
	return res;
}

function check500(res) {
	if(res.status >= 500) {
		Alert.alert(
    	'您好',
    	'服务器出现错误,请稍后重试',
    	[
    		{text: '确定', onPress: () => {return false}},
    	],)

    	return Promise.reject(errorMessages(res))
	}
	return res;
}

function setUriParam(keys, value, keyPostfix) {
	let keyStr = keys[0];

	keys.slice(1).forEach((key) => {
		keyStr +=`[${key}]`;
	});

	if(keyPostfix) {
		keyStr += keyPostfix;
	}

	return `${encodeURIComponent(keyStr)}=${encodeURIComponent(value)}`;
}

function getUriParam(keys, object) {
	const array = [];

	if (object instanceof(Array)) {
		object.forEach((value) => {
			array.push(setUriParam(keys, value, '[]'));
		});
	}else if(object instanceof(Object)) {
		for (const key in object) {
			if (object.hasOwnProperty(key)) {
				const value = object[key];

				array.push(getUriParam(keys.concat(key), value));
			}
		}
	}else {
		if (object !== undefined) {
			array.push(setUriParam(keys, object));
		}
	}

	return array.join('&');
}

function toQueryString(object) {
	const array = [];
	for (const key in object) {
		if (object.hasOwnProperty(key)) {
			const str = getUriParam([key], object[key]);

			if(str !== '') {
				array.push(str);
			}
		}
	}

	return array.join('&');
}

const cFetch = (url, options) => {
	let mergeUrl = API_CONFIG.baseUri + url;
	const defaultOptions = {
		method: 'GET',
	};

	const opts = Object.assign({}, defaultOptions, {...options});
	console.log(opts);
	if(opts && opts.method == 'GET' && opts['parmas']) {
		mergeUrl = mergeUrl + '?' + toQueryString(opts['parmas'])
		console.log(mergeUrl);

	}
	opts.headers = {
		...opts.headers,
		'content-type': 'application/json',
		// 'Access-Authorization': AsyncStorage.getItem('access_token') || '',
	}
	return fetch(mergeUrl, opts)
		.then(check401)
		.then(check404)
		.then(check500)
		.then((res) => {
			return res.json();
		})
		.then((dataJson) => {
			return dataJson;
		})
		.catch((err) => {
			console.log(err);
		})
}

export default cFetch;