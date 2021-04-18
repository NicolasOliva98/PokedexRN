import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Animated, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';
import Paralax from './Main'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { ViewPager } from 'react-native-viewpager-carousel'
import { color } from 'react-native-reanimated';
import Char from './examples/resp'
import Carousel from 'react-native-snap-carousel';
import Poke from './../api/poke.json'
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
const Main = () => {
    const [Pokemon, setPokemon] = useState({})
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
        <Paralax />
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
    const data = [
        { title: 'title 1', color: colors.fire },
        { title: 'title 2', color: colors.water },
        { title: 'title 3', color: colors.seed },
    ]
    const _renderPage = ({ data }) => {
        return (
            <View style={{ flex: 1, backgroundColor: data.color }}>
                <Char />
                <ViewPager
                    data={data}
                    renderPage={_renderPage}
                    containerStyle={{
                        flex: 1,
                        justifyContent: 'center'
                    }}
                />
            </View>

        )
    }


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

    const _renderItem = ({ item, index }) => {
        return (
            <ImageBackground key={index} source={{ uri: 'https://i.imgur.com/26mndC3.png' }} style={{
                width: '100%', height: hp(50), backgroundColor:

                    item.type.find(x => x === 'grass') ? colors.seed :
                        item.type.find(x => x === 'fire') ? colors.fire :
                            item.type.find(x => x === 'water') ? colors.water :
                                item.type.find(x => x === 'bug') ? colors.bug :
                                    item.type.find(x => x === 'poison') ? colors.poison :
                                        item.type.find(x => x === 'normal') ? colors.normal : colors.lightning
            }}>
                <View style={{ width: wp(100), height: hp(9), justifyContent: 'center', flexDirection: 'row' }}>
                    <View style={{ width: '50%', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                        <Icon color='white' name='arrow-left' size={hp(3.5)} style={{ marginLeft: hp(3) }} />
                    </View>
                    <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <Icon color='white' name='heart-outline' size={hp(3.5)} style={{ marginRight: hp(3) }} />
                    </View>
                </View>
                <View style={{ width: wp(100), height: hp(11), justifyContent: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: hp(4.7), fontWeight: 'bold', marginLeft: hp(3) }}>{item.ThumbnailAltText}</Text>
                    <View style={{ flexDirection: 'row', width: wp(100) }}>
                        <View style={{ width: wp(50), flexDirection: 'row', marginLeft: hp(2) }}>
                            {
                                item.type.map(x => {
                                    return (
                                        <Text style={{ marginLeft: hp(1), borderRadius: 10, color: '#fff', textAlign: 'center', width: wp(16), height: hp(2.5), backgroundColor: 'rgba(255,255,255,0.4)', textTransform: 'capitalize' }}>{x}</Text>
                                    )
                                })
                            }
                        </View>
                        <View style={{ width: wp(50), alignItems: 'flex-end', justifyContent: 'center' }}>
                            <Text style={{ marginRight: hp(5), color: '#fff', fontSize: hp(1.8), fontWeight: 'bold' }}>{`#${item.number}`}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{
                            width: hp(29),
                            height: hp(29),
                        }}
                        source={{ uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${item.number}.png` }}
                    />
                </View>
            </ImageBackground>

        );
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
    return (
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>
            <View style={{ padding: 15, }}>
                <Text style={{ fontSize: hp(4), fontWeight: 'bold', color: '#222' }}>Pokedex</Text>
            </View>
            <FlatGrid
                itemDimension={hp(15)}
                data={Poke.slice(524,600)}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item, index }) => (
                    <TouchableOpacity activeOpacity={0.6}>
                        <ImageBackground key={index} borderRadius={10} resizeMode='cover' key={index} source={{ uri: 'https://i.imgur.com/26mndC3.png' }} style={[styles.itemContainer, {
                            backgroundColor: what(item)
                        }]}>
                            <View style={{ flexDirection: 'row', height: '100%' }}>
                                <View style={{ width: wp(26), paddingTop: 10, paddingLeft: 10 }}>
                                    <Text style={styles.itemName}>{item.ThumbnailAltText}</Text>
                                    {
                                        item.type.map(x => {
                                            return (
                                                <View style={{ marginLeft: hp(1), marginVertical: hp(0.2), borderRadius: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: wp(14), height: hp(2.3), backgroundColor: 'rgba(255,255,255,0.4)', textTransform: 'capitalize', fontSize: hp(1.4) }}>
                                                    <Text style={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', textTransform: 'capitalize', fontSize: hp(1.3) }}>{x}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                                <View style={{ width: wp(20), justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: 'rgba(0,0,0,0.15)', fontSize: hp(1.5), fontWeight: 'bold' }}>{`#${item.number}`}</Text>
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
        borderRadius: 10,
        height: hp(15),
    },
    itemName: {
        fontSize: hp(2),
        color: '#fff',
        fontWeight: 'bold',
    },
});