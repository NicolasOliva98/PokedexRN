import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Animated, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ActiveColor, colors, Typetras } from '../helpers/colors'
import { FlatGrid } from 'react-native-super-grid';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import Poke from '../../api/poke.json'

const Main = ({ navigation }) => {

    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg

    const types = {
        ghost: "Fantasma",
        dark: "Siniestro",
        electric: "Eléctrico",
        normal: "Normal",
        fire: "Fuego",
        psychic: "Psíquico",
        flying: "Volador",
        steel: "Acero",
        poison: "Veneno",
        dragon: "Dragón",
        water: "Agua",
        ice: "Hielo",
        rock: "Roca",
        fighting: "Lucha",
        grass: "Planta",
        bug: "Bicho",
        ground: "Tierra",
        fairy: "Hada",
    }
    const url = (item) => `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${item.number}.png`
    const uri = (item) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`
    //Poke.filter(x => x.type[0] === 'fire' | x.type[1] === 'fire')

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{height:hp(20)}}>
                <ImageBackground resizeMode='cover' source={require('../../assets/tocard2.png')} style={{width:'100%', height:hp(39.4), position:'absolute', top:-115, }}/>
                    <View style={{ width: wp(100), height: hp(9), justifyContent: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '50%', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                            <Icon color='black' name='arrow-left' size={hp(3.5)} style={{ marginLeft: hp(3) }} />
                        </TouchableOpacity>
                        <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Icon color='black' name='heart-outline' size={hp(3.5)} style={{ marginRight: hp(3) }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', paddingLeft: 15 }}>
                        <Text style={{ fontSize: hp(4), fontWeight: 'bold', color: '#222' }}>Pokedex</Text>
                    </View>
                         
            </View>
            <FlatGrid
                itemDimension={hp(18)}
                data={Poke.slice(0, 100)}
                // staticDimension={300}
                // fixed
                style={{
                    borderRadius: 20
                }}
                spacing={hp(1.1)}
                renderItem={({ item, index }) => (
                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('DetailsPokemons', { setindex: index, _id: item.id })}>
                        <ImageBackground key={item.name} borderRadius={20} resizeMode='cover' source={{ uri: 'https://i.imgur.com/26mndC3.png' }} style={[styles.itemContainer, {
                            backgroundColor: ActiveColor(item),
                        }]}>
                            <View style={{ flexDirection: 'row', height: '100%' }}>
                                <View style={{ width: wp(26), paddingTop: hp(3), paddingLeft: hp(1), alignItems: 'flex-start' }}>
                                    <Text style={styles.itemName}>{item.ThumbnailAltText}</Text>
                                    {
                                        item.type.map((x, i) => {
                                            return (
                                                <View key={i} style={{ marginLeft: hp(1), marginVertical: hp(0.2), borderRadius: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: wp(14), height: hp(2.3), backgroundColor: 'rgba(255,255,255,0.4)', textTransform: 'capitalize', fontSize: hp(1.4) }}>
                                                    <Text style={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', textTransform: 'capitalize', fontSize: hp(1.33) }}>{x}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{ width: wp(20), justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'rgba(0,0,0,0.15)', fontSize: hp(1.5), fontWeight: 'bold', marginBottom: hp(1) }}>{`#${item.number}`}</Text>
                                    <Image
                                        style={{
                                            width: hp(10.4),
                                            height: hp(10.4),
                                        }}
                                        source={{ uri: url(item) }}
                                    />
                                </View>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
            />
        </View>


    );
}
export default Main;


const styles = StyleSheet.create({
    gridView: {
        flex: 1,
    },
    itemContainer: {
        borderRadius: 20,
        height: hp(15),
    },
    itemName: {
        fontSize: hp(1.8),
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
});