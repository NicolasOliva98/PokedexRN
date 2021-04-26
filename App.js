import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import PokemonsProvider from './src/context/pokemons/Provider'
import Root from './src/routes/index'

export default function App() {
  return (
    <PokemonsProvider>
      <SafeAreaView style={{ flex: 1 }} >
        <StatusBar backgroundColor='transparent' barStyle='dark-content' />
        <Root />
      </SafeAreaView>
    </PokemonsProvider>
  )
}



