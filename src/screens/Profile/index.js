import React, { useState } from 'react';
import { Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'

import Header from '../../components/Header'
import RecipeCard from '../../components/RecipeCard'

export default function Profile({ route }) {

  const [popular, setPopular] = useState([
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

  return (
    <View style={styles.container}>

      <Header />
      <View style={styles.header}>
        <TouchableOpacity style={{position: "absolute", left: 32, bottom: 56,}}>
          <Feather name="log-out" size={20}/>
        </TouchableOpacity>
        <Feather style={{position: "absolute", right: 32, bottom: 56,}} name="edit" size={20}/>

        <Image style={styles.image} source={{uri: 'https://i.pinimg.com/originals/f3/f2/4e/f3f24e283775a88fff1fe1c4929d0d9a.jpg'}}/>
        <Text style={styles.username}>Monica Geller</Text>
      </View>

      <ScrollView style={styles.cardContainer}>
        <Text style={styles.cardContainerTitle}>suas receitas</Text>

        <FlatList 
          data={popular}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) =>  <RecipeCard title={item.title} image={item.image} time={item.time} amount={item.amount}/>}
          keyExtractor={(item) => String(item.id)}
        />

        <Text style={styles.cardContainerTitle}>receitas favoritas</Text>

        <FlatList 
          data={popular}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) =>  <RecipeCard title={item.title} image={item.image} time={item.time} amount={item.amount}/>}
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>

    </View>
  );
}