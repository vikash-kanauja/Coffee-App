import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainStack from './MainStck';
import { NavigationContainer } from '@react-navigation/native';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      
        <MainStack />
      
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
