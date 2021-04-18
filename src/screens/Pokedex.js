import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Animated, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Poke from '../../api/poke.json'
import { FlatGrid } from 'react-native-super-grid';

const colors = {
    ghost: "rgb(185,222,224)",
    dark: "rgb(33,31,31)",
    electric: 'rgb(255,206,75)',
    normal: 'rgb(165,173,176)',
    fire: 'rgb(251,108,108)',
    psychic: "rgb(242,81,132)",
    flying: "rgb(182,99,87)",
    steel: "rgb(158,158,158)",
    poison: 'rgb(124,83,140)',
    dragon: "rgb(156,102,110)",
    water: 'rgb(118,189,254)',
    ice: "rgb(97,208,229)",
    rock: "rgb(182,143,73)",
    fighting: "rgb(68,55,55)",
    grass: 'rgb(79,213,183)',
    bug: 'rgb(131,168,81)',
    ground: "rgb(145,102,69)",
    fairy: "rgb(251,199,244)",
}
const Main = ({navigation}) => {
  

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
//Poke.filter(x => x.type[0] === 'fire' | x.type[1] === 'fire')
    const what = (item) => {
        const exp = item.type.find(x => x === 'grass' | x === 'fire' | x === 'water' | x === 'bug' | x === 'poison' | x === 'electric' | x === 'ground' | x === 'fairy' |
            x === 'fighting' | x === 'rock' | x === 'ice' | x === 'steel' | x === 'flying' | x === 'psychic' | x === 'dark' | x === 'ghost' | x === 'dragon')
        switch (exp) {
            case 'grass':
                return colors.grass
            case 'fire':
                return colors.fire
            case 'water':
                return colors.water
            case 'bug':
                return colors.bug
            case 'poison':
                return colors.poison
            case 'electric':
                return colors.electric
            case 'fairy':
                return colors.fairy
            case 'fighting':
                return colors.fighting
            case 'dark':
                return colors.dark
            case 'dragon':
                return colors.dragon
            case 'flying':
                return colors.flying
            case 'ghost':
                return colors.ghost
            case 'ground':
                return colors.ground
            case 'ice':
                return colors.ice
            case 'rock':
                return colors.rock
            case 'steel':
                return colors.steel
            case 'psychic':
                return colors.psychic
            default:
                return colors.normal
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 15, }}>
                <Text style={{ fontSize: hp(4), fontWeight: 'bold', color: '#222' }}>Pokedex</Text>
            </View>
            <FlatGrid
                itemDimension={hp(18)}
                data={Poke.slice(0,100)}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item, index }) => (
                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate('DetailsPokemons', {setindex:index})}>
                        <ImageBackground key={index} borderRadius={20} resizeMode='cover' key={index} source={{ uri: 'https://i.imgur.com/26mndC3.png' }} style={[styles.itemContainer, {
                            backgroundColor: what(item)
                        }]}>
                            <View style={{ flexDirection: 'row', height: '100%' }}>
                                <View style={{ width: wp(26), paddingTop: hp(3), paddingLeft: hp(1), }}>
                                    <Text style={styles.itemName}>{item.ThumbnailAltText}</Text>
                                    {
                                        item.type.map(x => {
                                            return (
                                                <View style={{ marginLeft: hp(1), marginVertical: hp(0.2), borderRadius: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: wp(14), height: hp(2.3), backgroundColor: 'rgba(255,255,255,0.4)', textTransform: 'capitalize', fontSize: hp(1.4) }}>
                                                    <Text style={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', textTransform: 'capitalize', fontSize: hp(1.33) }}>{x}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{ width: wp(20), justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ color: 'rgba(0,0,0,0.15)', fontSize: hp(1.5), fontWeight: 'bold', marginBottom:hp(1) }}>{`#${item.number}`}</Text>
                                    <Image
                                        style={{
                                            width: hp(10),
                                            height: hp(10),
                                        }}
                                        source={{ uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${item.number}.png` }}
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
    },
});