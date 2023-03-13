import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './src/Home';
import SafeAreaAndroid from './SafeAreaAndroid';
import Details from './src/Details';

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  )
}