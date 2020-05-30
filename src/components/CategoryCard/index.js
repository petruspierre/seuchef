import React from 'react'

import {TouchableOpacity, Image, Text, View, AsyncStorage} from 'react-native'

import styles from './styles'

export default function CategoryCard(props){

  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image style={styles.image} source={{uri: props.image}}/>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}