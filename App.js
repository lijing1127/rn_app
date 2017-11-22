import React from "react";
import { StackNavigator } from 'react-navigation';
import { TabBar, SearchBar, List } from 'antd-mobile';
import Home from './src/Home';


import HealthRecord from './containers/personalCenter/myHealthRecord/HealthRecord';//我的健康档案
import DynamicData from './/containers/personalCenter/myHealthRecord/DynamicData';//动态监测数据

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
  HealthRecord: {
    screen: HealthRecord,
  },
  DynamicData: {
    screen: DynamicData,
  }
};

const App = StackNavigator(scenes);

export default App;
