import React from 'react'
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
import { colors } from '../helpers/colors'
import { FlatGrid } from 'react-native-super-grid'

const Home = ({ navigation }) => {
    const dataHome = [
        {
            name: 'Pokedex',
            color: colors.grass,
        },
        {
            name: 'Moves',
            color: colors.fire,
        },
        {
            name: 'Abilities',
            color: colors.water,
        },
        {
            name: 'Items',
            color: colors.electric
        },
        {
            name: 'Location',
            color: colors.poison
        },
        {
            name: 'Type charts',
            color: colors.dark
        }
    ]
    const renderSelected = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(item.name)} key={index} style={{ width: '100%', height: 60, backgroundColor: item.color, borderRadius: 20 }}>
                <ImageBackground source={{ uri: 'https://i.imgur.com/26mndC3.png' }} resizeMode='cover' style={{ flex: 1, justifyContent: 'center',borderRadius:20 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22, paddingLeft: 10 }}>{item.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 0.9, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: colors.fire, justifyContent: 'flex-end' }}>
                <View style={{ paddingBottom: '3%', paddingLeft: 10 }}>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', textAlign: 'left' }}>Que Pokémon estás buscando?</Text>
                </View>
                <View style={{ paddingBottom: '3%', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 30,
                            height: 50,
                            width: '95%'
                        }}
                        placeholder='Search Pokemon, Move, Ability, etc'
                        placeholderTextColor='grey'

                    />
                </View>
            </View>
            <View style={{ flex: 1.1, backgroundColor: 'white' }}>

                <FlatGrid
                    style={{
                        paddingTop: 20
                    }}
                    scrollEnabled={false}
                    itemDimension={120}
                    data={dataHome}
                    spacing={10}
                    renderItem={(item, index) => renderSelected(item, index)}
                />
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    
})