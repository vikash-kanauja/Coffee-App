import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../utils/fonts';
import {colors} from '../utils/colors';

const PromoCart = () => {
  return (
    <View style={styles.promoContainer}>
      <ImageBackground
        source={require('../assets/images/promo_banner.png')}
        resizeMode="cover"
        style={styles.promoImg}>
        <View style={styles.promotxtContainer}>
        <View style={styles.promoBtn}>
            <Text style={styles.promoTxt}>Promo</Text>
        </View>
          <Text style={styles.promoTitle}>Buy one get{'\n'} one FREE</Text>
          
        </View>
      </ImageBackground>
    </View>
  );
};

export default PromoCart;

const styles = StyleSheet.create({
  promoContainer: {
    width: '100%',
    height: 170,
    borderRadius:15,
    overflow:"hidden"
  },
  promoImg: {
    flex: 1,
    justifyContent: 'center',
  },
  promoTitle: {
    fontSize: 38,
    fontFamily: 'Sora-SemiBold',
    color: colors.white,
  },
  promotxtContainer:{
    paddingVertical:10,
    paddingHorizontal:20,
  },
  promoBtn:{
    justifyContent:"center",
    alignItems:'center',
    width:80,
    height:35,
    borderRadius:10,
    textAlign:'center',
    backgroundColor:"#ed5151"
  },
  promoTxt:{
    fontSize:18,
    fontFamily:'Sora-SemiBold',
    fontWeight:'800',
    color:colors.white
  }
});
