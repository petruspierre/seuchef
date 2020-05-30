import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import Home from './screens/Home'
import AddRecipe from './screens/AddRecipe'
import Profile from './screens/Profile'
import RecipeInfo from './screens/RecipeInfo'
import Login from './screens/Login'
import Categories from './screens/Categories'

import commonStyles from './commonStyles'

function TabNavigator(){
  return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: commonStyles.colors.primary,
          inactiveTintColor: '#909090',
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
  )
}

export default function Routes(){

  return (
    <NavigationContainer>
      
      <Stack.Navigator
        headerMode="hidden"
        initialRouteName='Login'
      >
        <Stack.Screen name='Home' component={TabNavigator}/>
        <Stack.Screen name="RecipeInfo" component={RecipeInfo}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Categories" component={Categories}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}