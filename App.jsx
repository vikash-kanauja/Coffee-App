import {StyleSheet} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView >
        <AppNavigator />
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
