import PokemonContext from './index'
export default function PokemonsProvider({children}){
    return(
        <PokemonContext.Provider value={{
            showAlert:()=> alert('Holi')
        }}>
            {children}
        </PokemonContext.Provider>
    )
}