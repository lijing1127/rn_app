import React from "react";
import { StackNavigator } from 'react-navigation';
import { TabBar, SearchBar, List } from 'antd-mobile';
import Home from './src/Home';
import AllGoods from './containers/shoppingmall/AllGoods/AllGoods'; //全部商品
import CategoryDetails from './containers/shoppingmall/AllGoods/CategoryDetails';//商品详情
require('./components/GlobalContants');


import RegisterCode from "./containers/personalCenter/registerCode/RegisterCode"; //注册邀请码
import PersonalInfo from "./containers/personalCenter/personalInfo/PersonalInfo"; //个人资料
import CashBalance from "./containers/personalCenter/CashBalance/CashBalance"; //现金余额
import Recharge from "./containers/personalCenter/CashBalance/recharge"; //充值
import Withdrawals from "./containers/personalCenter/CashBalance/Withdrawals"; //提现



const getOptions = () => ({
  header: null,
  // headerStyle: {
  //   backgroundColor: gColor.importColor,
  //   paddingVertical: 10,
  // },
  // headerTintColor: 'white',
});

const scenes = {
  Home: {
    screen: Home,
    navigationOptions: getOptions(),
  },

  AllGoods: {
    screen: AllGoods,
  },

  CategoryDetails: {
    screen:CategoryDetails,
  },

  RegisterCode: {
    screen: RegisterCode,
  },

  PersonalInfo: {
    screen: PersonalInfo,
  },

  CashBalance: {
    screen: CashBalance,
  },

  Recharge: {
    screen: Recharge,
  },

  Withdrawals: {
    screen: Withdrawals,
  },

};

const App = StackNavigator(scenes);

export default App;
