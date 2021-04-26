import React, { useState } from 'react'
import PokemonContext from './index'
import Call from '../../api'
import API from './api-list'

export default PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([])
    const [Abilities, setAbilities] = useState([])
    const [Moves, setMoves] = useState([])
    const [Items, setItems] = useState([])
    const [Location, setLocation] = useState([])
    const [Types, setTypes] = useState([])

    const [loading, setLoading] = useState(true)


    const getContext = async () => {
        try {
            const _poke = await Call({ url: API.GET_POKEMONS })
            const _move = await Call({ url: API.GET_MOVES })
             const _item = await Call({ url: API.GET_ITEMS })
            const _types = await Call({ url: API.GET_TYPES })

            /*  const _ability = await Call({ url: API.GET_ABILITIES })
             const _location = await Call({ url: API.GET_LOCATION })*/
            setPokemons(_poke)
            setMoves(_move)
            setTypes(_types)
            setItems(_item)

            /* setAbilities(_ability)
            setLocation(_location) */


            setLoading(false)
        } catch (error) {
            setPokemons([])
            setAbilities([])
            setMoves([])
            setItems([])
            setLocation([])
            setTypes([])
            console.log(error);
            setLoading(false)
        }
    }

    return (
        <PokemonContext.Provider value={{
            getContext,
            pokemons,
            Abilities,
            Moves,
            Items,
            Location,
            Types,
            loading
        }}>
            {children}
        </PokemonContext.Provider>
    )
}