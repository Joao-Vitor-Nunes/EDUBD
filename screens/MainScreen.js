import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LessonModule from '../components/Modulo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons'; // Ícone de seta

const { width, height } = Dimensions.get('window');

export default function MainScreen() {

  const unlockedModules = [1]; // Só o primeiro módulo liberado por enquanto

  const isModuleUnlocked = (moduleNumber) => {
    return unlockedModules.includes(moduleNumber);
  };
  

  const navigation = useNavigation(); 

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Logout', 'Dados limpos com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível limpar os dados.');
      console.error('Erro ao limpar AsyncStorage:', error);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity 
          style={{ marginLeft: 15 }} 
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Start' }],
            });
          }}
        >
          <Ionicons name="arrow-back" size={24} color="#6c00ff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity 
          style={{ marginRight: 15 }} 
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={24} color="#e53935" />
        </TouchableOpacity>
      ),
      headerTitle: 'Seja bem-vindo!',
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Módulos</Text>

      <LessonModule
        title="Começando a Jornada"
        subtitle="O que é Banco de Dados ?"
        image={require('../images/modulo/modulo1.png')}
        onPress={() => navigation.navigate('Content1')}
        locked={!isModuleUnlocked(1)}
      />
      <LessonModule
        title="Caixinhas Mágicas"
        subtitle="Tabelas, Linhas, Colunas e Campos"
        image={require('../images/modulo/modulo2.png')}
        onPress={() => navigation.navigate('Content2')}
        locked={!isModuleUnlocked(2)}
      />
      <LessonModule
        title="Segredos do Cofre"
        subtitle="As Chaves do Banco!"
        image={require('../images/modulo/modulo3.png')}
        onPress={() => navigation.navigate('Content2')}
        locked={!isModuleUnlocked(3)}
      />
      <LessonModule
        title="Amizades entre Tabelas"
        subtitle="Como Tudo se Conecta!"
        image={require('../images/modulo/modulo4.png')}
        onPress={() => navigation.navigate('Content2')}
        locked={!isModuleUnlocked(4)}
      />
      <LessonModule
        title="Tudo no seu Lugar"
        subtitle="Tipos de Informações"
        image={require('../images/modulo/modulo5.png')}
        onPress={() => navigation.navigate('Content2')}
        locked={!isModuleUnlocked(5)}
      />
      <LessonModule
        title="Detetive do Banco"
        subtitle="Descobrindo, Mudando e Apagando!"
        image={require('../images/modulo/modulo6.png')}
        onPress={() => navigation.navigate('Content2')}
        locked={!isModuleUnlocked(6)}
      />
      <LessonModule
        title="Missão Prática"
        subtitle="Mãos na Massa!"
        image={require('../images/modulo/modulo7.png')}
        onPress={() => navigation.navigate('Content2')}
        locked={!isModuleUnlocked(7)}
      />
      <LessonModule
        title="Construa Seu Mundo!"
        subtitle="Projeto Final"
        image={require('../images/modulo/modulo8.png')}
        onPress={() => navigation.navigate('Content2')}
        locked={!isModuleUnlocked(8)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: width * 0.05,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    bottom: width * 0.13,
  },
});
