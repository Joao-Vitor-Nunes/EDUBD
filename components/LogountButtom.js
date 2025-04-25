// src/components/LogoutButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Logout', 'Dados limpos com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível limpar os dados.');
      console.error('Erro ao limpar AsyncStorage:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>Logout (limpar dados)</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e53935',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LogoutButton;
