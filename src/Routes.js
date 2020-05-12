import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

import Home from './screens/Home'
import AddRecipe from './screens/AddRecipe'
import Profile from './screens/Profile'

export default function Routes(){

  return (
    <NavigationContainer>
      <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#6979F8',
            inactiveTintColor: '#909090'
          }}>
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({color, size}) => (
              <Feather name="home" color={color} size={size}/>
            )
          }} 
        />
        <Tab.Screen 
          name="Add" 
          component={AddRecipe}
          options={{
            tabBarLabel: 'Enviar receita',
            tabBarIcon: ({color, size}) => (
              <Feather name="plus-square" color={color} size={size}/>
            )
          }} 
        />
        <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarLabel: 'Minha cozinha',
            tabBarIcon: ({color, size}) => (
              <Feather name="user" color={color} size={size}/>
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}