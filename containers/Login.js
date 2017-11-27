import React, {Component} from "react";
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import { Picker, List, WhiteSpace } from 'antd-mobile';
// import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';

import { district, provinceLite as province } from 'antd-mobile-demo-data';

// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <View
    onClick={this.props.onClick}
    style={{ backgroundColor: '#fff', paddingLeft: 15 }}
  >
    <View className="test" style={{ display: 'flex', height: 45, lineHeight: 45}}>
      <Text style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
      {props.children}</Text>
      <Text style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</Text>
    </View>
  </View>
);


class Test extends Component {
  state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    sValue: ['2013', '春'],
    visible: false,
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: province,
      });
    }, 120);
  };
  onPickerChange = (val) => {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    const asyncValue = [...val];
    if (val[0] === 'zj') {
      d.forEach((i) => {
        if (i.value === 'zj') {
          colNum = 2;
          if (!i.children) {
            i.children = [{
              value: 'zj-nb',
              label: '宁波',
            }, {
              value: 'zj-hz',
              label: '杭州',
            }];
            asyncValue.push('zj-nb');
          } else if (val[1] === 'zj-hz') {
            i.children.forEach((j) => {
              if (j.value === 'zj-hz') {
                j.children = [{
                  value: 'zj-hz-xh',
                  label: '西湖区',
                }];
                asyncValue.push('zj-hz-xh');
              }
            });
            colNum = 3;
          }
        }
      });
    } else {
      colNum = 1;
    }
    this.setState({
      data: d,
      cols: colNum,
      asyncValue,
    });
  };
  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
    return treeChildren.map(v => v.label).join(',');
  }
  // setVal() {
  //   this.props.form.setFieldsValue({
  //     district: ['340000', '340800', '340822'],
  //   });
  // },
  render() {
    // const { getFieldProps } = this.props.form;
    return (
      <List>
        <Picker
          title="选择地区"
          extra="请选择(可选)"
          data={district}
          value={this.state.pickerValue}
          onChange={v => this.setState({ pickerValue: v })}
          onOk={v => this.setState({ pickerValue: v })}
        >
          <CustomChildren>Customized children</CustomChildren>
        </Picker>
      </List>);
  }
}








export default class Login extends React.Component{
	static navigationOptions = {
		title:'登录'
	}
	constructor(props){
		super(props);
		this.state = {text:''}
	}
	render(){
		return(
			<ScrollView style={styles.contain}>
				<View style={styles.imageCon}>
					<Image source={require('../assets/images/u266.png')} 
						style={styles.img}/>
				</View>
				<View style={styles.listSty}>
					<Text style={styles.txtSty}>账号：</Text>
					<View style={styles.width}>
						<TextInput
							underlineColorAndroid="transparent"
					        style={styles.textInp}     
					      />
					</View>
				</View>
				<View style={styles.listSty}>
					<Text style={styles.txtSty}>密码：</Text>
					<View style={styles.width}>
						 <TextInput
							underlineColorAndroid="transparent"
					        style={styles.textInp}        
					      />
					</View>
				</View>
				<View style={{alignItems:'center',marginTop:20}}>

					<TouchableOpacity style={styles.touch}>
						<Text style={styles.text}>登录</Text>
					</TouchableOpacity>
				</View>
				<View style={{alignItems:'flex-end',paddingVertical:10,paddingRight:'10%'}}>

					<TouchableOpacity onPress={()=>this.props.navigation.navigate('')}>
						<Text style={{color:gColor.whiteColor}}>还没账号？去注册</Text>
					</TouchableOpacity>
				</View>

				<View  style={{alignItems:'center'}}>
					<View style={{marginTop:20,flexDirection:'row'}}>
						<Text style={{color:gColor.whiteColor}}>第三方登录：</Text>
						<TouchableOpacity>	
							<FontAwesome name='wechat' size={24} color="white" />
						</TouchableOpacity>
					</View>
				</View>
				


				<Test />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	contain: {
		backgroundColor:gColor.importColor,

	},
	imageCon: {
		paddingTop:80,
		paddingBottom:30,
		alignItems:'center',
	},
	img: {
		width:65,
		height:65,
		borderRadius:32.5,
		borderColor: gColor.borderColors,		
	},
	textInp: {
		height: 40, 
		borderColor: gColor.borderColors,
		borderBottomWidth: 1,
		padding: 0,
		// paddingLeft:5,
	},
	listSty: {
		flexDirection:'row',
		marginTop:10,
		justifyContent:'space-between',
		paddingHorizontal:"10%",
	},
	txtSty: {
		marginLeft:10,
		paddingVertical:20,
		fontSize:gFontSize.bigText,
		color:gColor.borderColors
	},
	width: {
		width:gScreen.width/1.5,
		marginLeft:10
	},
	touch: {
		width:'80%',
		justifyContent:'center',
		backgroundColor:gColor.whiteColor,
		borderRadius:5,
	},
	text: {
		textAlign:'center',
		paddingVertical:10,
		fontSize:gFontSize.bigText,
		color:gColor.importColor,
		
	}
})