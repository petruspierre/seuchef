import React, {useState, useEffect, useCallback} from 'react';
import { Text, View, TextInput, FlatList, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';

import api from '../../services/api'
import styles from './styles'
import commonStyles from '../../commonStyles'

import Header from '../../components/Header'
import CategoryCard from '../../components/CategoryCard'
import RecipeCard from '../../components/RecipeCard'

export default function Home({ navigation }) {

  const [search, setSearch] = useState('')
  const [loadingRecents, setLoadingRecents] = useState(true)
  const [loadingPopular, setLoadingPopular] = useState(true)
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [refresh, setRefresh] = useState(false)
  const [loadingRecipes, setLoadingRecipes] = useState(false)

  const [categories, ] = useState([
    {
      id: 1,
      name: 'brasileira',
      alias: 'BRA',
      image: 'https://s2.glbimg.com/uRYjx6NzozEZV0ZRl3OWyHVipxs=/0x0:340x263/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/15/27/43/914/feijoada.jpg'
    },
    {
      id: 2,
      name: 'bolos e tortas',
      alias: 'BOL',
      image: 'https://img.itdg.com.br/tdg/images/recipes/000/029/124/320646/320646_original.jpg?mode=crop&width=710&height=400'
    },
    {
      id: 3,
      name: 'carnes',
      alias: 'CAR',
      image: 'https://img.cybercook.com.br/receitas/651/como-fazer-carne-de-panela-receita-da-mae-623x350.jpeg'
    },
    {
      id: 4,
      name: 'chinesa',
      alias: 'CHI',
      image: 'https://abrilclaudia.files.wordpress.com/2016/10/receita-yakissoba.jpg?quality=85&strip=info&w=620'
    },
    {
      id: 5,
      name: 'doce',
      alias: 'DOC',
      image: 'https://s2.glbimg.com/nnBkJTQZcmSnAsu14zq7LyWqvfI=/e.glbimg.com/og/ed/f/original/2018/09/07/800px-brigadeiro.jpg'
    },
    {
      id: 6,
      name: 'fast food',
      alias: 'FAS',
      image: 'https://www.mercadoeconsumo.com.br/wp-content/uploads/2019/04/Que-comida-saud%C3%A1vel-que-nada-brasileiro-gosta-de-fast-food.jpg'
    },
    {
      id: 7,
      name: 'japonesa',
      alias: 'JAP',
      image: 'https://lh3.googleusercontent.com/proxy/TbRPJGUKPCqVufKX-wpq2kh4iHKuiPneNFfaMiLp9v7ccKAyoBwWl9KyUSqoVH7W2rQ6ymv116L-_Zc9Wrlftj0Ts_ltUcHiB4UmtbY'
    },
    {
      id: 8,
      name: 'mexicana',
      alias: 'MEX',
      image: 'https://superbeal.com.br/img/news/tacos_mexicanos_5dd2853be14e4.jpg'
    },
    {
      id: 9,
      name: 'massas',
      alias: 'MAS',
      image: 'https://cdn.pixabay.com/photo/2017/09/22/17/54/pasta-2776546_960_720.jpg'
    },
    {
      id: 10,
      name: 'saudável',
      alias: 'SAL',
      image: 'https://www.dicasdemulher.com.br/wp-content/uploads/2020/02/comida-saudavel-1200x738.jpg'
    },
  ])

  const [recents, setRecents] = useState([
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

  const [searchRecipes, setSearchRecipes] = useState([])

  async function getRecentRecipes(){
    setLoadingRecents(true)
    const response = await api.get(`/recipes/`)
    setRecents(response.data.results)
    setLoadingRecents(false)
  }

  async function getPopularRecipes(){
    setLoadingPopular(true)
    const response = await api.get(`/recipes/?order=ranking`)
    setPopular(response.data.results)
    setLoadingPopular(false)
  }

  const onRefresh = useCallback(() => {
    setRefresh(true)
    getPopularRecipes()
    getRecentRecipes()
    setRefresh(false)
  }, [refresh])

  useEffect(() => {
    getPopularRecipes()
    getRecentRecipes()
  }, [])

  useEffect(() => {
    async function searchForRecipes(){
      setLoadingSearch(true)
      if(search.length > 3){
        if(loadingRecipes) return
  
        if(!loadingRecipes){
          setLoadingRecipes(true)
          const data = recents.filter(item => (item.title).indexOf(search) !== -1)
          setSearchRecipes(data)
          setLoadingRecipes(false)
        }
      }
      setLoadingSearch(false)
    }
    searchForRecipes()
  }, [search])

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

      {search.length > 0 && loadingSearch && (
        <View style={{flex: 1, justifyContent: "center"}}>
          {loadingSearch && <ActivityIndicator size="large" color={commonStyles.colors.primary}/>}
        </View>
      )}

      {search.length > 0 && (
        <View style={{marginTop: 16, flex: 1, width: '100%', alignItems: "center"}}>
          <FlatList 
            data={searchRecipes}
            renderItem={({item}) => <RecipeCard
                                      horizontal
                                      id={item.id}
                                      loading={loadingRecents}
                                      author={item.author.username}
                                      title={item.title} 
                                      image={item.image} 
                                      time={item.time} 
                                      amount={item.food_yield}
                                      ingredients={item.ingredients}
                                      steps={item.steps}
                                      />}
            keyExtractor={(item) => String(item.index)}/>
        </View>)}

      {!search &&
      (
        <ScrollView 
          refreshControl={<RefreshControl refreshing={refresh} onRefresh={onRefresh}/>}
          style={{marginTop: 24, paddingTop: 8,}}>

          <View 
            style={styles.categories}>
            <FlatList 
              data={categories}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>  <CategoryCard title={item.name} image={item.image} count={item.count} onPress={() => navigation.navigate('Categories', {category: item.alias, title: item.name})}/>}
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
                                        id={item.id}
                                        loading={loadingPopular}
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
          </View >

          <Text style={styles.containerTitle}>Receitas recentes </Text>
          
          <View
            style={styles.categories}>
            <FlatList 
              data={recents}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) =>  <RecipeCard 
                                        id={item.id}
                                        loading={loadingRecents}
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
          </View >
        </ScrollView>
      )}



    </View>
  );
}