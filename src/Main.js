import React from 'react'
import { View, Text } from 'react-native'
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const Paralax = () => {
    return (
        <View style={{ flex: 1 }}>
            <ParallaxScrollView
                backgroundColor="blue"
                contentBackgroundColor="pink"
                parallaxHeaderHeight={300}
                stickyHeaderHeight={120}
                renderStickyHeader={() => (
                    <View key="sticky-header" style={{
                        height: 80,
                        width: '100%',
                        justifyContent: 'flex-end'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            margin: 10
                        }}>Rich Hickey Talks</Text>
                    </View>
                )}
                renderForeground={() => (
                    <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Hello World!</Text>
                    </View>
                )}>
                <View style={{ height: 500 }}>
                    <Text>Scroll me</Text>
                </View>
            </ParallaxScrollView>
        </View>

    )
}

export default Paralax
