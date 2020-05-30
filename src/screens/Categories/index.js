import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, ActivityIndicator} from 'react-native'

import styles from './styles'
import api from '../../services/api'
import commonstyles from '../../commonStyles'

import Header from '../../components/Header'
import RecipeCard from '../../components/RecipeCard'

export default function Categories({ route }){

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  async function getRecipes(){
    setLoading(true)
    
    const response = await api.get(`/recipes/?food_type=${route.params.category}`)
    setRecipes(response.data.results)

    setLoading(false)
  }

  useEffect(() => {
    getRecipes()
  }, [])

  if(loading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Header />
        <ActivityIndicator size="large" color={commonstyles.colors.primary}/>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>{route.params.title}</Text>
        <FlatList 
          data={recipes}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) =>  <RecipeCard 
                                    horizontal
                                    id={item.id}
                                    loading={loading}
                                    author={item.author.username}
                                    title={item.title} 
                                    image={item.image} 
                                    time={item.time} 
                                    amount={item.food_yield}
                                    ingredients={item.ingredients}
                                    steps={item.steps}
                                    additional={item.additional_information}
                                    />}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    )
  }
}