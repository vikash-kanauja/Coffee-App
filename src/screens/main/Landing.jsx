import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';
const Landing = () => {
  navigation = useNavigation();
  return (
    <View style={styles.mainSection}>
      <View style={styles.bannerImage}>
        <ImageBackground
          source={require('../../assets/images/onboarding.png')}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.bannerTitle}>
            Fall in Love with{'\n'} Coffee in Blissful Delight!
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.bannerText}>
            Welcome to our cozy coffee corner, where every cup is a delightful
            for you.
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  mainSection: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  bannerImage: {
    height: '70%',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: 30,
    height: '100%',
    padding: 30,
    backgroundColor: colors.black,
  },
  bannerTitle: {
    position: 'absolute',
    bottom: -75,
    left: 50,
    zIndex: 1,
    textAlign: 'center',
    color: colors.white,
    fontSize: 38,
    fontFamily: 'Sora-Medium',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 55,
  },
  bannerText: {
    color: colors.secondary,
    fontSize: 17,
    fontFamily: 'Sora-semiBold',
    textAlign: 'center',
    lineHeight: 25,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  btnContainer: {
    width: '100%',
    alignSelf: 'center',
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.brown,
    overflow: 'hidden',
  },
  customButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 55,
  },
  buttonText: {
    color: colors.white,
    fontFamily: 'Sora-semiBold',
    fontSize: 18,
    fontWeight: '400',
  },
});
