import React from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import {COFFEE_CATEGORIES} from '../utils/constants';
import {colors} from '../utils/colors';

const renderItem = ({item}) => (
  <TouchableOpacity style={styles.categorie}>
    <Text style={styles.categorieTxt}>{item.name}</Text>
  </TouchableOpacity>
);

const Categories = ({ categories, handleCategorySelect, selectedCategory }) => (
  // <FlatList
  //   horizontal={true}
  //   data={COFFEE_CATEGORIES}
  //   contentContainerStyle={{
  //     gap:20,
  //     marginVertical:20
  //   }}
  //   renderItem={renderItem}
  //   keyExtractor={item => item.id}
  // />

  // <TouchableOpacity style={styles.categorie} onPress={() => {}}>
  //            <Text style={styles.categorieTxt}>{item}</Text>
  //        </TouchableOpacity>
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical:30}}>
    {categories.map((item, index) => {
      return (
        <View key={index} style={styles}>
          <TouchableOpacity
            style={{
              backgroundColor: '#f5f5f5',
              padding: 8,
              borderRadius: 8,
              marginRight: 10,
              // padding: 10,
              backgroundColor: selectedCategory === item ? 'orange' : '#ddd',
            }}
            onPress={() => handleCategorySelect(index, item)}>
            <Text
              style={styles.categorieTxt}>
              {item}
            </Text>
          </TouchableOpacity>
        
        </View>

        
      );
    })}
  </ScrollView>
);

export default Categories;

const styles = StyleSheet.create({
  categorie: {
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 8,
  },
  categorieTxt: {
    color: colors.black,
    fontFamily: 'Sora-Regular',
    fontWeight: '400',
    fontSize: 15,
    // fontWeight: selectedCategory === item ? 'bold' : 'normal',
  },
});
