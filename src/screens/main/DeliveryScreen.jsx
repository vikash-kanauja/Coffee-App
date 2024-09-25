import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/colors';

const DeliveryScreen = () => {
  return (
    <View style={styles.container}>
      {/* Map Section */}
      <View style={styles.mapContainer}>
        <View style={styles.locationLogo}>
          <View style={styles.mapLogoConta}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/logos/arrow_left.png')}
                style={styles.mapLogo}
                resizeMode="cover"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.mapLogoConta}>
            <Image
              source={require('../../assets/logos/gps.png')}
              style={styles.mapLogo}
              resizeMode="cover"
            />
          </View>
        </View>
        <Image
          source={require('../../assets/images/maps.png')}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </View>

      {/* Delivery Information */}
      <View style={styles.driverDetail}>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator}></View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.timeText}>10 minutes left</Text>
          <Text style={styles.deliveryAddress}>
            Delivery to{' '}
            <Text style={{color: colors.black, fontWeight: '800'}}>
              Jl. Kpg Sutoyo
            </Text>{' '}
          </Text>
        </View>

        {/* Delivery Status */}

        <View style={styles.loadingContainer}>
          <View style={styles.loading}></View>
          <View style={styles.loading}></View>
          <View style={styles.loading}></View>
          <View style={[styles.loading, styles.last]}></View>
        </View>

        <View style={styles.statusContainer}>
          <View style={styles.deliverImage}>
            <Image source={require('../../assets/logos/delivery.png')} />
          </View>
          <View>
            <Text style={styles.statusTitle}>Delivered your order</Text>
            <Text style={styles.statusDescription}>
              We will deliver your goods to you in {'\n'}the shortest possible
              time.
            </Text>
          </View>
        </View>

        {/* Courier Information */}
        <View style={styles.courierContainer}>
          <View style={styles.deliveryBoy}>
            <Image
              source={require('../../assets/images/delivery_boy.png')}
              style={styles.courierImage}
            />
            <View style={styles.courierDetails}>
              <Text style={styles.courierName}>Brooklyn Simmons</Text>
              <Text style={styles.courierRole}>Personal Courier</Text>
            </View>
          </View>
          <View style={styles.callContainer}>
            <Image
              source={require('../../assets/logos/call.png')}
              style={styles.call}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapContainer: {
    height: '60%',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',

    position: 'relative',
  },
  locationLogo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
    position: 'absolute',
    top: 50,
    zIndex: 10,
  },
  mapLogoConta: {
    backgroundColor: colors.gray,
    width: 50,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  mapLogo: {},
  mapImage: {
    height: '100%',
    width: '100%',
  },
  infoContainer: {
    padding: 10,
  },
  timeText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'center',
  },
  loadingContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 10,
    padding: 20,
    marginBottom: 10,
  },
  loading: {
    width: '22%',
    height: 5,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  last: {
    backgroundColor: colors.gray,
  },
  deliveryAddress: {
    fontSize: 14,
    color: colors.black,
    textAlign: 'center',
    marginTop: 4,
  },
  statusContainer: {
    padding: 10,
    width: '90%',
    margin: 'auto',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.gray,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  deliverImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  statusDescription: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  courierContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },
  deliveryBoy: {
    flexDirection: 'row',
  },
  courierImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
  },
  courierDetails: {
    marginLeft: 16,
  },
  courierName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
  },
  courierRole: {
    fontSize: 15,
    color: '#888',
  },
  driverDetail: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  indicatorContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    width: '15%',
    height: 5,
    borderRadius: 3,
    margin: 10,
    backgroundColor: colors.gray,
  },
  callContainer: {
    padding: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  call: {
    width: 25,
  },
});

export default DeliveryScreen;
