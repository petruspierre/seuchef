import React, {useState} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native'

import styles from './styles'
import commonStyles from '../../commonStyles'

import Button from '../../components/Button'
import Input from '../../components/Input'

import bg from '../../../assets/registro.png'

export default function Login({ navigation }){

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mode, setMode] = useState('login')

  function handleSwitchMode(){
    mode === 'login' ? setMode('register') : setMode('login')
  }

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
              </KeyboardAvoidingView>
            ) : (
              <View style={styles.registerContainer}>
                <Input 
                  title="nome"
                  placeholder="ex.: joão silva"
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
            )}

            <View style={styles.bottom}>
              <TouchableOpacity onPress={handleSwitchMode}>
                <Text style={styles.switchMode} >{mode === 'login' ? 'ainda não possuo cadastro' : 'já possuo cadastro'}</Text>
              </TouchableOpacity>
              <Button title={mode === 'login' ? 'entrar' : 'registrar'} onPress={() => navigation.navigate('Home')}/> 
            </View>

          </View>
      </ImageBackground>

    </View>
  )
}