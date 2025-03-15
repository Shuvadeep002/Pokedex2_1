import { createSlice } from '@reduxjs/toolkit';
import { Anime } from '../common/commonTypes';
import { setItemInStorage } from '../utils/AsyncStorageService';
import { StaticText } from '../assets/StaticText';
import { Pokemon, PokemonDetailsType, PokemonType } from '../utils/Typeinterface';
export interface PokemonState {
    pokemonTypes: Pokemon[]
    pokemonList: Array<Pokemon>
    pokemonDetails: PokemonDetailsType
    favoritePokemonList: Array<PokemonDetailsType>,
    selectedPokemon: Pokemon,
    selectedFilter: {
        needFilter: boolean,
        name: string,
        url: string
    }
}
const initialState: PokemonState = {
    pokemonTypes: [],
    pokemonList: [],
    pokemonDetails: {},
    favoritePokemonList: [],
    selectedPokemon: {},
    selectedFilter: {
        needFilter: false,
        name: "All pokemon",
        url: ''
    }
};
export const pokemonSlice = createSlice({
    name: 'pokemonSlice',
    initialState,
    reducers: {
        setPokemonTypes: (state, action) => {
            state.pokemonTypes = action.payload
        },
        setPokemonList: (state, action) => {
            state.pokemonList = action.payload;
        },
        addPokemonList: (state, action) => {
            let data = state.pokemonList.concat(action.payload)
            state.pokemonList = data
        },
        setIndividualPokemon: (state, action) => {
            state.pokemonDetails = action.payload
        },
        setFavoritePokemonList: (state, action) => {
            state.favoritePokemonList = action.payload
        },
        setSelectedPokemon: (state, action) => {
            state.selectedPokemon = action.payload;
        },
        setSelectedFilter: (state, action) => {
            state.selectedFilter = action.payload
        }
    }
})

export const {
    setPokemonTypes,
    setPokemonList,
    addPokemonList,
    setIndividualPokemon,
    setFavoritePokemonList,
    setSelectedPokemon,
    setSelectedFilter
} = pokemonSlice.actions;

export default pokemonSlice.reducer;