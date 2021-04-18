import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, StatusBar } from 'react-native';
import Root from './src/routes/index'

//forceInset = {{ top: 'always', bottom: 'always' }}
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar backgroundColor='transparent' barStyle='dark-content'  />
      <Root />
    </SafeAreaView>

  )
}



