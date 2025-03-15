import { FlatList, Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useCommonStyles } from '../common/commonStyle'
import { APIConstants, StaticText } from '../assets/StaticText'
import { useAppDispatch, useAppSelector } from '../reduxStoreAndSlice/store'
import { DarkTheme, LightTheme, StaticColors } from '../theme/StaticColors'
import { ScreenHeight, ScreenWidth } from '../common/ScreenHeightWidth'
import { F15W900Text, F30W900Text } from '../components/TextComponents'
import PokemonCard from '../components/PokemonCard'
import { getResponse } from '../common/commonFunctions'
import CustomFlatList from '../components/CustomFlatList'
import { useDispatch } from 'react-redux'
import { addPokemonList, setIndividualPokemon, setPokemonList, setSelectedPokemon } from '../reduxStoreAndSlice/pokemonSlice'
import { NavigationTypes } from '../common/commonTypes'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from '../theme/themeContext'
import { setItemInStorage } from '../utils/AsyncStorageService'
import Icon from 'react-native-vector-icons/Entypo';
import { PokemonDetailsType, PokemonResponse, PokemonTypeData } from '../utils/Typeinterface'
import HomePokemonCard from '../components/HomePokemonCard'
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import FilterSheet from '../components/FilterSheet'
import Loader from '../common/Loader'


export default function HomeScreen() {
    const commonStyle = useCommonStyles()

    const { isDarkTheme, changeTheme } = useTheme()
    const dispatch = useDispatch()
    const navigation: NavigationTypes = useNavigation()
    const [Page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [isGridView, setIsGridView] = useState(true);
    const [visibleFilter, setVisibleFilter] = useState(false)
    const PokemonList = useAppSelector(state => state.pokemonData.pokemonList)
    const SelectedFilterData = useAppSelector(state => state.pokemonData.selectedFilter)

    useEffect(() => {
        GetPokemon(0)
    }, [])

    /**
     * Fetches a list of Pokémon from the PokeAPI based on the current page.
     * 
     * @param {number} page - The current page number used for pagination.
     */
    const GetPokemon = (page: number) => {
        let DataQnty = page * 20
        setLoading(true)
        getResponse(APIConstants.POKEMON, DataQnty).then(async (res) => {
            const response = res as PokemonResponse
            if (page == 0) {
                setPage(page + 1)
                dispatch(setPokemonList(response.results))
            }
            else {
                dispatch(addPokemonList(response.results))
                setPage(page + 1)
            }
        }).catch((error) => {

        })
    }

    /**
     * Navigates to the Pokémon details screen.
     *
     * @param {any} data - The Pokémon data to pass to the details screen.
     */
    const NavigateToDetails = (data: any) => {
        dispatch(setSelectedPokemon(data))
        navigation.navigate("PokemonDetails")
    }

    /**
     * Filters Pokémon data based on the selected filter.
     * If a filter is applied, it fetches data from the specified endpoint and updates the Redux store.
     * If the filter is cleared, it reloads the Pokémon list from the default endpoint.
     *
     * @param data - Filter data containing the filter state and URL.
     */
    const GetFilteredData = (data: any) => {
        setVisibleFilter(false)
        if (data?.needFilter) {
            setLoading(true)
            dispatch(setPokemonList([]))
            const url = data?.url ?? SelectedFilterData.url
            const endpoint = url.split("api/v2/")[1];
            getResponse(endpoint).then((res) => {
                setLoading(false)
                const response = res as PokemonTypeData
                dispatch(setPokemonList(response.pokemon))
            }).catch((error) => {
                setLoading(false)
            })
        }
        else if (data == "close") {
            return;
        }
        else {
            GetPokemon(0)
        }
    }

    return (
        <View style={commonStyle.mainContainer}>
            <Image style={styles.pokeballImage} source={require('../assets/Images/Pokeball.png')} />
            <View style={styles.switchContainer}>
                <F15W900Text style={{ marginRight: 10 }}>{isDarkTheme ? StaticText.Dark : StaticText.Light}</F15W900Text>
                <Switch
                    value={isDarkTheme}
                    onChange={() => changeTheme()}
                    trackColor={{
                        false: '#ccc',
                        true: '#555'
                    }}
                    thumbColor={isDarkTheme ? '#fff' : '#000'}
                />
            </View>
            <View style={styles.headerContainer}>
                <F30W900Text>{StaticText.Pokedex}</F30W900Text>
                <View style={styles.subContainer}>
                    <TouchableOpacity
                        onPress={() => { }}
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    >
                        <Icon2 name="search" size={30} color={isDarkTheme ? DarkTheme.bright : LightTheme.bright} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { setVisibleFilter(true) }}
                        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                    >
                        <Icon3 name="filter" size={30} color={isDarkTheme ? DarkTheme.bright : LightTheme.bright} />
                    </TouchableOpacity>
                    {!isGridView ?
                        <TouchableOpacity
                            onPress={() => setIsGridView(true)}
                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                            <Icon name="grid" size={30} color={isDarkTheme ? DarkTheme.bright : LightTheme.bright} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={() => setIsGridView(false)}
                            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                            <Icon name="list" size={30} color={isDarkTheme ? DarkTheme.bright : LightTheme.bright} />
                        </TouchableOpacity>}
                </View>
            </View>
            <FilterSheet isOpen={visibleFilter} onPressClose={(filterData) => { GetFilteredData(filterData) }} />
            {PokemonList?.length == 0 ?
                <View style={styles.loaderContainer}>
                    <Loader />
                </View> :
                <View style={styles.listContainer}>
                    <CustomFlatList
                        loading={loading}
                        key={isGridView ? 'G' : 'L'}
                        numColumns={isGridView ? 2 : 1}
                        data={PokemonList}
                        renderItem={({ item, index }) =>
                            <HomePokemonCard
                                index={index}
                                data={item}
                                onPress={() => { NavigateToDetails(item) }}
                            />
                        }
                        onEndReached={() => { !SelectedFilterData.needFilter && GetPokemon(Page) }}
                        onRefreshing={() => { !SelectedFilterData.needFilter && GetPokemon(0) }}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        color: StaticColors.skyBlue
    },
    headerContainer: {
        backgroundColor: "transparent",
        // marginTop: ScreenWidth * 0.12,
        paddingHorizontal: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchContainer: {
        width: '100%',
        backgroundColor: StaticColors.bright,
        borderRadius: 35,
        flexDirection: 'row',
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    placeHolderText: {
        marginHorizontal: 10,
        fontSize: 17,
        color: StaticColors.grey
    },
    pokeballImage: {
        height: ScreenWidth * 0.5,
        width: ScreenWidth * 0.5,
        position: 'absolute',
        top: -35,
        right: -35,
        resizeMode: 'contain',
        opacity: 0.4
    },
    bottomContainer: {
        marginTop: 10,
        marginBottom: 280
    },
    listContainer: {
        height: ScreenHeight - 175
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 15
    },
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 120,
        justifyContent: 'space-between'
    },
    loaderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})