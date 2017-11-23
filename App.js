import React from "react";
import { StackNavigator } from 'react-navigation';
import { TabBar, SearchBar, List } from 'antd-mobile';
import Home from './src/Home';


import AllGoods from './containers/shoppingmall/AllGoods/AllGoods'; //全部商品
import CategoryDetails from './containers/shoppingmall/AllGoods/CategoryDetails';//商品详情


import AllOrders from "./containers/personalCenter/myOrder/AllOrders";//全部订单

import ConfirmOrder from "./containers/personalCenter/myOrder/AllInOrder/ConfirmOrder";//确认订单
import GenerateOrder from "./containers/personalCenter/myOrder/AllInOrder/GenerateOrder";//提交订单
import ApplyForReturn from "./containers/personalCenter/myOrder/AllInOrder/ApplyForReturn";//申请退换货
import Logistic from "./containers/personalCenter/myOrder/AllInOrder/Logistic";//物流情况

import PendPay from "./containers/personalCenter/myOrder/PendPay";//待付款
import ToReceive from "./containers/personalCenter/myOrder/ToReceive";//待收货
import Returns from "./containers/personalCenter/myOrder/Returns";//退换货

import OrderAndAddr from "./containers/shoppingmall/orderAndAddr/OrderAndAddr";//订单和收货地址管理
import ReceiveAddr from "./containers/shoppingmall/orderAndAddr/ReceiveAddr";//收货地址管理
import NewAddress from "./containers/shoppingmall/orderAndAddr/NewAddress";//新增收货地址

import HealthRecord from "./containers/personalCenter/myHealthRecord/HealthRecord";//我的健康档案
import DynamicData from "./containers/personalCenter/myHealthRecord/DynamicData";//动态监测数据
import RegisterCode from "./containers/personalCenter/registerCode/RegisterCode"; //注册邀请码
import PersonalInfo from "./containers/personalCenter/personalInfo/PersonalInfo"; //个人资料

import Yiintegral from "./containers/personalCenter/integral/Yiintegral"; //易积分

import Cart from "./containers/shoppingmall/Cart/Cart"; //购物车
import Category from "./containers/shoppingmall/categories/Category";//分类

import CashBalance from "./containers/personalCenter/CashBalance/CashBalance"; //现金余额
import Recharge from "./containers/personalCenter/CashBalance/recharge"; //充值
import Withdrawals from "./containers/personalCenter/CashBalance/Withdrawals"; //提现

require('./components/GlobalContants');

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
  AllOrders: {
    screen: AllOrders,//全部订单
  },
  ConfirmOrder: {
    screen: ConfirmOrder,//确认订单
  },
  GenerateOrder: {
    screen: GenerateOrder,//提交订单
  },
  ApplyForReturn: {
    screen: ApplyForReturn,//申请退换货
  },
  PendPay: {
    screen: PendPay,//待付款
  },
  ToReceive: {
    screen: ToReceive,//待收货
  },
  Returns: {
    screen: Returns,//退换货
  },
  OrderAndAddr: {
    screen: OrderAndAddr,//订单和收货地址管理
  },
  ReceiveAddr: {
    screen: ReceiveAddr,//收货地址管理
  },
  NewAddress: {
    screen: NewAddress,//新增收货地址
  },
  Logistic: {
    screen: Logistic,//物流情况
  },
  HealthRecord: {
    screen: HealthRecord,//健康档案
  },
  DynamicData: {
    screen: DynamicData,//动态监测数据
  },
  AllGoods: {
    screen: AllGoods,
  },
  CategoryDetails: {
    screen:CategoryDetails,
  },
  RegisterCode: {
    screen: RegisterCode,//注册邀请码
  },

  PersonalInfo: {
    screen: PersonalInfo,//个人信息
  },

  Cart: {
    screen: Cart, //购物车
  },

  Category: {
    screen: Category, //商品分类
  },

  Yiintegral: {
    screen: Yiintegral, //易积分
  },

  CashBalance: {
    screen: CashBalance, //现金余额
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
