import React, {useState, useEffect} from 'react';
import { Image, AsyncStorage, ActivityIndicator, Picker, Text, View, TouchableOpacity, TextInput, StyleSheet, Alert, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'
import api from '../../services/api'

import Header from '../../components/Header'
import Button from '../../components/Button'
import commonStyles from '../../commonStyles';

export default function AddRecipe() {

  const [flatListStyle, setFlatListStyle] = useState({
    height: 0,
  })
  const [stepsFlatListStyle, setStepsFlatListStyle] = useState({
    height: 0,
  })
  const [name, setName] = useState('')
  const [type, setType] = useState('DOC')
  const [ingredients, setIngredients] = useState([])
  const [ingredientsInput, setIngredientsInput] = useState('')
  const [steps, setSteps] = useState([])
  const [stepsInput, setStepsInput] = useState('')
  const [time, setTime] = useState('')
  const [portion, setPortion] = useState('')
  const [aditionalInfo, setAditionalInfo] = useState('')
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSendPic(){
    if(ImagePicker.getCameraPermissionsAsync() && ImagePicker.getCameraRollPermissionsAsync()){
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [5, 5],
          quality: 1,
        });

        if (!result.cancelled) {
          setImage(result.uri)
        }

      } catch (err) {
        Alert.alert('Erro', err);
      }
    } else {
      ImagePicker.requestCameraPermissionsAsync()
      ImagePicker.requestCameraRollPermissionsAsync()
    }
  }

  async function handleSubmitRecipe(){
    if(!name || !type || ingredients.length === 0 || steps.length === 0 || !image || !portion || !time){
      Alert.alert('Erro', "Preencha todos os campos")
    } else {
      try {
        setLoading(true)

        const data = {
          title: name,
          time: parseInt(time),
          food_yield: parseInt(portion),
          ingredients: ingredients,
          steps: steps,
          additional_information: aditionalInfo,
          food_type: type
        }

        const token = await AsyncStorage.getItem('token')

        const response = await api.post('/recipes/self/', data, {
          headers: {
            Authorization: `Token ${token}`
          }
        })

        const recipeId = response.data.id

        const imageData = new FormData()

        imageData.append('image', {
          uri: image,
          name: `image-recipe-${recipeId}-${Math.random().toString(36).substring(7)}.jpg`,
          type: 'image/jpg',
        })

        await api.put(`/recipes/self/${recipeId}/image/`, imageData, {
          headers: {
            Authorization: `Token ${token}`
          }
        })

        setName('')
        setImage(null)
        setTime('')
        setPortion('')
        setIngredientsInput('')
        setIngredients([])
        setSteps([])
        setStepsInput('')
        setType('DOC')
        setAditionalInfo('')

        setLoading(false)
      } catch(err) {
        Alert.alert('Erro', String(err))
        setLoading(false)
      }
    }
  }

  function handleAddIngredient(){
    if(!ingredientsInput){
      Alert.alert('Erro', 'Preencha o campo de ingredientes para adicionar')
    } else {
      setIngredients(ingredients => [...ingredients, ingredientsInput])
      setIngredientsInput('')
      // console.log(ingredients)
    }
  }

  async function handleAddStep(){
    if(!stepsInput){
      Alert.alert('Erro', 'Preencha o campo de modo de preparo para adicionar')
    } else {
      setSteps(steps => [...steps, stepsInput])
      setStepsInput('')
      // console.log(steps)
    }
  }

  function handleDeleteIngredient(){
    let aux = ingredients
    const data = aux.slice(0, ingredients.length - 1)
    setIngredients(data)
  }

  function handleDeleteStep(){
    let aux = steps
    const data = aux.slice(0, steps.length - 1)
    setSteps(data)
  }


  function defineIngredientsListHeight(){
    const tamanho = ingredients.length * 30
    // console.log(tamanho)
    if(ingredients.length < 3) {
      setFlatListStyle({
        height: tamanho
      })
    } else {
      setFlatListStyle({
        height: 90
      })
    }
  }

  function defineStepsListHeight(){
    const tamanho = steps.length * 30
    // console.log(tamanho)
    if(steps.length < 3) {
      setStepsFlatListStyle({
        height: tamanho
      })
    } else {
      setStepsFlatListStyle({
        height: 90
      })
    }
  }

  useEffect(() => {
    defineIngredientsListHeight()
  }, [ingredients])

  useEffect(() => {
    defineStepsListHeight()
  }, [steps])

  if(loading) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={{flex: 1, justifyContent: "center"}}>
          <ActivityIndicator size="large" color={commonStyles.colors.primary}/>
        </View>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView nestedScrollEnabled showsVerticalScrollIndicator={false} style={{width: '100%'}} contentContainerStyle={{alignItems: "center"}}>
          <Header />
  
          <View style={styles.imagePickContainer}>
            {!image ? <View style={styles.imagePicker}/> : <Image source={{uri: image}} style={styles.imagePicker}/>}
            <View>
              <Text style={styles.textPick}>escolha a melhor foto de sua receita :)</Text>
              <TouchableOpacity style={styles.button} onPress={handleSendPic}>
                <Text style={styles.buttonText}>enviar foto</Text>
              </TouchableOpacity>
            </View>
          </View>
          

          <View style={styles.baseInput}>
            <Text style={styles.title}>titulo</Text>
            <TextInput 
              style={[styles.input]}
              value={name}
              onChangeText={text => setName(text)}  
            />
          </View>

          <View style={styles.baseInput}>
            <Text style={styles.title}>categoria</Text>
            <View style={styles.input}>
              <Picker 
                selectedValue={type}
                style={{height: '100%', width: '100%', borderRadius: 8}}
                onValueChange={(item) => setType(item)}>
                  <Picker.Item label="Doce" value="DOC"/>
                  <Picker.Item label="Fast Food" value="FAS"/>
                  <Picker.Item label="Brasileira" value="BRA"/>
                  <Picker.Item label="Asiática" value="ASI"/>
              </Picker>
            </View>
          </View>

          <View style={styles.details}>
            <View>
              <Text style={styles.title}>preparo</Text>
              <View style={styles.detailBaseInput}>
                <TextInput 
                  style={styles.detailInput}
                  value={time}
                  onChangeText={text => setTime(text)}  
                  placeholder="ex.: 35"
                  keyboardType="number-pad"
                />
                <Text>minutos</Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>rendimento</Text>
              <View style={styles.detailBaseInput}>
                <TextInput 
                  style={styles.detailInput}
                  value={portion}
                  onChangeText={text => setPortion(text)}  
                  placeholder="ex.: 3"
                  keyboardType="number-pad"
                />
                <Text>porções</Text>
              </View>
            </View>
          </View>

          <View style={styles.baseInput}>
            <Text style={styles.title}>lista de igredientes</Text>

            <View style={{flexDirection: "row", alignItems: "center"}}>
              <TextInput 
                style={[styles.input, {width: 320}]}
                value={ingredientsInput}
                onChangeText={text => setIngredientsInput(text)}
                placeholder="ex.: uma colher (sopa) de manteiga" 
                onSubmitEditing={handleAddIngredient} 
              />

              <TouchableOpacity style={{marginLeft: 5}} onPress={handleAddIngredient}>
                <Feather name="plus" size={30}/>
              </TouchableOpacity>
            </View>

          </View>

          <View style={flatListStyle}>
            <FlatList
              nestedScrollEnabled
              data={ingredients}
              renderItem={({item, index}) => 
              (<View style={{marginVertical: 2, flexDirection: "row", width: 350, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: StyleSheet.hairlineWidth}}>
                <Text style={{width: 300, fontSize: 16}}>{item}</Text>

                {index === ingredients.length-1 && 
                  (<TouchableOpacity onPress={handleDeleteIngredient} style={{justifyContent: "center", alignItems: "center"}}>
                    <Feather name="trash" size={20} color="#777" />
                  </TouchableOpacity>)}
              </View>)}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>

          <View style={styles.baseInput}>
            <Text style={styles.title}>modo de preparo</Text>

            <View style={{flexDirection: "row", alignItems: "center"}}>
              <TextInput 
                style={[styles.input, {width: 320}]}
                value={stepsInput}
                onChangeText={text => setStepsInput(text)}
                placeholder="ex.: junte a carne e doure por 15 minutos"  
                onSubmitEditing={handleAddStep}
              />

              <TouchableOpacity style={{marginLeft: 5}} onPress={handleAddStep}>
                <Feather name="plus" size={30}/>
              </TouchableOpacity>
            </View>

          </View>

          <View style={stepsFlatListStyle}>
            <FlatList
              nestedScrollEnabled
              data={steps}
              renderItem={({item, index}) => 
              (<View style={{marginVertical: 2, flexDirection: "row", width: 350, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: StyleSheet.hairlineWidth}}>
                <Text style={{width: 300, fontSize: 16}}>{index+1}. {item}</Text>

                {index === steps.length-1 && 
                  (<TouchableOpacity onPress={handleDeleteStep}>
                    <Feather name="trash" size={25} color="#777" />
                  </TouchableOpacity>)}
              </View>)}
              keyExtractor={(_, index) => index.toString()}
            />
          </View>

          <View style={styles.baseInput}>
            <Text style={styles.title}>informação adicional</Text>
            <TextInput 
              style={styles.input}
              value={aditionalInfo}
              onChangeText={text => setAditionalInfo(text)}
              placeholder="ex.: pode substituir o óleo por azeite"  
            />
          </View>

          <View style={{marginVertical: 16}}>
            <Button style={{width: 350}} title="enviar" onPress={handleSubmitRecipe}/>
          </View>
  
        </KeyboardAwareScrollView>
  
      </View>
    );
  }
}