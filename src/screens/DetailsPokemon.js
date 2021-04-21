import React, { useState, useContext, useEffect } from 'react';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet, Text, View, ImageBackground, Image, Animated, ScrollView, TouchableOpacity, Platform, ActivityIndicator } from 'react-native';
import { ActiveColor, colors } from '../helpers/colors'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { Bar } from 'react-native-progress';
import Carousel from 'react-native-snap-carousel';
import Poke from '../../api/poke.json'
import * as Animatable from 'react-native-animatable';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const DetailsPokemon = ({ navigation }) => {
    const currentIndex = navigation.getParam('setindex')
    const currentId = navigation.getParam('_id')
    const [index, setIndex] = useState(0)
    const [Cp, setCurrentPokemon] = useState(Poke[currentIndex])
    const [Pokemon, setPokemon] = useState({})
    const [SpecieP, setSpecieP] = useState({})
    const [Chains, setChains] = useState({})
    const [loadPoke, setLoadPoke] = useState(false)

  

    const fetchPokemon = async () => {
        setLoadPoke(true)
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${Cp.id}`)
        const specie = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${Cp.id}/`)
        const data = await resp.json()
        const data2 = await specie.json()
        setPokemon(data)
        setSpecieP(data2.evolution_chain.url)
        const chain = await fetch(data2.evolution_chain.url)
        const data3 = await chain.json()
        
        const baby = data3.chain.species.name ? data3.chain.species.name : ''
        const middle = data3.chain.evolves_to[0].species.name ? data3.chain.evolves_to[0].species.name : ''
        const main = data3.chain.evolves_to[0].evolves_to[0].species.name ? data3.chain.evolves_to[0].evolves_to[0].species.name : ''
        let Capitalize = str => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        const evolution = Poke.slice(0,100).filter(x => x.name === Capitalize(baby) | x.name === Capitalize(middle) | x.name === Capitalize(main))
        setChains(evolution)
        setLoadPoke(false);
    }

    useEffect(() => {
        fetchPokemon()
    

        return (() => {

        })
    }, [Cp])

    console.log(Chains); 
    
    const RenderProgress = ({ label, stats, }) => (
        <View style={{ flexDirection: 'row', marginVertical: hp(1), }}>
            <View style={{ width: wp(30), justifyContent: 'center', alignItems: 'flex-start' }}>
                <Text style={{ textTransform: 'capitalize', paddingLeft: 15 }}>{label ? label : 'label'}</Text>
            </View>
            <View style={{ width: wp(10), justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>{stats ? stats : 0}</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Bar
                    animated={true}
                    animationType='timing'

                    color={stats >= 30 & stats <= 50 ? colors.electric : stats > 51 & stats < 999 ? colors.grass : stats <= 29 ? colors.fire : colors.normal}
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
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    )
    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: hp(2) }}>
            {
                Pokemon.stats.map((x, i) => {
                    return (
                        <RenderProgress key={i} label={x.stat.name} stats={x.base_stat} />
                    )
                })
            }
            <View style={{ width: wp(100), marginTop: hp(1) }}>
                <Text style={{ fontSize: hp(2.3), fontWeight: 'bold', marginLeft: 10 }}>Type defences</Text>
                <Text style={{ fontSize: hp(1.8), fontWeight: '900', marginLeft: 10, color: 'grey' }}>The effectives of each type on Charmander.</Text>
            </View>
        </View>
    )
    const ThreeRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff', alignItems:'center' }}>
            <View style={{paddingTop:20 }}>
           {
                Chains.map((x, i) => {
                    return (
                        <View style={{width:hp(15), height:hp(15), justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.8)', borderRadius:100, marginVertical:30}}>
                        <Image key={i}
                            style={{
                                width: hp(10.2),
                                height: hp(10.2),
                            }}
                            source={{ uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${x.number}.png` }}
                        />
                            <Text style={{color:'white'}}>{x.ThumbnailAltText}</Text>
                      </View>
                    )
                })
            }
            </View>
        </View>
    )
    const FourRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#fff' }} />
    )


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

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        three: ThreeRoute,
        four: FourRoute,
    })

    const [routes] = useState([
        { key: 'first', title: 'About' },
        { key: 'second', title: 'Base Stats' },
        { key: 'three', title: 'Evolution' },
        { key: 'four', title: 'Moves' },
    ])
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    style={{
                        width: hp(30),
                        height: hp(30),
                    }}
                    source={{ uri: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${item.number}.png` }}
                />
            </View>

        );
    }

    return (
        <ScrollView style={{ backgroundColor: ActiveColor(Cp) }}>
            <View style={{ flex: 1 }}>
                <ImageBackground source={{ uri: 'https://i.imgur.com/GfnKKUj.png' }} style={{
                    flex: 1, backgroundColor: ActiveColor(Cp)
                }}>
                    <View style={{ width: wp(100), height: hp(9), justifyContent: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '50%', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
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
                                    Cp.type.map((x, i) => {
                                        return (
                                            <View key={i} style={{ marginLeft: hp(1), marginVertical: hp(0.2), borderRadius: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: wp(14), height: hp(2.3), backgroundColor: 'rgba(255,255,255,0.4)', textTransform: 'capitalize', fontSize: hp(1.4) }}>
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
                        onSnapToItem={(index) => setCurrentPokemon(Poke[index])}
                        data={Poke.slice(0, 100)}
                        renderItem={_renderItem}
                        keyExtractor={(item) => String(item.id)}
                        sliderWidth={wp(100)}
                        itemWidth={wp(100)}
                        initialNumToRender={currentIndex + 1}

                    />
                </ImageBackground>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', width: '100%', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                <View style={{ width: wp(100), height: hp(80), marginTop: hp(2), alignItems: 'center', backgroundColor: 'white', flexDirection: 'row' }}>
                    {
                        loadPoke == true ?
                            <ActivityIndicator color='black' size='large' />
                            :
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
                    }


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
