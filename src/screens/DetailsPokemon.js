import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Animated } from 'react-native';
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
    seed: 'rgb(79,213,183)',
    fire: 'rgb(251,108,108)',
    water: 'rgb(118,189,254)',
    lightning: 'rgb(255,206,75)',
    poison: 'rgb(124,83,140)',
    bug: 'rgb(131,168,81)',
    normal: 'rgb(165,173,176)'
}
const DetailsPokemon = ({navigation}) => {
    const currentIndex =  navigation.getParam('setindex')
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
    const what = ({ item }) => {
        return (
            item.type.find(x => x === 'grass') ? colors.seed :
                item.type.find(x => x === 'fire') ? colors.fire :
                    item.type.find(x => x === 'water') ? colors.water :
                        item.type.find(x => x === 'bug') ? colors.bug :
                            item.type.find(x => x === 'poison') ? colors.poison :
                                item.type.find(x => x === 'normal') ? colors.normal : colors.lightning
        )
    }

    const _renderItem = ({ item, index }) => {

        //setNewIndex(item)
        console.log(index);

        return (
            <ImageBackground key={`uniqueId${item.id}`} source={{ uri: 'https://i.imgur.com/GfnKKUj.png' }} style={{
                width: '100%', height: hp(100), backgroundColor:

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



    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#222' }}>
            <View style={{ flex: 1 }}>
                <Carousel
                    firstItem={currentIndex} 
                    slideStyle={{
                        backgroundColor: 'purple',
                        margin: 0,
                    }}

                    callbackOffsetMargin={0}
                    data={Poke.slice(0, 10)}
                    renderItem={_renderItem}
                    activeSlideOffset={10}
                    keyExtractor={(item) => String(item.id)}
                    sliderWidth={wp(100)}
                    itemWidth={wp(100)}
                    layout='tinder'
                    layoutCardOffset={0}
                />
            </View>
            {/*  <View style={{ flex: 0.9, backgroundColor: 'white', width: '100%', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                <View style={{ width: wp(100), height: hp(44), alignItems: 'center', backgroundColor: 'red', flexDirection: 'row' }}>
                    <TabView
                        renderTabBar={props => <TabBar
                            indicatorContainerStyle={{
                                backgroundColor: 'white',
                                marginBottom: -10
                            }}
                            labelStyle={{
                                textTransform: 'capitalize',
                                fontWeight: 'bold'
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
            </View> */}

        </View>

    );
}
export default DetailsPokemon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fire
    },
});
