import React, { useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LessonModule from '../components/Modulo';
import { Ionicons } from '@expo/vector-icons'; // Ícone de seta

const { width, height } = Dimensions.get('window');

export default function MainScreen() {
  const navigation = useNavigation(); 

  // ⬅️ Configura o botão de voltar no topo
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
    });
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Módulos</Text>

      <LessonModule
        title="Começando a Jornada"
        subtitle="O que é Banco de Dados ?"
        image={require('../images/modulo/modulo1.png')}
      />
      <LessonModule
        title="Caixinhas Mágicas"
        subtitle="Tabelas, Linhas, Colunas e Campos"
        image={require('../images/modulo/modulo2.png')}
      />
      <LessonModule
        title="Segredos do Cofre"
        subtitle="As Chaves do Banco!"
        image={require('../images/modulo/modulo3.png')}
      />
      <LessonModule
        title="Amizades entre Tabelas"
        subtitle="Como Tudo se Conecta!"
        image={require('../images/modulo/modulo4.png')}
      />
      <LessonModule
        title="Tudo no seu Lugar"
        subtitle="Tipos de Informações"
        image={require('../images/modulo/modulo5.png')}
      />
      <LessonModule
        title="Detetive do Banco"
        subtitle="Descobrindo, Mudando e Apagando!"
        image={require('../images/modulo/modulo6.png')}
      />
      <LessonModule
        title="Missão Prática"
        subtitle="Mãos na Massa!"
        image={require('../images/modulo/modulo7.png')}
      />
      <LessonModule
        title="Construa Seu Mundo!"
        subtitle="Projeto Final"
        image={require('../images/modulo/modulo8.png')}
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
