import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../screens/main/Landing';
import Main from '../screens/main/Main';
import OrderScreen from '../screens/main/OrderScreen';
import DetailItemScreen from '../screens/main/DetailItemScreen';
import DeliveryScreen from '../screens/main/DeliveryScreen';

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false, headerTitle: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false, headerTitle: false}}
      />
      {/* Product Details screen */}
      <Stack.Screen
        name="order"
        component={OrderScreen}
        options={{headerShown: false, headerTitle: false}}
      />

      {/* Another nested screen */}
      <Stack.Screen
        name="detailItem"
        component={DetailItemScreen}
        options={{headerShown: false, headerTitle: false}}
      />
      <Stack.Screen
        name="delivery"
        component={DeliveryScreen}
        options={{headerShown: false, headerTitle: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
