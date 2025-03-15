import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCommonStyles } from './src/common/commonStyle'
import { DarkTheme, LightTheme, StaticColors } from './src/theme/StaticColors'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/navigationStack'
import { Provider } from 'react-redux'
import { store } from './src/reduxStoreAndSlice/store'
import { ThemeContextProvider, useTheme } from './src/theme/themeContext'

export default function App() {
  const commonStyle = useCommonStyles()
  const {isDarkTheme}= useTheme()
  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaView style={commonStyle.mainContainer}>
            <StatusBar backgroundColor={isDarkTheme ? DarkTheme.background : LightTheme.background}
              barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
            />
            <StackNavigator />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </ThemeContextProvider>
  )
}
