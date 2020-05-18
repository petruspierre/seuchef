import React, {useState} from 'react';
import { Text, View, TextInput, FlatList, ScrollView } from 'react-native';

import styles from './styles'

import Header from '../../components/Header'
import CategoryCard from '../../components/CategoryCard'
import RecipeCard from '../../components/RecipeCard'

export default function Home({ navigation }) {

  const [search, setSearch] = useState('')

  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'pizza',
      count: 112,
      image: 'https://pitel.com.br/wp-content/uploads/2019/04/PIZZA-HUT_SANTO-DESCONTO.jpg'
    },
    {
      id: 2,
      name: 'brasileira',
      count: 83,
      image: 'https://s2.glbimg.com/uRYjx6NzozEZV0ZRl3OWyHVipxs=/0x0:340x263/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/27/43/914/feijoada.jpg'
    },
    {
      id: 3,
      name: 'mexicana',
      count: 52,
      image: 'https://superbeal.com.br/img/news/tacos_mexicanos_5dd2853be14e4.jpg'
    }
  ])

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
        {!search && (
          <View>
            <Text style={styles.title}>olá, chef! </Text>

            <Text style={styles.subtitle}> já decidiu o que vai comer hoje? </Text>
          </View>
        )}

          <TextInput
            style={styles.input}
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder="nome da receita"
            autoCapitalize="none"
          />
      </View>

      {!search &&
      (
        <ScrollView style={{marginTop: 24, paddingTop: 8,}}>

          <View 
            style={styles.categories}>
            <FlatList 
              data={categories}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>  <CategoryCard title={item.name} image={item.image} count={item.count}/>}
              keyExtractor={(item) => String(item.id)}
            />
          </View>

          <Text style={styles.containerTitle}>Receitas populares </Text>
          
          <View
            style={styles.categories}>
            <FlatList 
              data={popular}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>  <RecipeCard 
                                        author={item.author}
                                        title={item.title} 
                                        image={item.image} 
                                        time={item.time} 
                                        amount={item.amount}
                                        />}
              keyExtractor={(item) => String(item.id)}
            />
          </View >

          <Text style={styles.containerTitle}>Receitas recentes </Text>
          
          <View
            style={styles.categories}>
            <FlatList 
              data={popular}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>  <RecipeCard title={item.title} image={item.image} time={item.time} amount={item.amount}/>}
              keyExtractor={(item) => String(item.id)}
            />
          </View >
        </ScrollView>
      )}



    </View>
  );
}