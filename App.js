import React, {Component} from "react";
import { View, StatusBar, Platform } from "react-native";
import { StackNavigator } from 'react-navigation';
import Home from './src/Home';

<<<<<<< HEAD
import Login from "./containers/Login"; //登录
import Register from './containers/Register'; //注册
=======
import Setting from "./containers/personalCenter/setting/Setting";//设置
import Login from "./containers/personalCenter/setting/Login";//登录
import Register from './containers/personalCenter/setting/Register'; //注册
>>>>>>> e5fa455557906c93d3b0237836693e40b3b68aed

import CustomerService from './containers/showIndex/service/CustomerService'; //客户服务

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
import BasicRecord from "./containers/personalCenter/myHealthRecord/BasicRecord";//基础健康档案
import RegisterCode from "./containers/personalCenter/registerCode/RegisterCode"; //注册邀请码
import PersonalInfo from "./containers/personalCenter/personalInfo/PersonalInfo"; //个人资料
import MyInfoEdit from "./containers/personalCenter/Edit/MyInfoEdit"; //我的信息-编辑
import ExamineInfoEdit from "./containers/personalCenter/Edit/ExamineInfoEdit"; //审核信息-编辑

import Yiintegral from "./containers/personalCenter/integral/Yiintegral"; //易积分

import Cart from "./containers/shoppingmall/Cart/Cart"; //购物车
import Category from "./containers/shoppingmall/categories/Category";//分类

import CashBalance from "./containers/personalCenter/CashBalance/CashBalance"; //现金余额
import Recharge from "./containers/personalCenter/CashBalance/recharge"; //充值
import Withdrawals from "./containers/personalCenter/CashBalance/Withdrawals"; //提现

import Prescribe from "./containers/personalCenter/prescribe/Prescribe";//健康管理方案 
import HealthPlan from "./containers/personalCenter/prescribe/HealthPlan";//我的健康方案

require('./components/GlobalContants');

const getOptions = () => ({
  mode: 'card',
  gesturesEnabled: true,
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const translateX = position.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [layout.initWidth, 0, 0]
        });

        const opacity = position.interpolate({
            inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
            outputRange: [0, 1, 1, 0.3, 0]
        });

        return { opacity, transform: [{ translateX }] }
    }
  }),
  gestureResponseDistance:{horizontal:20},
  navigationOptions: {
    headerStyle: {
      // backgroundColor: gColor.importColor,
      elevation: 0,
      shadowOpacity: 0,
      marginTop: (Platform.OS === 'android') ? 22: 0,
      borderBottomWidth: 1,
      borderColor: gColor.borderColors,
    },
    headerTintColor: gColor.textColor,
  }
});

const scenes = {
  Home: {
    screen: Home,
  },
  Setting: {
    screen: Setting,//设置
  },
  Login: {
    screen: Login,//登录
  },
  Register: {
    screen: Register,//注册
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
  BasicRecord: {
    screen: BasicRecord,//基础健康档案
  },
  AllGoods: {
    screen: AllGoods, //全部商品
  },
  CategoryDetails: {
    screen:CategoryDetails, //商品详情
  },
  RegisterCode: {
    screen: RegisterCode,//注册邀请码
  },

  PersonalInfo: {
    screen: PersonalInfo,//个人信息
  },

  MyInfoEdit: {
    screen: MyInfoEdit, //我的信息-编辑
  },

  ExamineInfoEdit: {
    screen: ExamineInfoEdit, //审核信息-编辑
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
    screen: Recharge, //充值
  },

  Withdrawals: {
    screen: Withdrawals, //提现
  },

  CustomerService: {
    screen: CustomerService, //客服
  },
  Prescribe: {
    screen: Prescribe,//健康管理方案
  },
  HealthPlan: {
    screen: HealthPlan,//我的健康方案
  },

};

const App = StackNavigator(scenes, getOptions());

// export default App;

class YYj extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // StatusBar.setBackgroundColor("#ad0e11");
    StatusBar.setBarStyle("default");
  }
  render() {
    return (
      <View style={{flex: 1}}> 
        <App />
      </View>
    )
  }
}

export default YYj;