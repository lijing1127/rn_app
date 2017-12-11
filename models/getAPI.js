import { observable, action, runInAction } from "mobx";
import cFetch from "../utils/cfetch";
import API_CONFIG from "../config/api";


class GetAPI {
	@action async sliderImg(num) {
		const ret = await cFetch(API_CONFIG.sliderImage, {method: "GET", parmas: {number: num}});
		runInAction("sliderImg success", () => {
			storage.save({
				key: "sliderImg",
				data: ret,
			})
			// console.log(ret);
		})

	}
}

export default new GetAPI();