import React from 'react'

import {
  TouchableOpacity,
  Text
} from 'react-native'

import styles from './styles'

export default function Button(props){
  return (
    <TouchableOpacity style={[styles.button, props.style]} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}