import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from './CheckBox'
import { Pokemon } from '../utils/Typeinterface'
import { getPokemonName } from './commonFunctions'

export default function FilterCard({ isChecked, onPress, data }:
    {
        isChecked: boolean,
        data: Pokemon,
        onPress: (data: Pokemon) => void
    }) {
    const selectCheckBox = () => {
        onPress(data)
    }
    return (
        <View style={styles.mainContainer}>
            <CheckBox
                isChecked={isChecked}
                onPress={() => selectCheckBox()}
                text={getPokemonName(data.name)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 15,
        paddingBottom: 15,
        flex: 1
    }
})