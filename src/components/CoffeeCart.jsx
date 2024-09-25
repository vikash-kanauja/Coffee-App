import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../utils/colors';

const CoffeeCart = ({cart}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('detailItem')}>
      <View style={styles.cartContainer}>
        <View style={styles.cartImage}>
          <Image source={cart.image} style={styles.img} resizeMethod="cover" />
        </View>
        <View style={styles.details}>
          <View>
            <Text style={styles.title}>{cart.title}</Text>
          </View>
          <View>
            <Text style={styles.desc}>{cart.type}</Text>
          </View>
          <View style={styles.priceContainer}>
            <View>
              <Text style={styles.price}>{`${cart.prices[0].currency} ${cart.prices[0].price}`}</Text>
            </View>
            <View style={styles.plusBtnContainer}>
              <TouchableOpacity>
                <Feather name="plus" color={colors.white} style={styles.plus} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CoffeeCart;

const styles = StyleSheet.create({
  cartContainer: {
    width: 170,
    height: 'auto',
    backgroundColor: colors.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
  cartImage: {
    padding: 10,
  },
  img: {
    width: '100%',
    height: 130,
    borderRadius: 15,
  },
  details: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontFamily:'Sora-SemiBold',
    color: colors.black,
    fontWeight: '500',
  },
  desc: {
    fontSize: 15,
    fontFamily:'Sora-SemiBold',
    color: colors.secondary,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
  price: {
    fontFamily:'Sora-SemiBold',
    fontSize: 22,
    color: colors.black,
    fontWeight: '600',
  },
  plusBtnContainer: {
    width: 35,
    height: 35,
    backgroundColor: colors.brown,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusBtn: {
    height: '100%',
    backgroundColor: 'black',
  },
  plus: {
    fontSize: 20,
    fontFamily:'Sora-SemiBold',
    fontWeight: '500',
  },
});
