import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {colors} from '../utils/colors';

const SearchBox = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchBox}>
        {/*<Icon name="search" size={20} color="#888" style={styles.iconStyle} />*/}
        <View style={{padding: 5}}>
          <Image source={require('../assets/logos/search.png')} />
        </View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Search coffee"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.filterBtn}>
        <TouchableOpacity>
          <Image
            source={require('../assets/logos/filter_logo.png')}
            style={styles.filterImg}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    // backgroundColor:'pink'
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: colors.lightBlack,
    borderRadius: 15,
    padding: 5,
    marginVertical: 20,
    alignItems: 'center',
    width: '78%',
  },
  iconStyle: {
    marginRight: 10, // Space between icon and input text
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
  },
  filterBtn: {
    backgroundColor: colors.brown,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: 60,
    height: 60,
    padding: 5,
  },
  filterImg: {
    // width:50,
    // height:50,
  },
});

export default SearchBox;
