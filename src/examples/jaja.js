<ImageBackground key={`uniqueId${item.id}`} source={{ uri: 'https://i.imgur.com/GfnKKUj.png' }} style={{
    flex: 1, backgroundColor:
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
                            <View style={{ marginLeft: hp(1), marginVertical: hp(0.2), borderRadius: 10, justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: wp(14), height: hp(2.3), backgroundColor: 'rgba(255,255,255,0.4)', textTransform: 'capitalize', fontSize: hp(1.4) }}>
                                <Text style={{ color: '#fff', justifyContent: 'center', alignItems: 'center', textAlign: 'center', textTransform: 'capitalize', fontSize: hp(1.33) }}>{x}</Text>
                            </View>
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