import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/main/Main';

const HomeStackNavigator = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
    {/* Home screen with product list */}
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: 'Product List' }}
    />
  </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})