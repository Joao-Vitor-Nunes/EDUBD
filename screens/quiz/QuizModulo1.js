import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import quizModulo1 from '../data/quizData';

const { width, height } = Dimensions.get('window');

const QuizModulo1 = () => {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const perguntaAtual = quizModulo1?.[indicePergunta];

  const verificarResposta = (indiceSelecionado) => {
    if (perguntaAtual && indiceSelecionado === perguntaAtual.respostaCorreta) {
      setPontuacao((prevPontuacao) => prevPontuacao + 1);
    }

    const proximaPergunta = indicePergunta + 1;
    if (proximaPergunta < quizModulo1.length) {
      setIndicePergunta(proximaPergunta);
    } else {
      setMostrarResultado(true);
    }
  };

  return (
    <View style={styles.container}>
      {mostrarResultado ? (
        <View style={styles.resultadoContainer}>
          <Text style={styles.titulo}>🎉 Quiz Concluído!</Text>
          <Text style={styles.texto}>
            Você acertou <Text style={styles.pontuacao}>{pontuacao}</Text> de {quizModulo1.length} perguntas.
          </Text>
        </View>
      ) : perguntaAtual ? (
        <View style={styles.quizContainer}>
          <Text style={styles.titulo}>{perguntaAtual.pergunta}</Text>
          {perguntaAtual.opcoes.map((opcao, indice) => (
            <TouchableOpacity
              key={indice}
              style={styles.botao}
              onPress={() => verificarResposta(indice)}
            >
              <Text style={styles.textoBotao}>{opcao}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.contador}>
            Pergunta {indicePergunta + 1} de {quizModulo1.length}
          </Text>
        </View>
      ) : (
        <Text style={styles.texto}>Carregando pergunta...</Text>
      )}
    </View>
  );
};

export default QuizModulo1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF1E6',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quizContainer: {
    width: '100%',
    alignItems: 'center',
  },
  resultadoContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6c00ff',
    textAlign: 'center',
    marginBottom: 20,
  },
  texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  pontuacao: {
    fontWeight: 'bold',
    color: '#03dac6',
    fontSize: 20,
  },
  botao: {
    width: '100%',
    backgroundColor: '#6c00ff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 2,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contador: {
    marginTop: 20,
    fontSize: 14,
    color: '#777',
  },
});
