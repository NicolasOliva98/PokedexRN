import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Animated, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {ActiveColor, colors, Typetras} from '../helpers/colors'
import { FlatGrid } from 'react-native-super-grid';
import Poke from '../../api/poke.json'

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
                        <ImageBackground key={item.name} borderRadius={20} resizeMode='cover' source={{ uri: 'https://i.imgur.com/26mndC3.png' }} style={[styles.itemContainer, {
                            backgroundColor: ActiveColor(item)
                        }]}>
                            <View style={{ flexDirection: 'row', height: '100%' }}>
                                <View style={{ width: wp(26), paddingTop: hp(3), paddingLeft: hp(1), }}>
                                    <Text style={styles.itemName}>{item.ThumbnailAltText}</Text>
                                    {
                                        item.type.map((x,i) => {
                                            return (
                                                <View key={i} style={{ marginLeft: hp(1), marginVertical: hp(0.2), borderRadius: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: wp(14), height: hp(2.3), backgroundColor: 'rgba(255,255,255,0.4)', textTransform: 'capitalize', fontSize: hp(1.4) }}>
                                                    <Text style={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', textTransform: 'capitalize', fontSize: hp(1.33) }}>{Typetras(x)}</Text>
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