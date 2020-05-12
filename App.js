import React, {useState} from 'react'
import { AppLoading } from 'expo'

import * as Font from 'expo-font'

import Routes from './src/Routes'

async function initialConfig(){
  try {
    Font.loadAsync({
      'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
      'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
      'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
      'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf')
    })
  } catch(err){
    console.log(err)
  }
}

export default function App(){

  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <Routes />
    )
  } else {
    return (
      <AppLoading startAsync={initialConfig} onFinish={() => setFontsLoaded(true)}/>
    )
  }
}