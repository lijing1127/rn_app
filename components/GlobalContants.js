import {
	Dimensions,
	ToastAndroid,
	NetInfo,
} from "react-native";

global.gScreen = {
	width: Dimensions.get("window").width,
	height: Dimensions.get("window").height,
}

global.gFontSize = {
	font1: 10,
	smallText: 12,
	centerText: 14,
	bigText: 16,
	middleText: 18,
	titleText:20,
}

global.gColor = {
	color1: "#f0f0f0",
	color2: "#9e9898",
	importColor: '#ad0e11',
	textColor: '#000',
	textColor2: '#999',
	borderColors: '#eee',
	whiteColor: '#fff',
}