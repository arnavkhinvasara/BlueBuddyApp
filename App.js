import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import RNFirebase from 'react-native-firebase'
import keys from './config/keys'

import Register from './screens/Register'
import Dashboard from './screens/Dashboard'

const Stack = createStackNavigator()

export default function App() {
  if (!RNFirebase.apps.length) {
    console.log('Connected with Firebase')
    RNFirebase.initializeApp(keys.firebaseConfig)
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Register' component={Register} initialParams={{tester: 'HIII'}}/>
        <Stack.Screen name='Dashboard' component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
