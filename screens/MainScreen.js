import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LessonModule from '../components/Modulo';

const { width, height } = Dimensions.get('window');

export default function MainScreen() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Módulos</Text>

      <LessonModule
      title="Começando a Jornada"
      subtitle="O que é Banco de Dados ?"
      image = {require('../images/modulo/modulo1.png')}/>

    <LessonModule
      title="Caixinhas Mágicas"
      subtitle="Tabelas, Linhas, Colunas e Campos"
      image = {require('../images/modulo/modulo2.png')}/>

  <LessonModule
        title="Segredos do Cofre"
        subtitle="As Chaves do Banco!"
        image = {require('../images/modulo/modulo3.png')}/>

  <LessonModule
        title="Amizades entre Tabelas"
        subtitle="Como Tudo se Conecta!"/>

  <LessonModule
        title="Tudo no seu Lugar"
        subtitle="Tipos de Informações"/>

  <LessonModule
        title="Detetive do Banco"
        subtitle="Descobrindo, Mudando e Apagando!"/> 
      
  <LessonModule
        title="Missão Prática"
        subtitle="Mãos na Massa!"/> 
  <LessonModule
        title="Construa Seu Mundo!"
        subtitle="Projeto Final"/> 

    </View>
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
  
    textInitial: {
      textAlign: 'center',
      fontSize: width * 0.04,
      color: '#333',
      marginVertical: height * 0.015,
    },  
    
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      bottom: width * 0.13,
    },
  });
  
