import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import * as Progress from 'react-native-progress';

const colors = {
  seed: 'rgb(79,213,183)',
  fire: 'rgb(251,108,108)',
  water: 'rgb(118,189,254)',
  lightning: 'rgb(255 216 111)'
}
export default function App() {

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
          progress={stats ? stats : 1 / 100}
          width={wp(55)}
          borderRadius={0}
          borderWidth={0}
          unfilledColor='#eee'
        />
      </View>
    </View>
  )

  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 20 }}>
      <RenderProgress label='hp' />
      <RenderProgress label='' />
      <RenderProgress />
      <RenderProgress />
      <RenderProgress />
      <RenderProgress />
      <RenderProgress />
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



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={{ uri: 'https://i.imgur.com/26mndC3.png' }} style={{ flex: 0.9, width: '100%', height: '105%' }}>
        <View style={{ width: wp(100), height: hp(9), justifyContent: 'center', flexDirection: 'row' }}>
          <View style={{ width: '50%', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
            <Icon color='white' name='arrow-left' size={hp(3.5)} style={{ marginLeft: hp(3) }} />
          </View>
          <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
            <Icon color='white' name='heart-outline' size={hp(3.5)} style={{ marginRight: hp(3) }} />
          </View>
        </View>

        <View style={{ width: wp(100), height: hp(11), justifyContent: 'center' }}>
          <Text style={{ color: '#fff', fontSize: hp(4.7), fontWeight: 'bold', marginLeft: hp(3) }}>Charmander</Text>
          <View style={{ flexDirection: 'row', width: wp(100) }}>
            <View style={{ width: wp(50), flexDirection: 'row', marginLeft: hp(2) }}>
              <Text style={{ marginLeft: hp(1), borderRadius: 10, color: '#fff', textAlign: 'center', width: wp(16), height: hp(2.5), backgroundColor: 'rgba(255,255,255,0.4)' }}>Fire</Text>
              {/* <Text style={{ marginLeft: hp(1), borderRadius: 10, color: '#fff', textAlign: 'center', width: wp(16), height: hp(2.5), backgroundColor: 'rgba(255,255,255,0.4)' }}>Fire</Text>
              <Text style={{ marginLeft: hp(1), borderRadius: 10, color: '#fff', textAlign: 'center', width: wp(16), height: hp(2.5), backgroundColor: 'rgba(255,255,255,0.4)' }}>Fire</Text> */}
            </View>
            <View style={{ width: wp(50), alignItems: 'flex-end', justifyContent: 'center' }}>
              <Text style={{ marginRight: hp(5), color: '#fff', fontSize: hp(1.8), fontWeight: 'bold' }}>#004</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{
              width: hp(26),
              height: hp(26),
            }}
            source={{ uri: 'https://i.imgur.com/ApwpZxT.png' }}
          />
        </View>


      </ImageBackground>

      <View style={{ flex: 1.1, backgroundColor: 'white', width: '100%', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>

        <View style={{ width: wp(100), height: hp(44), marginTop: hp(3), alignItems: 'center', backgroundColor: 'red', flexDirection: 'row' }}>
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
        <View style={{ width: wp(100), marginTop: hp(1) }}>
          <Text style={{ fontSize: hp(2.3), fontWeight: 'bold', marginLeft: 10 }}>Type defences</Text>
          <Text style={{ fontSize: hp(1.8), fontWeight: '900', marginLeft: 10, color: 'grey' }}>The effectives of each type on Charmander.</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fire
  },
});
