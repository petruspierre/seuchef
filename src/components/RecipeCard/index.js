import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import styles from './styles'

export default function RecipeCard(props){
  return(
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{uri: props.image}}/>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.portion}>{props.amount} porções</Text>
        <Text style={styles.time}>{props.time} min</Text>
      </View>
    </TouchableOpacity>
  )
}

