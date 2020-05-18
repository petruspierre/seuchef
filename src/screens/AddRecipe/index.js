import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles'

import Header from '../../components/Header'

export default function AddRecipe() {

  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [aditionalInfo, setAditionalInfo] = useState('')

  return (
    <View style={styles.container}>

      <Header />

      <View style={styles.imagePickContainer}>
        <View style={styles.imagePicker}/>
        <View>
          <Text style={styles.textPick}>escolha a melhor foto de sua receita :)</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>enviar foto</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}