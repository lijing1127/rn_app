import Storage from "react-native-storage";
import { AsyncStorage } from "react-native";

global.storage = new Storage({
	size: 1000,
	storageBackend: AsyncStorage,
	defaultExpires: 30,
	enableCache: true,
	sync: require('../models/getAPI'),
})
