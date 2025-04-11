import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, Image, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BotaoSalvar from '../components/BotaoSalvar';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {

  const [nome, setNome] = useState('');
  const navigation = useNavigation(); // permite navegar entre telas

  const salvarNome = async () => {
    if (nome.trim() === '') {
      Alert.alert('Por favor, digite seu nome.');
      return;
    }

    try {
      await AsyncStorage.setItem('@nomeUsuario', nome);
      Alert.alert(`Seja Bem vindo ${nome}!`);
      navigation.navigate('Main')
    } catch (e) {
      Alert.alert('Erro ao salvar o nome.');
    }
  };

  return (
    <View style={styles.container}>

      <Image 
        style={styles.logo2}
        source={require('../images/logo2.png')}
        resizeMode="contain"
      />
      
      <Text style={styles.text}>Qual é o seu nome?</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <BotaoSalvar title="Salvar" onClick={salvarNome} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: width * 0.6
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    width: '100%',
    marginBottom: 20,
    fontSize: 16,
  },

  logo2: {
    width: width * 0.6,
    height: height * 0.2
  }
});
