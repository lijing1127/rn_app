import { observable, action, runInAction } from "mobx";

class HealthManagerMode {
	@observable isManager = false;

	@action async ModelManager() {
		// const ret = await setInterval(() => {
		// 	return true;
		// }, 3000)

		// if (ret) {
		// 	runInAction("request success", () => {
		// 		this.isManager = ret;
		// 		console.log(this.isManager);
		// 	})
		// }
		this.isManager = !this.isManager;
	}
}

export default new HealthManagerMode();