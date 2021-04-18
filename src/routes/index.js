import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import PokedexScreen from '../screens/Pokedex'
/* import HomeScreen from '../screens/Home' */
import DetailsPokemonsScreen from '../screens/DetailsPokemon' 
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions'

const handleCustomTransition = ({ scenes }) => {
    const prevScene = scenes[scenes.length - 2];
    const nextScene = scenes[scenes.length - 1];

    // Custom transitions go there
    if (prevScene
        && prevScene.route.routeName === 'Pokedex'
        && nextScene.route.routeName === 'Home') {
        return zoomIn();
    } else if (prevScene
        && prevScene.route.routeName === 'DetailsPokemons'
        && nextScene.route.routeName === 'Pokedex') {
        return zoomOut();
    }
    return fromLeft();
};

const RootStack = createStackNavigator({
  /*   Home: {
        screen: null
    }, */
    Pokedex: {
        screen: PokedexScreen,
    },
     DetailsPokemons: {
        screen: DetailsPokemonsScreen
    },
}, {
    initialRouteName: 'Pokedex',
    headerMode:'none',
    transitionConfig: () => fromLeft(),
    //transitionConfig: (nav) => handleCustomTransition(nav)
})


export default createAppContainer(RootStack)