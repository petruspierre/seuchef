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
    navigation.navigate('RecipeInfo', {id: props.id, image: props.image, title: props.title, author: props.author, time: props.time, amount: props.amount, ingredients: props.ingredients, steps: props.steps})
  }

  if(props.horizontal){
    return (
      <TouchableOpacity style={styles.horizontalContainer} onPress={handleOpenRecipe}>
        <Image style={styles.image} source={{uri: props.image}}/>
        <View style={{width: 200}}>
          <Text style={[styles.title, {fontSize: 16, width: 192}]}>{props.title}</Text>
          <View style={styles.horizontalDetailContainer}>
            <Text style={styles.horizontalPortion}>{props.amount} porções</Text>
            <Text style={styles.horizontalTime}>{props.time} min</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  } else {
    return(
      <TouchableOpacity style={[styles.container]} onPress={handleOpenRecipe}>
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
}

