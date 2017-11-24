import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  Alert,
  Linking,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {TabNavigator} from "react-navigation";

import ShowIndex from "../containers/ShowIndex"; //首页
import ServerCenter from "../containers/ServerCenter"; //服务中心
import HealthManager from "../containers/HealthManager"; //健康管理师
import Mall from "../containers/Mall"; //商城
import PersonalCenter from "../containers/PersonalCenter"; //个人中心

const Home = TabNavigator({
  Home: {
    screen: ShowIndex,
  },
  ServerCenter: {
    screen: ServerCenter,
  },
  HealthManager: {
    screen: HealthManager,
  },
  Mall: {
    screen: Mall,
  },
  PersonalCenter: {
    screen: PersonalCenter,
  },
},{
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  tabBarOptions: {
    showIcon: true,
    inactiveTintColor: "#9e9898",
    activeTintColor: gColor.importColor,
    labelStyle: {
      fontSize: gFontSize.font1,
      width: (Platform.OS === 'android') ? gScreen.width: null,
      marginTop: 2,

    },
    style: {
      backgroundColor: gColor.color1,
      height: 53,
    },
    indicatorStyle: {
      height: 0,
    },
    allowFontScaling: false,
  },

})

export default Home;
