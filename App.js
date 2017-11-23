import React from "react";
import { StackNavigator } from 'react-navigation';
import { TabBar, SearchBar, List } from 'antd-mobile';
import Home from './src/Home';
require('./components/GlobalContants');


import AllOrders from "./containers/personalCenter/myOrder/AllOrders";//全部订单
import ConfirmOrder from "./containers/personalCenter/myOrder/ConfirmOrder";//确认订单
import GenerateOrder from "./containers/personalCenter/myOrder/GenerateOrder";//提交订单
import ApplyForReturn from "./containers/personalCenter/myOrder/ApplyForReturn";//申请退换货
import PendPay from "./containers/personalCenter/myOrder/PendPay";//待付款
import ToReceive from "./containers/personalCenter/myOrder/ToReceive";//待收货
import Returns from "./containers/personalCenter/myOrder/Returns";//退换货
import OrderAndAddr from "./containers/personalCenter/myOrder/OrderAndAddr";//收货地址管理
import HealthRecord from "./containers/personalCenter/myHealthRecord/HealthRecord";//我的健康档案
import DynamicData from "./containers/personalCenter/myHealthRecord/DynamicData";//动态监测数据
import RegisterCode from "./containers/personalCenter/registerCode/RegisterCode"; //注册邀请码
import PersonalInfo from "./containers/personalCenter/personalInfo/PersonalInfo"; //个人资料

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
  HealthRecord: {
    screen: HealthRecord,//健康档案
  },
  DynamicData: {
    screen: DynamicData,//动态监测数据
  },
  RegisterCode: {
    screen: RegisterCode,//注册邀请码
  },
  PersonalInfo: {
    screen: PersonalInfo,//个人信息
  },
};

const App = StackNavigator(scenes);

export default App;
