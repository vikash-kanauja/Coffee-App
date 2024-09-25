import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const OrderScreen = () => {
  return (
    <View style={styles.container}>
      {/*Delivery Header*/}
      <View style={styles.orderHeader}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons style={styles.orderTxt} name="arrow-back-ios" />
          </TouchableOpacity>
        </View>
        <View style={{width: '90%', alignItems: 'center'}}>
          <Text style={styles.orderTxt}>Order</Text>
        </View>
      </View>
      {/* Delivery/Pickup Toggle */}
      <View style={styles.deliveryToggle}>
        <TouchableOpacity style={[styles.toggleButton, styles.activeToggle]}>
          <Text style={styles.toggleTextActive}>Deliver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.toggleButton}>
          <Text style={styles.toggleText}>Pick Up</Text>
        </TouchableOpacity>
      </View>

      {/* Delivery Address */}
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Delivery Address</Text>
        <Text style={styles.addressDetails}>Jl. Kpg Sutoyo</Text>
        <Text style={styles.addressSubDetails}>
          Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai
        </Text>
        <View style={styles.addressButtons}>
          <TouchableOpacity style={styles.editButton}>
            <Image source={require('../../assets/logos/edit.png')} />
            <Text style={styles.buttonText}>Edit Address</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton}>
            <Image source={require('../../assets/logos/document.png')} />
            <Text style={styles.buttonText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Order Item */}
      <View style={styles.line} />
      <View style={styles.itemContainer}>
        <Image
          source={require('../../assets/images/image.png')}
          style={styles.itemImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Caffe Mocha</Text>
          <Text style={styles.itemSub}>Deep Foam</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>1</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line2} />

      {/* Discount Section */}
      <View style={styles.discountContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <Image
            source={require('../../assets/logos/order.png')}
            style={styles.rightArrow}
          />
          <Text style={styles.discountText}>1 Discount is Applied</Text>
        </View>
        <Image
          source={require('../../assets/logos/arrow_right.png')}
          style={styles.rightArrow}
        />
      </View>

      {/* Payment Summary */}
      <View style={styles.paymentSummary}>
        <View style={styles.paymentRow}>
          <Text style={styles.summaryTitlt}>Payment Summary</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.summaryText}>Price</Text>
          <Text style={styles.summaryValue}>$4.53</Text>
        </View>
        <View style={styles.paymentRow}>
          <Text style={styles.summaryText}>Delivery Fee</Text>
          <Text style={styles.summaryValue}>
            <Text style={styles.strikeThrough}>$2.00</Text> $1.00
          </Text>
        </View>
      </View>

      {/* Payment Method */}
      <View style={styles.paymentMethod}>
        <View style={styles.paymentMethodTxt}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 15,
            }}>
            <Image
              source={require('../../assets/logos/wallet.png')}
              style={styles.wallet}
            />
            <View>
              <Text style={styles.paymentText}>Cash/Wallet</Text>
              <Text style={styles.walletValue}>$5.53</Text>
            </View>
          </View>
          <Image
            source={require('../../assets/logos/arrow_down.png')}
            style={styles.rightArrow}
          />
        </View>
        {/* Order Button */}
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => navigation.navigate('delivery')}>
          <Text style={styles.orderButtonText}>Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
    marginHorizontal: 10,
  },
  orderTxt: {
    fontSize: 23,
    fontFamily:'Sora-Medium',
    color: colors.black,
  },
  deliveryToggle: {
    backgroundColor: '#EDEDED',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  toggleButton: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: colors.brown,
  },
  toggleText: {
    color: '#555',
    fontSize: 18,
    fontFamily:'Sora-Regular',
  },
  toggleTextActive: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
    fontFamily:'Sora-Regular'
  },
  addressContainer: {
    marginHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  addressTitle: {
    fontSize: 18,
    fontFamily:'Sora-Medium',
    color: colors.black,
    fontWeight: '500',
    marginBottom: 20,
  },
  addressDetails: {
    fontSize: 16,
    color: colors.black,
    // fontWeight: '500',
    fontFamily:'Sora-Medium'
  },
  addressSubDetails: {
    color: '#888',
    fontSize: 14,
    fontFamily:'Sora-Medium',
    marginBottom: 15,
    paddingVertical: 8,
  },
  addressButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  editButton: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  addButton: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  buttonText: {
    color: colors.black,
    fontSize: 14,
    fontFamily:'Sora-Medium',
  },
  line: {
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    width: '80%',
    margin: 'auto',
  },
  line2: {
    borderBottomColor: colors.brown,
    borderBottomWidth: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    // fontWeight: '500',
    fontFamily:'Sora-Medium',
    color: colors.black,
  },
  itemSub: {
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  quantityButton: {
    backgroundColor: colors.white,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  quantityText: {
    fontSize: 20,
    color: colors.black,
    marginHorizontal: 5,
  },
  discountContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.gray,
    marginHorizontal: 30,
    marginVertical: 20,
  },
  discountText: {
    color: colors.black,
    fontSize: 18,
    fontFamily:'Sora-Medium',
    fontWeight: '500',
  },
  rightArrow: {
    width: 15,
    height: 15,
  },
  paymentSummary: {
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  summaryTitlt: {
    color: colors.black,
    fontFamily:'Sora-semiBold',
    fontSize: 18,
    // fontWeight: '500',
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    color: colors.black,
    fontFamily:'Sora-semiBold',
    fontWeight: '500',
    fontSize: 16,
  },
  summaryValue: {
    color: colors.black,
    fontWeight: '400',
    fontSize: 18,
  },
  strikeThrough: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  paymentMethod: {
    backgroundColor: colors.white,
    borderRadius: 8,
    width: '100%',
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  paymentMethodTxt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  wallet: {
    width: 25,
    height: 25,
  },
  paymentText: {
    // fontWeight: '500',
    fontFamily:'Sora-semiBold',
    color: colors.black,
    fontSize: 18,
  },
  walletValue: {
    color: '#D1905D',
  },
  orderButton: {
    backgroundColor: '#D1905D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderRadius: 15,
  },
  orderButtonText: {
    color: '#fff',
    fontWeight: '400',
    fontFamily:'Sora-semiBold',
    fontSize: 18,
  },
});

export default OrderScreen;
