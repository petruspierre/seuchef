import React, {useState} from 'react'
import { AppLoading } from 'expo'

import { useFonts } from '@use-expo/font';

import Routes from './src/Routes'

export default function App(){

  const [fontsLoaded, setFontsLoaded] = useFonts({
    'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
    'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
    'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf')
  })

  if(fontsLoaded){
    return (
      <Routes />
    )
  } else {
    return (
      <AppLoading />
    )
  }
}