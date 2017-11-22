import React, {Component} from "react";
import {
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Carousel, } from "antd-mobile";

export default class ProductCarousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <View style={{width: gScreen.width/1.5, height: gScreen.width/1.5}}>
          <Carousel
            dots={true}
                autoplay={true}
                infinite
                selectedIndex={1}
              >
                {this.props.data.map(ii => (
                    <TouchableOpacity key={ii}>
                      <Image
                        source={{uri: `https://zos.alipayobjects.com/rmsportal/${ii}.png`}}
                        style={{width: gScreen.width/1.5, height: gScreen.width/1.5}}
                      />
                    </TouchableOpacity>
                ))}
              </Carousel> 
        </View>
            
      </View>
    );
  }
}