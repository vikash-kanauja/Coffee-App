import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../utils/colors';
const DetailItemScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: colors.background, flex: 1}}>
      <ScrollView>
        <View style={styles.detailContainer}>
          <View style={styles.detailHeader}>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons style={styles.detailTxt} name="arrow-back-ios" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.detailTxt}>Detail</Text>
            </View>
            <View>
              <Fontisto
                name="heart-alt"
                style={{color: colors.black, fontSize: 20}}
              />
            </View>
          </View>

          <View style={styles.cartDeatils}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../../assets/images/image.png')}
                resizeMode="cover"
                style={{width: '100%', borderRadius: 15}}
              />
            </View>
            <View style={styles.cartTitle}>
              <Text style={styles.titleTxt}>Caffe Mocha</Text>
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusTxt}>Ice/Hot</Text>
              <View style={styles.statusLogoContainer}>
                <View style={[styles.statusLogo]}>
                  <Image source={require('../../assets/logos/delivery.png')} />
                </View>
                <View style={[styles.statusLogo]}>
                  <Image source={require('../../assets/logos/bean.png')} />
                </View>
                <View style={[styles.statusLogo]}>
                  <Image source={require('../../assets/logos/milk.png')} />
                </View>
              </View>
            </View>
            <View style={styles.rating}>
              <MaterialIcons
                name="star-rate"
                style={{color: '#fbbe21', fontSize: 30}}
              />
              <Text style={styles.ratingTxt}>
                4.8{' '}
                <Text style={{fontSize: 15, color: colors.secondary}}>
                  (230)
                </Text>
              </Text>
            </View>
            <View style={styles.line} />

            <View style={styles.discription}>
              <Text style={styles.discriptionTitle}>Description</Text>
              <Text style={styles.discriptionTxt}>
                A cappuccino is an approximately 150 ml (5 oz) beverage, with 25
                ml of espresso coffee and 85ml of fresh milk the fo..
                <Text style={{color: colors.brown, fontWeight: 600}}>
                  Read More
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.sizeContainer}>
            <Text
              style={{
                fontSize: 18,
                color: colors.black,
                fontWeight: 400,
                fontFamily: 'Sora-Medium',
              }}>
              Size
            </Text>
            <View style={styles.size}>
              <View style={styles.sizeBox}>
                <Text
                  style={{color: colors.black, fontSize: 17, fontWeight: 400}}>
                  S
                </Text>
              </View>
              <View style={styles.sizeBox}>
                <Text
                  style={{color: colors.black, fontSize: 17, fontWeight: 400}}>
                  M
                </Text>
              </View>
              <View style={styles.sizeBox}>
                <Text
                  style={{color: colors.black, fontSize: 17, fontWeight: 400}}>
                  L
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.priceContainer}>
            <View style={styles.priceMain}>
              <View style={styles.priceBox}>
                <Text
                  style={{
                    fontSize: 18,
                    color: colors.secondary,
                    fontWeight: 700,
                  }}>
                  Price
                </Text>
                <Text
                  style={{fontSize: 23, color: colors.brown, fontWeight: 700}}>
                  $4.53
                </Text>
              </View>
              <View style={styles.buyBtnContainer}>
                <TouchableOpacity
                  style={styles.buyBtn}
                  onPress={() => navigation.navigate('order')}>
                  <Text style={styles.btnText}>Buy Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailItemScreen;

const styles = StyleSheet.create({
  detailContainer: {},
  detailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 20,
  },
  detailTxt: {
    fontSize: 23,
    fontFamily: 'Sora-Medium',
    color: colors.black,
  },
  cartDeatils: {
    margin: 20,
  },
  imageContainer: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  cartTitle: {
    marginTop: 20,
  },
  titleTxt: {
    fontSize: 20,
    fontFamily: 'Sora-Medium',
    fontWeight: '500',
    color: colors.black,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  statusTxt: {
    fontSize: 15,
    color: colors.secondary,
  },
  statusLogo: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.backgroundGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    gap: 5,
  },
  ratingTxt: {
    fontSize: 20,
    color: colors.black,
    fontWeight: '700',
  },
  line: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  discription: {},
  discriptionTitle: {
    fontSize: 20,
    fontFamily: 'Sora-Medium',
    color: colors.black,
  },
  discriptionTxt: {
    fontSize: 16,
    color: colors.secondary,
    marginTop: 10,
    lineHeight: 25,
  },
  sizeContainer: {
    marginHorizontal: 20,
  },
  size: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  sizeBox: {
    width: 110,
    height: 45,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  priceContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  priceBox: {},
  buyBtnContainer: {
    width: '60%',
  },
  priceMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buyBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.brown,
    paddingVertical: 12,
    borderRadius: 15,
  },
  btnText: {
    fontSize: 18,
    fontFamily: 'Sora-semiBold',
    color: colors.white,
    fontWeight: '400',
  },
});
