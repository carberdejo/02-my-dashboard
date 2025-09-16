import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface pokemonState{
    [key:string]:SimplePokemon
}
// const getInitialState = () : pokemonState=>{
//   const favorites = JSON.parse(localStorage.getItem('favorites-pokemon')?? '{}' )
//   return favorites
// }

const initialState:pokemonState = {
  // ...getInitialState()
    // '1':{id:'1',name:'bulbasaur'},
    // '3':{id:'3',name:'asdasd'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state,action: PayloadAction<SimplePokemon>){
        const pokemon = action.payload;
        const {id} = pokemon;
        if( !!state[id] ){ //? al usar doble signo de exclamacion quiere decir que existe
            delete state[id]; 
            // return ;
        }else{
        state[id] = pokemon;
        }
        //! NO DE SEDE HACER EN REDUX TOOLKIT
        //localStorage.setItem('favorites-pokemon',JSON.stringify(state))
    }
  }
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer