import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import RBSheet from 'react-native-raw-bottom-sheet';
import { useCommonStyles } from '../common/commonStyle';
import { F15W500Text, F15W900Text } from './TextComponents';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { DarkTheme, LightTheme, StaticColors } from '../theme/StaticColors';
import { useTheme } from '../theme/themeContext';
import CheckBox from '../common/CheckBox';
import FilterCard from '../common/FilterCard';
import { useAppSelector } from '../reduxStoreAndSlice/store';
import { Pokemon } from '../utils/Typeinterface';
import { useDispatch } from 'react-redux';
import { setSelectedFilter } from '../reduxStoreAndSlice/pokemonSlice';
import { StaticText } from '../assets/StaticText';


export default function FilterSheet({ isOpen, onPressClose }: { isOpen: boolean, onPressClose: (data?:any) => void }) {
    const refRBSheet = useRef<any>("");
    const dispatch = useDispatch()
    const commonStyle = useCommonStyles()
    const { isDarkTheme } = useTheme()
    const PokemonTypes = useAppSelector(state => state.pokemonData.pokemonTypes)
    const SelectedFilterData = useAppSelector(state => state.pokemonData.selectedFilter)

    if (isOpen) {
        refRBSheet.current.open();
    }

    const closePress = (data?: Pokemon) => {
        if(data){
            let obj ={
                needFilter: !(data.name == StaticText.Allpokemon),
                ...data
            }
            dispatch(setSelectedFilter(obj))
            onPressClose(obj)
        }
        else{
            onPressClose("close")
        }
        
        refRBSheet.current.close();
    }

    const checkData = (data: Pokemon) => {
        return SelectedFilterData?.name?.toLowerCase() == data.name?.toLowerCase()
    }
    return (
        <RBSheet
            ref={refRBSheet}
            closeOnPressMask={false}
            height={Dimensions.get('window').height * 0.58}
            customStyles={{
                wrapper: {
                    // backgroundColor: 'transparent',
                },
                draggableIcon: {
                    backgroundColor: '#000',
                },
                container: {
                    margin: 15,
                    borderRadius: 20,
                    width: "auto"
                },
            }}
        >
            <View style={[commonStyle.mainContainer, { backgroundColor: isDarkTheme ? DarkTheme.darkFWithOpacity(0.9) : LightTheme.darkFWithOpacity(0.9) }]}>
                <View style={styles.headerContainer}>
                    <F15W500Text>Filter</F15W500Text>
                    <TouchableOpacity
                        onPress={() => closePress()}
                        hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}>
                        <Icon name="cross" size={30} color={isDarkTheme ? DarkTheme.bright : LightTheme.bright} />
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        numColumns={2}
                        data={PokemonTypes}
                        renderItem={({ item }) =>
                            <FilterCard data={item} isChecked={checkData(item)} onPress={(data: Pokemon) => { closePress(data) }}
                            />}
                    />
                </View>
            </View>
        </RBSheet>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        // borderBottomColor: StaticColors.grey,
        // borderBottomWidth: 1
    }
})