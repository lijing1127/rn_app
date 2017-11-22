import React from "react";
import { StackNavigator } from 'react-navigation';
import { TabBar, SearchBar, List } from 'antd-mobile';
import Home from './src/Home';
import AllGoods from './containers/shoppingmall/AllGoods/AllGoods';

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
  AllGoods: {
    screen: AllGoods,
  },
};

const App = StackNavigator(scenes);

export default App;
