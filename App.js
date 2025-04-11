import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import BemVindo from './components/BemVindo';
import BotaoStart from './components/BotaoStart';

// Pegando dimensões da tela
const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <BemVindo />
      <Text style={styles.textInitial}>
        Desvende o mundo dos bancos de dados de forma interativa e divertida!
      </Text>
      <BotaoStart />
      <Image 
        style={styles.logo1}
        source={require('./images/logo1.png')}
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
    padding: width * 0.05, // 5% da largura da tela
  },

  textInitial: {
    textAlign: 'center',
    fontSize: width * 0.04, // 4% da largura da tela
    color: '#333',
    marginVertical: height * 0.015, // 1.5% da altura
  },

  logo1: {
    width: width * 0.6, // 60% da largura da tela
    height: height * 0.2, // 20% da altura da tela
    marginTop: height * 0.03, // 3% da altura
  },
});
