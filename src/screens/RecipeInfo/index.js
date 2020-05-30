import React, {useEffect, useState} from 'react'
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  AsyncStorage
} from 'react-native'
import { Feather, FontAwesome } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import api from '../../services/api'
import commonStyles from '../../commonStyles'
import styles from './styles'

export default function RecipeInfo({route, navigation}){

  const [loadingFavorite, setLoadingFavorite] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)

  async function handleFavorite(){

    if(!loadingFavorite){

      const token = await AsyncStorage.getItem('token')

      setLoadingFavorite(true)
      await api.post(`/recipes/self/favorite/${route.params.id}`, {}, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      setLoadingFavorite(false)
      loadFavorite()
    }    

  }

  async function loadFavorite(){
    setLoadingFavorite(true)

    const token = await AsyncStorage.getItem('token')
    const response = await api.get('/users/self/favorites/', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
    const results = response.data.results
    const favorites = results.filter(value => {
      return value.id === route.params.id
    })

    if(favorites.length === 0){
      setIsFavorite(false)
    } else {
      setIsFavorite(true)
    }

    setLoadingFavorite(false)
  }

  useEffect(() => {
    loadFavorite()
  },[route.params.id])

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="black"/>

      <LinearGradient colors={['rgba(0,0,0,0.4)','rgba(0,0,0,0.0)']} start={[0.0, 0.4]} end={[0.0,1.0]} style={styles.header}>
        <TouchableOpacity style={styles.headerIcon} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={32} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerIcon} onPress={handleFavorite}>
          {loadingFavorite ? <ActivityIndicator size="large" color="#fff"/> : 
             isFavorite ? <FontAwesome name="heart" size={30} color={commonStyles.colors.primary}/> : <FontAwesome name="heart-o" size={30} color="#fff"/>}
        </TouchableOpacity>
      </LinearGradient> 

      <Image style={styles.image} source={{uri: route.params.image}}/>
      <View style={styles.insideContainer}>

          <View style={{}}>
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
          </View>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.scrollContainer}>

            <View style={styles.card}>
              <Text style={styles.cardTitle}>igredientes</Text>
              <FlatList
                style={{width: '100%', marginBottom: 8}} 
                data={route.params.ingredients}
                renderItem={({ item }) => <Text style={styles.listText}>• {item}</Text>}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>

            <View style={[styles.card, {marginRight: ((route.params.additional).length > 0) ? 0 : 32}]}>
              <Text style={styles.cardTitle}>modo de preparo</Text>
              <FlatList
                style={{width: '100%', marginBottom: 8}} 
                data={route.params.steps}
                renderItem={({ item, index }) => (
                  <View style={{flexDirection: "row", marginHorizontal: 16, justifyContent: "flex-start", width: '80%'}}>
                    <Text style={[styles.listText, {marginHorizontal: 0, fontSize: 24}]}>{index+1}. </Text>
                    <Text style={[styles.listText, {marginHorizontal: 0, marginTop: 11,}]}>{item}</Text>
                  </View>)}
                keyExtractor={(_, index) => index.toString()}
              />
            </View>

            {(route.params.additional).length > 0 && (
              <View style={[styles.card, {marginRight: 32}]}>
                <Text style={styles.cardTitle}>informações adicionais</Text>
                <ScrollView style={{marginBottom: 8}}>
                  <Text style={styles.additional}>{route.params.additional}</Text>
                </ScrollView>
              </View>
            )}

          </ScrollView>
        </View>
    </View>
  )
}