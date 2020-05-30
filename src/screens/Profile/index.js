import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker';

import styles from './styles'
import commonStyles from '../../commonStyles'
import api from '../../services/api'

import Header from '../../components/Header'
import RecipeCard from '../../components/RecipeCard'

export default function Profile({ navigation }) {

  const [username, setUsername] = useState('')
  const [image, setImage] = useState(null)
  const [id, setId] = useState(null)
  const [loading, setLoading] = useState(true)

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      title: 'sopa de mandioquinha',
      image: 'https://img.itdg.com.br/tdg/images/recipes/000/198/564/304145/304145_original.jpg?mode=crop&width=710&height=400',
      amount: 3,
      time: 35,
      author: 'Maria José'
    },
    {
      id: 2,
      title: 'carne de panela com batata',
      image: 'https://craftlog.com/m/i/8480646=s1280=h960',
      amount: 6,
      time: 45,
      author: 'João Leão'
    },
    {
      id: 3,
      title: 'lombo barbecue com farofa de frutas e espinafre frito',
      image: 'https://img.imirante.com.br/2020/04/21/1587471393-887793063-304x175.jpg',
      amount: 4,
      time: 60,
      author: 'João Leão'
    }
  ])
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'sopa de mandioquinha',
      image: 'https://img.itdg.com.br/tdg/images/recipes/000/198/564/304145/304145_original.jpg?mode=crop&width=710&height=400',
      amount: 3,
      time: 35,
      author: 'Maria José'
    },
    {
      id: 2,
      title: 'carne de panela com batata',
      image: 'https://craftlog.com/m/i/8480646=s1280=h960',
      amount: 6,
      time: 45,
      author: 'João Leão'
    },
    {
      id: 3,
      title: 'lombo barbecue com farofa de frutas e espinafre frito',
      image: 'https://img.imirante.com.br/2020/04/21/1587471393-887793063-304x175.jpg',
      amount: 4,
      time: 60,
      author: 'João Leão'
    }
  ])

  async function handleLogout(){
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('id')
    await AsyncStorage.removeItem('username')
    await AsyncStorage.removeItem('image')
    navigation.navigate('Login')
  }

  async function handleEdit(){
    if(ImagePicker.getCameraPermissionsAsync() && ImagePicker.getCameraRollPermissionsAsync()){
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [5, 5],
          quality: 1,
        });

        if (!result.cancelled) {

          const data = new FormData()
          
          data.append('image', {
            uri: result.uri,
            name: `image-${id}-${Math.random().toString(36).substring(7)}.jpg`,
            type: 'image/jpg',
          })

          const token = await AsyncStorage.getItem('token')

          await api.put("/users/self/image/", data, {
            headers: {
              Authorization: `Token ${token}`,
              'Content-Type': 'multipart/form-data'
            }
          })

          setImage(result.uri)
          await AsyncStorage.setItem('image', result.uri)
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      ImagePicker.requestCameraPermissionsAsync()
      ImagePicker.requestCameraRollPermissionsAsync()
    }
  }

  async function loadFavorites(){
    setLoading(true)

    const token = await AsyncStorage.getItem('token')

    const response = await api.get('/users/self/favorites/', {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    setFavorites(response.data.results)

    setLoading(false)
  }

  async function loadRecipes(){
    setLoading(true)
    const token = await AsyncStorage.getItem('token')

    const response = await api.get('/recipes/self/', {
      headers: {
        Authorization: `Token ${token}`
      }
    })

    setRecipes(response.data.results)
    setLoading(false)
  }

  async function getUser(){
    const _image = await AsyncStorage.getItem('image')
    const _username = await AsyncStorage.getItem('username')
    const _id = await AsyncStorage.getItem('id')

    setUsername(_username)
    setId(_id)
    setImage(_image)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      try {
        getUser()
        loadRecipes()
        loadFavorites()
      } catch(err) {
        Alert.alert('Erro ao recuperar dados')
      }
    })

    return unsubscribe
  }, [navigation])

  return (
    <View style={styles.container}>

      <Header />
      <View style={styles.header}>
        <TouchableOpacity style={{position: "absolute", left: 32, bottom: 56,}} onPress={handleLogout}>
          <Feather name="log-out" size={20}/>
        </TouchableOpacity>
        <TouchableOpacity style={{position: "absolute", right: 32, bottom: 56,}} onPress={handleEdit}>
          <Feather name="edit" size={20}/>
        </TouchableOpacity>

        {image !== null ? 
          <Image style={styles.image} source={{ uri: image }}/> : 
        (
          <View style={[styles.image, {backgroundColor: commonStyles.colors.light}]}>
            {username.length > 0 && <Text style={{fontSize: 56, color: 'white'}}>{(username[0]).toUpperCase()}</Text>}
          </View>
        )}
        
        <Text style={styles.username}>{username}</Text>
      </View>

      <ScrollView style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>suas receitas</Text>

        {recipes.length > 0 ? (
          <FlatList 
            data={recipes}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>  <RecipeCard 
                                      id={item.id}
                                      loading={loading}
                                      author={item.author.username}
                                      title={item.title} 
                                      image={item.image} 
                                      time={item.time} 
                                      amount={item.food_yield}
                                      ingredients={item.ingredients}
                                      steps={item.steps}
                                      />}
            keyExtractor={(item) => String(item.id)}
          />
        ) : (
          <View style={styles.emptyWarningContainer}>
            <Text style={styles.emptyWarning}>Parece que você ainda não publicou nenhuma receita :(</Text>
          </View>
        )}

        <Text style={styles.cardContainerTitle}>receitas favoritas</Text>
        {favorites.length > 0 ? (
          <FlatList 
            data={favorites}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>  <RecipeCard 
                                      id={item.id}
                                      loading={loading}
                                      author={item.author.username}
                                      title={item.title} 
                                      image={item.image} 
                                      time={item.time} 
                                      amount={item.food_yield}
                                      ingredients={item.ingredients}
                                      steps={item.steps}
                                      />}
            keyExtractor={(item) => String(item.id)}
          />
        ) : (
          <View style={styles.emptyWarningContainer}>
            <Text style={styles.emptyWarning}>Parece que você ainda não favoritou nenhuma receita :(</Text>
          </View>
        )}
        
      </ScrollView>

    </View>
  );
}