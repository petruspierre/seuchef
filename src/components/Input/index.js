import React from 'react'

import { View, Text, StyleSheet, TextInput } from 'react-native'

function BaseInput({title, children}){
  return (
    <View style={styles.baseInput}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  )
}

export default function Input({ children, value, onChange, password, placeholder, ...props}){
  return (
    <BaseInput {...props}>
      <TextInput placeholder={placeholder} secureTextEntry={password} value={value} onChangeText={onChange} style={styles.input}/>
    </BaseInput>
  )
} 

const styles = StyleSheet.create({
  baseInput:{
    width: 252,
    height: 85,
  },
  title: {
    fontSize: 15,
    fontFamily: commonStyles.fontFamily.medium,
    color: commonStyles.colors.black,
    marginBottom: 8,
  },
  input: {
    width: 252,
    height: 50,
    padding: 8,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
  }
})