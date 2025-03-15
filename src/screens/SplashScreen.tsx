import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useCommonStyles } from '../common/commonStyle'
import Loader from '../common/Loader'
import { StaticColors } from '../theme/StaticColors'
import { useNavigation } from '@react-navigation/native'
import { NavigationTypes } from '../common/commonTypes'
import { APIConstants, StaticText } from '../assets/StaticText'
import { getItemFromStorage } from '../utils/AsyncStorageService'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../reduxStoreAndSlice/store'
import LottieView from 'lottie-react-native';
import { ScreenWidth } from '../common/ScreenHeightWidth'
import { F40W900Text } from '../components/TextComponents'
import { getPokemonTypes, getResponse } from '../common/commonFunctions'
import { setFavoritePokemonList, setPokemonList, setPokemonTypes } from '../reduxStoreAndSlice/pokemonSlice'
import { addEventListener } from '@react-native-community/netinfo'
import { PokemonResponse, PokemonTypeData } from '../utils/Typeinterface'

export default function SplashScreen() {
    const commonStyle = useCommonStyles()

    const navigation: NavigationTypes = useNavigation();
    const dispatch = useAppDispatch()

    /**
     * Retrieves and stores the favorite Pokémon list from local storage.
     * If data exists, it updates the Redux store with the retrieved list.
     * After a short delay, navigates to the 'BottomNav' screen.
     */
    const storeFavPokemonList = () => {
        getItemFromStorage(StaticText.FAVORITE_POKEMON_LIST).then((response: any) => {
            const favouriteListData: any = JSON.parse(response);
            if (favouriteListData) {
                dispatch(setFavoritePokemonList(favouriteListData ?? []))
            }
            getPokemonTypes().then((res) => {
                const response = res as PokemonResponse
                let extra = {
                    name: StaticText.Allpokemon,
                    url: ''
                }
                dispatch(setPokemonTypes([extra, ...response.results]))
                setTimeout(() => {
                    navigation.replace("BottomNav")
                }, 500)
            })
        }).catch((error) => {
        })
    }

    /**
     * Effect hook that listens for network connectivity changes.
     * On connection, it retrieves the Pokémon list from storage
     * and dispatches it to the Redux store. In both cases, it also
     * calls `storeFavPokemonList()` to ensure favorite data is updated.
     */
    useEffect(() => {
        const unsubscribe = addEventListener(state => {
            if (state.isConnected ? true : false) {
                getItemFromStorage(StaticText.POKEMON_LIST).then((response) => {
                    dispatch(setPokemonList)
                    storeFavPokemonList()
                })
            }
            else {
                storeFavPokemonList()
            }
        });
        return () => unsubscribe()
    }, [])

    return (
        <View style={commonStyle.mainContainer}>
            <View style={styles.subContainer}>
                <F40W900Text style={{ letterSpacing: 15 }}>{StaticText.Pokedex}</F40W900Text>
            </View>
            <LottieView style={styles.loaderStyle}
                source={require('../assets/JSON/Splash.json')}
                autoPlay loop />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingContainer: {
        paddingBottom: 10
    },
    loaderStyle: {
        height: ScreenWidth * 0.5,
        width: ScreenWidth * 0.5,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0
    },
    subContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    }
})