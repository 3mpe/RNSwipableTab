import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native'

import { GestureHandlerRootView } from "react-native-gesture-handler";

import ExampleTabBar from './src/components/ExampleTabBar';
import SwipeHandler from './src/components/SwipeHandler';


const tabList = [
  'Tab - 0',
  'Tab - 1',
  'Tab - 2',
  'Tab - 3'
]

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const onSwipeNext = () => {
    const nextTab = tabIndex + 1;
    const maxLength = tabList.length - 1;
    setTabIndex(nextTab > maxLength ? 0 : nextTab);
  }
  const onSwipePrevious = () => {
    const prevTab = tabIndex - 1;
    const minLength = 0;
    const maxLength = tabList.length - 1;
    setTabIndex(prevTab < minLength ? maxLength : prevTab);
  }
  const onChangeTab = (tabIndex) => {
    console.log(tabList.length, tabIndex);
    setTabIndex(tabIndex);
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <SwipeHandler onSwipeNext={onSwipeNext} onSwipePrevious={onSwipePrevious}>
        <ExampleTabBar currentTab={tabIndex} tabList={tabList} onChangeTab={onChangeTab} />
        <StatusBar style="auto" />

        <Text> Current Tab {tabIndex} </Text>
      </SwipeHandler>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1 }
});


