import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';

import { corPrimaria } from '../UI/variaveis';

const ENTRIES1 = [
  {
    title: 'Massas',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://diaonline.ig.com.br/wp-content/uploads/2019/07/11-restaurantes-para-comer-deliciosas-massas-em-brasilia.jpeg',
  },
  {
    title: 'Salgados',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://manealimentos.com.br/wp-content/uploads/2020/10/salgados-congelados.png',
  },
  {
    title: 'Sobremesas',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://www.sabornamesa.com.br/media/k2/items/cache/94c8c0da1dbcc923a173d22dbc0b5d61_XL.jpg',
  },
  {
    title: 'Fast Food',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://www.selecoes.com.br/wp-content/uploads/2018/11/selection-of-american-food-picture-id931308812-760x450.jpg',
  },
  {
    title: 'Vegan',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://pbagora.s3.amazonaws.com/2021/05/09001936/veganismo-1-786x500.jpg',
  },
];
const { width: screenWidth } = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const renderItem = ({ item, index }, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{ uri: item.illustration }}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.8}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <Carousel
      ref={carouselRef}
      sliderWidth={screenWidth}
      sliderHeight={screenWidth}
      itemWidth={screenWidth - 10}
      data={entries}
      renderItem={renderItem}
      hasParallaxImages={true}
    />
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  item: {
    flex:1,
    flexDirection:'column-reverse',
    width: screenWidth - 10,
    height: screenWidth - 170,
    marginVertical: 5,
  },
  imageContainer: {
    flex:1,
    flexDirection:'row',
    backgroundColor: 'black',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  title: {
    position: 'absolute',
    textAlign:'center',
    textAlignVertical:'center',
    color: 'white',
    fontSize: 25,
    height: 60,
    backgroundColor: 'rgba(38, 38, 38, 0.5)',
    width: '100%',
    fontFamily: 'MontserratSemiBold',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});