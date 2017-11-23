import {observable, action} from "mobx";

let jsonData = require('./shoping.json');

class CartModels {
	@observable itemData = {};

	@action replace() {
		this.itemData = jsonData;
	}
	
	//加
	@action increase = (money) => {
        this.itemData.totalMoney += money;
    }

    //减
    @action reduce = (money) => {
        this.itemData.totalMoney -= money;
    }

    //全选
    @action selectAll = () => {
    	this.itemData.isAllSelect = !this.itemData.isAllSelect;
        this.itemData.totalMoney = 0;
        if(this.itemData.isAllSelect) {
            for(let i = 0; i < this.itemData.datas.length; i ++) {
                this.itemData.totalMoney += this.itemData.datas[i].money * this.itemData.datas[i].count;
            }
        }
    	
    }

    //反选
    @action itemPress = () => {
        let i = 0;
        this.itemData.datas.map((item) => {
            if(item.isSelect != true) {
                i += 1;
            }
        })
        if(i == 0) {
            this.itemData.isAllSelect = true;
        }else {
            this.itemData.isAllSelect = false;
        }
    }
}

export default CartModels;