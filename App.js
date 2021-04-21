import React from 'react';
import {SafeAreaView, StatusBar } from 'react-native';
import Root from './src/routes/index'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar backgroundColor='transparent' barStyle='dark-content'  />
      <Root />
    </SafeAreaView>

  )
}



