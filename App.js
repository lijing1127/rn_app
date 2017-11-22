import React from "react";
import { StackNavigator } from 'react-navigation';
import { TabBar, SearchBar, List } from 'antd-mobile';
import Home from './src/Home';

require('./components/GlobalContants');


import RegisterCode from "./containers/personalCenter/registerCode/RegisterCode"; //注册邀请码
import PersonalInfo from "./containers/personalCenter/personalInfo/PersonalInfo"; //个人资料
import Yiintegral from "./containers/personalCenter/integral/Yiintegral"; //易积分

import Cart from "./containers/shoppingmall/Cart/Cart"; //购物车
import Category from "./containers/shoppingmall/categories/Category";//分类


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

  RegisterCode: {
    screen: RegisterCode,
  },

  PersonalInfo: {
    screen: PersonalInfo,
  },

  Cart: {
    screen: Cart,
  },

  Category: {
    screen: Category,
  },

  Yiintegral: {
    screen: Yiintegral,
  },
};

const App = StackNavigator(scenes);

export default App;
