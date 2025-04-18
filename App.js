import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import Start from './screens/Start';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">

      <Stack.Screen 
          name="Start" 
          component={Start} 
          options={{ title: 'Start' }}
        />

        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Bem-vindo' }}
        />

        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ title: 'Main' }}
        />  

      </Stack.Navigator>
    </NavigationContainer>
  );
}
