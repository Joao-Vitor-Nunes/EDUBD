import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import BemVindo from '../components/BemVindo';
import BotaoStart from '../components/BotaoStart';
import { useNavigation } from '@react-navigation/native';

// Pegando dimensões da tela
const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation(); // permite navegar entre telas

  return (
    <View style={styles.container}>
      <BemVindo />
      <Text style={styles.textInitial}>
        Desvende o mundo dos bancos de dados de forma interativa e divertida!
      </Text>

      {/* Botão que leva para a outra tela */}
      <BotaoStart 
      title="Começar"
      onPress={async () => {
        try {
          const nome = await AsyncStorage.getItem('@nomeUsuario');
          if (nome) {
            navigation.navigate('Main'); // nome já foi informado
          } else {
            navigation.navigate('Home'); // nome ainda não foi informado
          }
        } catch (e) {
          console.log('Erro ao verificar AsyncStorage', e);
          navigation.navigate('Home'); // fallback seguro
        }
      }}
      
    />

      <Image 
        style={styles.logo1}
        source={require('../images/logo1.png')}
        resizeMode="contain"
      />
      <StatusBar style="auto" />
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

  logo1: {
    width: width * 0.6,
    height: height * 0.2,
    marginTop: height * 0.03,
  }
});
