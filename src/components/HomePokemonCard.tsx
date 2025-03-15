import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, Easing, ViewStyle } from 'react-native'
import React, { useEffect } from 'react'
import { F10W900Text, F15W900Text, F20W900Text } from './TextComponents'
import { DarkTheme, LightTheme, StaticColors } from '../theme/StaticColors'
import { getPokemonName } from '../common/commonFunctions'
import { NavigationTypes } from '../common/commonTypes'
import { useNavigation } from '@react-navigation/native'
import PokemonTypeItem from './PokemonTypeItem'
import { useTheme } from '../theme/themeContext'

export default function HomePokemonCard(props: any) {
    const { isDarkTheme } = useTheme()
    return (
        <TouchableOpacity onPress={props?.onPress} style={[mainContainer(isDarkTheme)]}>
            <View style={{ flex: 0.8 }}>
                <F20W900Text style={{ fontWeight: '400' }}>{getPokemonName(props?.data?.name ?? props?.data?.pokemon?.name)}</F20W900Text>
            </View>
            <Image style={styles.pokeballImage} source={require('../assets/Images/Pokeball.png')} />
        </TouchableOpacity>
    )
}

const mainContainer = (darkMode: boolean): ViewStyle => ({
    // maxWidth: '45%',
    borderRadius: 10,
    margin: 10,
    flex: 1,
    overflow: 'hidden',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: darkMode ? DarkTheme.lightWithOpacity(0.2) : LightTheme.lightWithOpacity(0.2)
})
const styles = StyleSheet.create({

    pokeballImage: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        opacity: 0.5,
        position: 'absolute',
        right: -5,
        bottom: -5
    },

    pokemonImage: {
        height: 65,
        width: 65,
        resizeMode: 'contain',
    },
    imageContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
})