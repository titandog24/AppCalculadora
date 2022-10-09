import React from 'react'
import { SafeAreaView, StatusBar, Text } from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen'
import { Styles } from './src/theme/appTheme'



const App = () => {
  return (
    <SafeAreaView style={Styles.fondo}>
      <StatusBar 
      backgroundColor={'red'}
      barStyle={'light-content'}
      />
      <CalculadoraScreen />
    </SafeAreaView>
  )
}

export default App