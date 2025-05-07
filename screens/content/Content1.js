import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 👈 Importa navegação

const { width, height } = Dimensions.get('window');
const sideMargin = (width - width * 0.9) / 2; // margem para centralizar os cards

export default function ScrollHorizontal() {
  const navigation = useNavigation(); // 👈 Hook de navegação

  const handleStart = () => {
    navigation.navigate('QuizModulo1'); // 👈 Redireciona para o quiz
  };

  return (
    <View style={styles.background}>
      <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={width * 0.9 + width * 0.037} // largura + margem
      >
        {/* Espaço à esquerda para centralizar o primeiro item */}
        <View style={{ width: sideMargin }} />

        <View style={styles.item}>
          <Text style={styles.emoji}>📚</Text>
          <Text style={styles.title}>O que é um Banco de Dados?</Text>
          <Text style={styles.texto}>
            É um lugar onde guardamos informações de forma organizada. Como uma biblioteca digital!
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.emoji}>📱</Text>
          <Text style={styles.title}>Exemplos no dia a dia</Text>
          <Text style={styles.texto}>
            Redes sociais, apps de entrega e até jogos usam bancos de dados para funcionar.
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.emoji}>🔍</Text>
          <Text style={styles.title}>Tipos de Banco</Text>
          <Text style={styles.texto}>
            Relacional, não relacional, na nuvem... cada tipo tem um jeito diferente de guardar dados!
          </Text>
        </View>

        <View style={styles.item}>
          <Text style={styles.emoji}>🚀</Text>
          <Text style={styles.title}>Por que aprender?</Text>
          <Text style={styles.texto}>
            Saber banco de dados ajuda você a criar apps e jogos incríveis no futuro!
          </Text>

          <TouchableOpacity style={styles.button} onPress={handleStart}>
            <Text style={styles.buttonText}>Começar 🚀</Text>
          </TouchableOpacity>
        </View>

        {/* Espaço à direita para centralizar o último item */}
        <View style={{ width: sideMargin }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FAF1E6',
    justifyContent: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  item: {
    width: width * 0.9,
    height: height * 0.8,
    backgroundColor: '#6200ee',
    marginRight: width * 0.037,
    borderRadius: 18,
    padding: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 50,
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: height * 0.03,
    marginBottom: 10,
    textAlign: 'center',
  },
  texto: {
    color: 'white',
    fontSize: height * 0.02,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#03dac6',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
