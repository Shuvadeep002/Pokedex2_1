import { StyleSheet, Text, TextStyle, View } from 'react-native'
import React from 'react'
import { CheckBoxProps } from '../utils/Typeinterface'
import { DarkTheme, LightTheme, StaticColors } from '../theme/StaticColors'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useTheme } from '../theme/themeContext';


export default function CheckBox(props: CheckBoxProps) {
    const { isDarkTheme } = useTheme()

    return (
        <View>
            <BouncyCheckbox
                text={props?.text}
                style={props.style}
                innerIconStyle={innerIconStyle(props, isDarkTheme)}
                iconStyle={innerIconStyle(props, isDarkTheme)}
                fillColor={props?.fillColor ?? StaticColors.azureBlue}
                size={props?.size ?? 24}
                textStyle={textStyle(props, isDarkTheme)}
                {...props}
            />
        </View>
    )
}

const innerIconStyle = (props: CheckBoxProps, darkMode: boolean) => ({
    borderRadius: 5,
    borderColor: darkMode ? DarkTheme.bright : LightTheme.bright,
})
const textStyle = (props: CheckBoxProps, darkMode: boolean): TextStyle => ({
    // fontSize: props?.fontSize ?? Hwp.hp_1_5,
    color: darkMode ? DarkTheme.bright : LightTheme.bright,
    fontWeight: '400',
    textDecorationLine: 'none'
})
const styles = StyleSheet.create({

})
