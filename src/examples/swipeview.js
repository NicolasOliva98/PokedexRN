import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';
import Paralax from './Main'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import { ViewPager } from 'react-native-viewpager-carousel'
import { color } from 'react-native-reanimated';

const colors = {
    seed: 'rgb(79,213,183)',
    fire: 'rgb(251,108,108)',
    water: 'rgb(118,189,254)',
    lightning: 'rgb(255 216 111)'
}
const Main = () => {

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
            <View style={{ flex: 1, backgroundColor: data.color, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{data.title}</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <ViewPager
                data={data}
                renderPage={_renderPage}
                containerStyle={{
                    flex: 1,
                    justifyContent: 'center'
                }}
            />

        </View>

    );
}
export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.fire
    },
});
