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
import { TabBar, SearchBar, List } from 'antd-mobile';
import { Font } from 'expo';

import ShowIndex from "../containers/ShowIndex"; //首页
import ServerCenter from "../containers/ServerCenter"; //服务中心
import HealthManager from "../containers/HealthManager"; //健康管理师
import Mall from "../containers/Mall"; //商城
import PersonalCenter from "../containers/PersonalCenter"; //个人中心

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'indexTab',
    };
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('red');
  }

  componentDidMount() {
    Font.loadAsync({
      'anticon': require('../assets/fonts/iconfont.ttf'),
    });
  }

  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        {pageText}
      </View>
    );
  }

  onChangeTab(tabName) {
    this.setState({
        selectedTab: tabName,
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <TabBar unselectedTintColor="#949494" tintColor="#ad0e11" barTintColor="#ccc">
        <TabBar.Item title="首页" icon={require('./../assets/images/home.png')} selectedIcon={require('./../assets/images/home_sel.png')} selected={this.state.selectedTab === 'indexTab'} onPress={() => this.onChangeTab('indexTab')}>
          {this.renderContent(<ShowIndex navigation={this.props.navigation} />)}
        </TabBar.Item>
        <TabBar.Item icon={require('./../assets/images/center.png')} selectedIcon={require('./../assets/images/center_sel.png')} title="服务中心" selected={this.state.selectedTab === 'serverCenterTab'} onPress={() => this.onChangeTab('serverCenterTab')}>
          {this.renderContent(<ServerCenter navigation={this.props.navigation} />)}
        </TabBar.Item>
        <TabBar.Item icon={require('./../assets/images/doctor.png')} selectedIcon={require('./../assets/images/doctor_sel.png')} title="健康管理师" selected={this.state.selectedTab === 'healthManagerTab'} onPress={() => this.onChangeTab('healthManagerTab')}>
          {this.renderContent(<HealthManager navigation={this.props.navigation} />)}
        </TabBar.Item>
        <TabBar.Item icon={require('./../assets/images/mall.png')} selectedIcon={require('./../assets/images/mall_sel.png')} title="商城" selected={this.state.selectedTab === 'storeTab'} onPress={() => this.onChangeTab('storeTab')}>
          {this.renderContent(<Mall navigation={this.props.navigation} />)}
        </TabBar.Item>
        <TabBar.Item icon={require('./../assets/images/mine.png')} selectedIcon={require('./../assets/images/mine_sel.png')} title="我的" selected={this.state.selectedTab === 'personalTab'} onPress={() => this.onChangeTab('personalTab')}>
          {this.renderContent(<PersonalCenter navigation={this.props.navigation} />)}
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default Home;
