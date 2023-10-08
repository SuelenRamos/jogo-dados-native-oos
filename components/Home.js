import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Dado from './Dados';
import useStore from './store'; 
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [dado1Value, setDado1Value] = useState(1);
  const [dado2Value, setDado2Value] = useState(1);
  const [result, setResult] = useState('');
  const historicoJogo = useStore(state => state.historicoJogo); 

  const jogarDado = () => {
    const novoDado1Value = Math.floor(Math.random() * 6 + 1);
    const novoDado2Value = Math.floor(Math.random() * 6 + 1);
    const soma = novoDado1Value + novoDado2Value;

    setDado1Value(novoDado1Value);
    setDado2Value(novoDado2Value);

    historicoJogo(novoDado1Value, novoDado2Value, soma); 

    if (soma > 7) {
      setResult('Ganhou!');
    } else {
      setResult('Perdeu!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎲 Jogue os dados 🎲</Text>
      <View style={styles.diceContainer}>
        <Dado value={dado1Value} />
        <Dado value={dado2Value} />
      </View>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonNeon} onPress={jogarDado}>
          <Text style={styles.buttonText}>Jogar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNeon} onPress={() => navigation.navigate('Historico')}>
          <Text style={styles.buttonText}>Histórico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 20,
  },
  diceContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    color: '#27ae60',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonNeon: {
    backgroundColor: '#00ff00',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10, // Efeito de elevação para um visual neon
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#0f0',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});

export default Home;
