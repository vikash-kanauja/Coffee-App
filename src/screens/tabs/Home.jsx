import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../utils/colors';
import SearchBox from '../../components/SearchBox';
import PromoCart from '../../components/PromoCart';
import CoffeeCart from '../../components/CoffeeCart';
import coffeeMenu from '../../jsonData/coffeeCartJson';
import CoffeeData from '../../jsonData/coffeeData';
import Categories from '../../components/Categories';
import {Picker} from '@react-native-picker/picker';

// Function to get categories based on coffee data
const getCategoriesFromData = data => {
  let temp = {};
  // data.forEach(item => {
  //   if (!temp[item.category]) {
  //     temp[item.category] = 1;
  //   }
  // });

  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].title] == undefined) {
      temp[data[i].title] = 1;
    } else {
      temp[data[i].title]++;
    }
  }
  let categoryList = Object.keys(temp);
  categoryList.unshift('All coffee'); // Add 'All coffee' option at the beginning
  return categoryList;
};
const Home = () => {
  const [selectedValue, setSelectedValue] = useState('Bilzen, Tan jungbali');
  const [coffeeList, setCoffeeList] = useState(coffeeMenu);
  const [categories, setCategories] = useState(
    getCategoriesFromData(coffeeMenu),
  );
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffe, setSortedCoffe] = useState([]);

  // Filter coffee list based on category
  useEffect(() => {
    setSortedCoffe(getFilteredCoffeeList(categoryIndex.category, coffeeList));
  }, [categoryIndex, coffeeList]);

  // Filter coffee based on category selection
  const getFilteredCoffeeList = (category, coffeeList) => {
    console.log(category,coffeeList);
    
    if (category === 'All coffee') return coffeeList;
    return coffeeList.filter(item => item.title === category);
  };

  // Handler to update selected category
  const handleCategorySelect = (index, category) => {
    console.log("OnClick");
    
    setCategoryIndex({index, category});
  };

  return (
    <SafeAreaView style={styles.containerpp}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.homeSection}>
          <View style={styles.topSection}>
            <Text style={styles.locationTxt}>Location</Text>
            <View style={styles.selectBox}>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedValue}
                  style={styles.picker}
                  onValueChange={itemValue => setSelectedValue(itemValue)}>
                  <Picker.Item
                    label="Bilzen, Tan jungbali"
                    value="Bilzen, Tan jungbali"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="JavaScript"
                    value="javascript"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Python"
                    value="python"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="C++"
                    value="cpp"
                    style={styles.pickerItem}
                  />
                </Picker>
              </View>
            </View>
            <SearchBox />
            <View style={styles.promo}>
              <PromoCart />
            </View>
          </View>
          <View style={styles.bottomSection}>
            {/* Category List */}
            <Categories
              categories={categories}
              handleCategorySelect={handleCategorySelect}
              selectedCategory={categoryIndex.category}
            />
            {/* Coffee Cart */}
            <View style={styles.cartMain}>
              {sortedCoffe.length > 0 ? (
                sortedCoffe.map((cart, index) => (
                  <CoffeeCart key={index} cart={cart} />
                ))
              ) : (
                <Text>No items in the cart</Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeSection: {
    flex: 1,
  },
  topSection: {
    height: 340,
    backgroundColor: colors.black,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  bottomSection: {
    paddingTop: 30,
    marginTop: 50,
  },
  locationTxt: {
    color: colors.secondary,
    fontSize: 16,
    fontFamily: 'Sora-SemiBold',
    margin: 10,
  },
  selectBox: {
    color: colors.gray,
    fontWeight: '600',
  },
  promo: {
    width: '100%',
    position: 'absolute',
    bottom: -80,
    alignSelf: 'center',
  },
  cartMain: {
    width: '100%',
    gap: 10,
    rowGap: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
  },
  pickerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    paddingLeft: 0,
  },
  picker: {
    height: 50,
    width: 240,
  },
  pickerItem: {
    fontSize: 20,
  },
});
