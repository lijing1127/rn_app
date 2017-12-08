import fetch from "cross-fetch";
import {AsyncStorage} from "react-native";
import API_CONFIG from "../config/api";


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
	if(opts && opts.method == 'GET' && opts['params']) {
		mergeUrl = mergeUrl + '?' + toQueryString(opts['params'])
	}
	opts.headers = {
		...opts.headers,
		'content-type': 'application/json',
		'Access-Authorization': AsyncStorage.getItem('access_token') || '',
	}
	return fetch(mergeUrl, opts).then((res) => {
		if(res.status >=400) {
			console.log(res.status);
			throw new Error("服务器响应失败");
		}
		return res.json();
	})
	.then((dataJson) => {
		return console.log(dataJson);
	})
	.catch((err) => {
		console.log(err);
	})
}

export default cFetch;