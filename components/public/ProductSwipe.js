
import React from "react";
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
} from "react-native";
import Carousel from "react-native-looped-carousel";

const propTypes = {
  imageStyle: PropTypes.object,
  imageArray: PropTypes.array,
}


const ProductCarousel = ({
  imageStyle,
  imageArray,
}) => {
  const carouselImages = imageArray.map((item) => (
    <Image 
      key={item.url}
      resizeMode="stretch" 
      source={item.url}
      style={{width: gScreen.width/1.5, height: gScreen.width/1.5,}} 
    />
  ))
  return (
    <Carousel
      delay={2000}
      style={{width: gScreen.width/1.5, height: gScreen.width/1.5,marginLeft:gScreen.width/6}}
      autoplay = {false}
      bullets={true}
      bulletStyle={{top: 8}}
      chosenBulletStyle={{top: 8}}
    >
       {carouselImages}
    </Carousel>
  )
}

ProductCarousel.propTypes = propTypes;
ProductCarousel.defaultProps = {
  imageArray: [],
}

export default ProductCarousel;