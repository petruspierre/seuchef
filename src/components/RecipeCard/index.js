import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

export default function RecipeCard(props){

  const navigation = useNavigation()

  function handleOpenRecipe(){
    navigation.navigate('RecipeInfo', {image: props.image, title: props.title, author: props.author, time: props.time, amount: props.amount})
  }

  return(
    <TouchableOpacity style={styles.container} onPress={handleOpenRecipe}>
      <Image style={styles.image} source={{uri: props.image}}/>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.portion}>{props.amount} porções</Text>
        <Text style={styles.time}>{props.time} min</Text>
      </View>
    </TouchableOpacity>
  )
}

