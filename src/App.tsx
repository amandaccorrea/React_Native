import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Categoria from './pages/Categoria';

const TabNavigation = createBottomTabNavigator();

const BottomTabNavigator = () =>{
  return(
  <TabNavigation.Navigator screenOptions={{
    headerShown:false,
    tabBarStyle:{backgroundColor: '#000', borderBottomWidth:0}}}>
    <TabNavigation.Screen name='HomeTabScreen' component={Home}/>
    <TabNavigation.Screen name='CategoriaTabScreen' component={Categoria}/>
  </TabNavigation.Navigator>
)
}

const StackNavigation = createNativeStackNavigator();

 export default () => {
  // return(
  //   <Home/>
  // )
 return(
  <NavigationContainer>
    <StackNavigation.Navigator>
      <StackNavigation.Screen
      name = 'Login'
      component={Login}
      />
      <StackNavigation.Screen
      name = 'Home'
      component={BottomTabNavigator}
      />

    </StackNavigation.Navigator>
  </NavigationContainer>

 
)
    }
