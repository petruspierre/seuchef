import React, {useState, useEffect} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  AsyncStorage,
  ActivityIndicator,
  Alert
} from 'react-native'

import commonStyles from '../../commonStyles'
import styles from './styles'
import api from '../../services/api'

import Button from '../../components/Button'
import Input from '../../components/Input'

import bg from '../../../assets/registro.png'

export default function Login({ navigation }){

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mode, setMode] = useState('login')
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSwitchMode(){
    mode === 'login' ? setMode('register') : setMode('login')
  }

  async function handleSubmit(){
    if(mode === 'login'){
      if(!name || !password){
        setShowError(true)
        setErrorMessage('Preencha todos os campos')
        return
      }

      setShowError(false)
      setLoading(true)

      const data = {
        username: name,
        password
      }

      try {
        const response = await api.post('/users/login/', data)
        await AsyncStorage.setItem('token', response.data.token)
  
        const {data: {username, id, image}} = await api.get('/users/self/', {
          headers: {
            Authorization: `Token ${response.data.token}`
          }
        })
  
        if(image !== null){
          await AsyncStorage.setItem('image', image)
        } else {
          await AsyncStorage.removeItem('image')
        }
        await AsyncStorage.setItem('username', username)
        await AsyncStorage.setItem('id', String(id))
        console.log("(Login) " + image + " / username: " + username + " / id: " + id)
      } catch(err){
        Alert.alert('Erro', String(err))
      }
      
      setLoading(false)

      navigation.navigate('Home')

    } else if(mode === 'register'){
      if(!name || !password || !email || !confirmPassword){
        setShowError(true)
        setErrorMessage('Preencha todos os campos')
        return
      } else if(password !== confirmPassword){
        setShowError(true)
        setErrorMessage('As senhas devem ser iguais')
        return
      }
      else if(password.length < 6 || password.length > 16){
        setShowError(true)
        setErrorMessage('A senha deve ter entre 6 e 16 caracteres')
        return
      }
      setShowError(false)
      setLoading(true)

      const data = {
        username: name,
        email,
        password
      }

      await api.post('/users/', data)
      setMode('confirmation')

      setLoading(false)
    } else {
      if(!code){
        setShowError(true)
        setErrorMessage('Preencha todos os campos')
        return
      }

      try {
        setShowError(false)
        setLoading(true)
  
        const data = {
          activation_token: code
        }
  
        const response = await api.post('/users/active-account/', data)
        setMode('login')
        setLoading(false)
      } catch(err){
        Alert.alert('Erro', 'Código inválido')
        setLoading(false)
      }
 
    }
  }

  async function checkLogin(){
    const token = await AsyncStorage.getItem('token')
    if(token){
      navigation.navigate('Home')
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])

  if(loading){
    return (
      <View style={styles.container}>
  
        <ImageBackground source={bg} style={styles.image}>
            <View style={styles.insideContainer}>
              <ActivityIndicator size="large" color={commonStyles.colors.primary}/>
            </View>
        </ImageBackground>
  
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
  
        <ImageBackground
          source={bg}
          style={styles.image}
          >
  
            <View style={styles.insideContainer}>
  
              <Text style={styles.title}>{mode === 'login' ? 'Bem vindo, chef' : 'Se junte a nós!'}</Text>
  
              {mode === 'login' ? (
                <KeyboardAvoidingView behavior="position" style={styles.loginContainer}>
                  <Input 
                    title="nome"
                    value={name}
                    onChange={text => setName(text)}  
                  />
                  <Input 
                    password
                    title="senha"
                    value={password}
                    onChange={text => setPassword(text)}  
                  />
                </KeyboardAvoidingView>
              ) : mode === 'register' ? (
                <View style={styles.registerContainer}>
                  <Input 
                    title="nome de usuário"
                    placeholder="ex.: joaosilva"
                    value={name}
                    onChange={text => setName(text)}  
                  />
                  <Input 
                    title="email"
                    placeholder="ex.: joaosilva@gmail.com"
                    value={email}
                    onChange={text => setEmail(text)}  
                  />
                  <Input 
                    password
                    title="senha"
                    value={password}
                    onChange={text => setPassword(text)}  
                  />
                  <Input 
                    password
                    title="confirmar senha"
                    value={confirmPassword}
                    onChange={text => setConfirmPassword(text)}  
                  />
                </View>
              ) : (
                <KeyboardAvoidingView behavior="position" style={styles.loginContainer}>
                  <Input 
                    title="código recebido no email"
                    placeholder="ex.: 1A2b3c4D"
                    value={code}
                    onChange={text => setCode(text)}  
                  />
                </KeyboardAvoidingView>
              )}
  
              <View style={styles.bottom}>
                {showError && <Text style={{color: 'red', fontSize: 13,}}>{errorMessage}</Text>}
                <TouchableOpacity onPress={handleSwitchMode}>
                  <Text style={styles.switchMode} >{mode === 'login' ? 'ainda não possuo cadastro' : mode === 'register' && 'já possuo cadastro'}</Text>
                </TouchableOpacity>
                <Button title={mode === 'login' ? 'entrar' : 'registrar'} onPress={handleSubmit}/> 
              </View>
  
            </View>
        </ImageBackground>
  
      </View>
    )
  }
}