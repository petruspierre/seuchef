import React, {useEffect} from 'react'
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './styles'

export default function RecipeInfo({route, navigation}){

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="black"/>

      <LinearGradient colors={['rgba(0,0,0,0.4)','rgba(0,0,0,0.0)']} start={[0.0, 0.4]} end={[0.0,1.0]} style={styles.header}>
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={32} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIcon}>
          <Feather name="bookmark" size={32} color="#fff"/>
        </TouchableOpacity>
      </LinearGradient> 

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
              <FlatList
                style={{width: '100%'}} 
                data={route.params.ingredients}
                renderItem={({ item }) => <Text style={styles.listText}>• {item}</Text>}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>

            <View style={[styles.card, {marginRight: 32}]}>
              <Text style={styles.cardTitle}>modo de preparo</Text>
              <FlatList
                style={{width: '100%'}} 
                data={route.params.steps}
                renderItem={({ item, index }) => <Text style={styles.listText}>{index+1} {item}</Text>}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>

          </ScrollView>
        </View>
    </View>
  )
}