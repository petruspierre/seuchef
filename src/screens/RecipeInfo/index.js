import React from 'react'
import {
  View,
  Image,
  Text,
  ScrollView
} from 'react-native'

import styles from './styles'

export default function RecipeInfo({route}){
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: route.params.image}}/>
      
        <View style={styles.insideContainer}>

          <Text style={styles.title}>{route.params.title}</Text>
          <Text style={styles.author}>por {route.params.author}</Text>

          <View style={styles.headerRow}>
            <Text style={styles.headerSectionTitle}>preparo</Text>
            <Text style={styles.headerSectionTitle}>rendimento</Text>
          </View>
          <View style={styles.headerRow}>
            <Text style={styles.headerInfo}>{route.params.time} min</Text>
            <Text style={styles.headerInfo}>{route.params.amount} porções</Text>
          </View>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollContainer}>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>igredientes</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>modo de preparo</Text>
            </View>

          </ScrollView>
        </View>
      </View>
  )
}