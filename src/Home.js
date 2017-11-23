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
  }

  componentDidMount() {
    Font.loadAsync({
      'anticon': require('../assets/fonts/iconfont.ttf'),
    });
  }

  renderContent(pageText) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        <View style={{width: gScreen.width, backgroundColor: gColor.importColor, paddingTop: 22,}}>
          <SearchBar placeholder="搜索" showCancelButton />
        </View>
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
      <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="#ccc">
        <TabBar.Item title="首页" icon={require('./../assets/images/alipay.png')} selectedIcon={require('./../assets/images/alipay_sel.png')} selected={this.state.selectedTab === 'indexTab'} onPress={() => this.onChangeTab('indexTab')}>
          {this.renderContent(<ShowIndex navigation={this.props.navigation} />)}
        </TabBar.Item>
        <TabBar.Item icon={require('./../assets/images/koubei.png')} selectedIcon={require('./../assets/images/koubei_sel.png')} title="服务中心" selected={this.state.selectedTab === 'serverCenterTab'} onPress={() => this.onChangeTab('serverCenterTab')}>
          {this.renderContent(<ServerCenter navigation={this.props.navigation} />)}
        </TabBar.Item>
        <TabBar.Item icon={require('./../assets/images/friend.png')} selectedIcon={require('./../assets/images/friend_sel.png')} title="健康管理师" selected={this.state.selectedTab === 'healthManagerTab'} onPress={() => this.onChangeTab('healthManagerTab')}>
          {this.renderContent(<HealthManager navigation={this.props.navigation} />)}
        </TabBar.Item>
        <TabBar.Item icon={require('./../assets/images/busi.png')} selectedIcon={require('./../assets/images/busi_sel.png')} title="商城" selected={this.state.selectedTab === 'storeTab'} onPress={() => this.onChangeTab('storeTab')}>
          {this.renderContent(<Mall navigation={this.props.navigation} />)}
        </TabBar.Item>
        <TabBar.Item icon={require('./../assets/images/busi.png')} selectedIcon={require('./../assets/images/busi_sel.png')} title="我的" selected={this.state.selectedTab === 'personalTab'} onPress={() => this.onChangeTab('personalTab')}>
          {this.renderContent(<PersonalCenter navigation={this.props.navigation} />)}
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default Home;
