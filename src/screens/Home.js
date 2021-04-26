import React, { useContext, useEffect } from 'react'
import { View, Text, TextInput, ImageBackground, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FlatGrid } from 'react-native-super-grid'
import Icon from '@expo/vector-icons/Ionicons'
import { colors } from '../helpers/colors'

import PokemonContext from '../context/pokemons'

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
        color: colors.dragon
    }
]
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/898.png
const Home = ({ navigation }) => {

    const { getContext, Moves, pokemons, loading } = useContext(PokemonContext)
  
    useEffect(() => {
        getContext()
    }, [])

    useEffect(() => {
        console.log(Moves);
    }, [loading])


    const renderSelected = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate(item.name)} key={index} style={{ width: '100%', height: hp(8.5), backgroundColor: item.color, borderRadius: 20 }}>
                <ImageBackground source={require('../../assets/tocard.png')} resizeMode='cover' style={{ flex: 1, justifyContent: 'center', borderRadius: 20 }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: hp(2.4), paddingLeft: 10 }}>{item.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.containerMain}>
            {
                loading ?
                    <View style={styles.containerMain}>
                        <ActivityIndicator color='black' size='large' />
                        <Text>Cargando datos...</Text>
                    </View>
                    :
                    <>
                        <View style={styles.containerTop}>
                            <View style={{ paddingBottom: '3%', paddingLeft: 10 }}>
                                <Text style={styles.TextMain}>Que Pokémon estás Buscando?</Text>
                            </View>
                            <View style={{ paddingBottom: '3%', justifyContent: 'center', alignItems: 'center' }}>
                                <TextInput
                                    style={styles.Input}
                                    placeholder='Search Pokemon, Move, Ability, etc'
                                    placeholderTextColor='grey'
                                />
                                <Icon name='search' size={28} style={styles.IconInput} />
                            </View>
                        </View>
                        <View style={styles.ContainerBottom}>
                            <FlatGrid
                                style={{
                                    paddingTop: 20
                                }}
                                scrollEnabled={false}
                                itemDimension={hp(18)}
                                data={dataHome}
                                spacing={10}
                                renderItem={(item, index) => renderSelected(item, index)}
                            />
                        </View>
                    </>
            }

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTop: {
        flex: 0.9,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: colors.fire,
        justifyContent: 'flex-end'
    },
    ContainerBottom:{
        flex: 1.1,
        backgroundColor: 'white'
    },
    TextMain: {
        color: 'white',
        fontSize: hp(4.3),
        fontWeight: 'bold',
        textAlign: 'left'
    },
    Input: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingLeft: 40,
        height: 50,
        width: '95%'
    },
    IconInput: {
        color: 'black',
        position: 'absolute',
        top: 10,
        left: 18,
        bottom: 0
    }

})