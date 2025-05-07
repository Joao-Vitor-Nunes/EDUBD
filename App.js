import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './screens/HomeScreen';
import Start from './screens/Start';
import MainScreen from './screens/MainScreen';
import ScrollHorizontal from './screens/content/Content1';
import QuizModulo1 from './screens/quiz/QuizModulo1';

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

        <Stack.Screen 
          name="Content1" 
          component={ScrollHorizontal} 
          options={{ title: 'Módulo: Introdução' }} 
        />

        <Stack.Screen 
          name="QuizModulo1" 
          component={QuizModulo1} 
          options={{ title: 'Quiz - Módulo 1' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
