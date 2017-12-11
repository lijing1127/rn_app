import { observable, action, runInAction } from "mobx";

class GetAPI {
	@action async sliderImg(num) {
		const ret = await cFetch(API_CONFIG.auth, {method: "GET", parmas: {number: num}});
		runInAction("sliderImg success", () => {
			storage.save({
				key: "sliderImg",
				data: ret,
			})
		})

	}
}

export default new GetAPI();