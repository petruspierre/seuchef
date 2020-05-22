import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import styles from './styles'

export default function RecipeCard(props){

  const navigation = useNavigation()

  function handleOpenRecipe(){
    navigation.navigate('RecipeInfo', {image: props.image, title: props.title, author: props.author, time: props.time, amount: props.amount, ingredients: props.ingredients, steps: props.steps})
  }

  return(
    <TouchableOpacity style={styles.container} onPress={handleOpenRecipe}>
      <ShimmerPlaceHolder style={styles.shimmerImage} autoRun={true} visible={!(props.loading)}>
        <Image style={styles.image} source={{uri: props.image}}/>
      </ShimmerPlaceHolder>
      <ShimmerPlaceHolder style={styles.shimmerTitle} autoRun={true} visible={!(props.loading)}>
        <Text style={styles.title}>{props.title}</Text>
      </ShimmerPlaceHolder>

      <View style={styles.detailContainer}>
        <ShimmerPlaceHolder style={styles.shimmerAmount} autoRun={true} visible={!(props.loading)}>
          <Text style={styles.portion}>{props.amount} porções</Text>
        </ShimmerPlaceHolder>
        <ShimmerPlaceHolder style={styles.shimmerTime} autoRun={true} visible={!(props.loading)}>
          <Text style={styles.time}>{props.time} min</Text>
        </ShimmerPlaceHolder>
      </View>
    </TouchableOpacity>
  )
}

