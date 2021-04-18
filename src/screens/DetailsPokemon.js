import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Animated, ScrollView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';

import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { ViewPager } from 'react-native-viewpager-carousel'
import { color } from 'react-native-reanimated';
import Carousel from 'react-native-snap-carousel';
import Poke from '../../api/poke.json'

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
const DetailsPokemon = ({ navigation }) => {
    const currentIndex = navigation.getParam('setindex')
    console.log(currentIndex);
    const [Pokemon, setPokemon] = useState({})
    const [Cp, setCurrentPokemon] = useState(Poke[currentIndex])

    const RenderProgress = ({ label, stats, }) => (
        <View style={{ flexDirection: 'row', marginVertical: hp(1) }}>
            <View style={{ width: wp(20), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textTransform: 'uppercase' }}>{label ? label : 'label'}</Text>
            </View>
            <View style={{ width: wp(20), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>{stats ? stats : 0}</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Progress.Bar indeterminateAnimationDuration={1000}
                    style={{ height: hp(1) }}
                    color={stats > 10 ? colors.fire : colors.seed}
                    progress={stats ? stats / 100 : 1 / 100}
                    width={wp(55)}
                    borderRadius={0}
                    borderWidth={0}
                    unfilledColor='#eee'
                />
            </View>
        </View>
    )

    const FirstRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: hp(2) }}>
            <RenderProgress label='hp' stats={10} />
            <RenderProgress label='' />
            <RenderProgress />
            <RenderProgress />
            <RenderProgress />
            <RenderProgress />
            <RenderProgress />
            <View style={{ width: wp(100), marginTop: hp(1) }}>
                <Text style={{ fontSize: hp(2.3), fontWeight: 'bold', marginLeft: 10 }}>Type defences</Text>
                <Text style={{ fontSize: hp(1.8), fontWeight: '900', marginLeft: 10, color: 'grey' }}>The effectives of each type on Charmander.</Text>
            </View>
        </View>
    )
    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    )
    const ThreeRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    )
    const FourRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    )
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        three: ThreeRoute,
        four: FourRoute,
    });

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'About' },
        { key: 'second', title: 'Base Stats' },
        { key: 'three', title: 'Evolution' },
        { key: 'four', title: 'Moves' },
    ]);

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

    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{
                        width: hp(29),
                        height: hp(29),
                    }}
                    source={{ uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${item.number}.png` }}
                />
            </View>

        );
    }

    const getIndex = (index) => {
        setCurrentPokemon(Poke[index])
        console.log(Poke[index]);

    }

    return (
        <ScrollView style={{ backgroundColor: what(Cp) }}>
            <View style={{ flex: 1.1 }}>
                <ImageBackground source={{ uri: 'https://i.imgur.com/GfnKKUj.png' }} style={{
                    flex: 1, backgroundColor: what(Cp)
                }}>
                    <View style={{ width: wp(100), height: hp(9), justifyContent: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={()=> navigation.goBack()} style={{ width: '50%', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                            <Icon color='white' name='arrow-left' size={hp(3.5)} style={{ marginLeft: hp(3) }} />
                        </TouchableOpacity>
                        <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Icon color='white' name='heart-outline' size={hp(3.5)} style={{ marginRight: hp(3) }} />
                        </View>
                    </View>
                    <View style={{ width: wp(100), height: hp(11), justifyContent: 'center' }}>
                        <Text style={{ color: '#fff', fontSize: hp(4.7), fontWeight: 'bold', marginLeft: hp(3) }}>{Cp.ThumbnailAltText}</Text>
                        <View style={{ flexDirection: 'row', width: wp(100) }}>
                            <View style={{ width: wp(50), flexDirection: 'row', marginLeft: hp(2) }}>
                                {
                                    Cp.type.map(x => {
                                        return (
                                            <View style={{ marginLeft: hp(1), marginVertical: hp(0.2), borderRadius: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: wp(14), height: hp(2.3), backgroundColor: 'rgba(255,255,255,0.4)', textTransform: 'capitalize', fontSize: hp(1.4) }}>
                                                <Text style={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', textTransform: 'capitalize', fontSize: hp(1.33) }}>{x}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            <View style={{ width: wp(50), alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Text style={{ marginRight: hp(5), color: '#fff', fontSize: hp(1.8), fontWeight: 'bold' }}>{`#${Cp.number}`}</Text>
                            </View>
                        </View>
                    </View>
                    <Carousel
                        firstItem={currentIndex}
                        onSnapToItem={(index) => getIndex(index)}
                        data={Poke.slice(0,100)}
                        renderItem={_renderItem}
                        keyExtractor={(item) => String(item.id)}
                        sliderWidth={wp(100)}
                        itemWidth={wp(100)}
                        enableSnap={true}
                        initialNumToRender={currentIndex +1}
                    />
                </ImageBackground>
            </View>
            <View style={{ flex: 0.9, backgroundColor: 'white', width: '100%', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                <View style={{ width: wp(100), height: hp(80), marginTop: hp(2), alignItems: 'center', backgroundColor: 'red', flexDirection: 'row' }}>
                    <TabView

                        renderTabBar={props => <TabBar
                            indicatorContainerStyle={{
                                backgroundColor: 'white',
                                marginBottom: -6
                            }}
                            labelStyle={{
                                textTransform: 'capitalize',
                                fontWeight: 'bold',
                                fontSize: 12
                            }}
                            contentContainerStyle={{
                                shadowRadius: 0
                            }}
                            inactiveColor='grey'
                            activeColor='#000'
                            indicatorStyle={{
                                backgroundColor: 'blue'
                            }}
                            {...props} />}
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={setIndex}
                        initialLayout={{ width: hp(100) }}
                    />
                </View>
            </View>

        </ScrollView>

    );
}
export default DetailsPokemon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fire
    },
});
