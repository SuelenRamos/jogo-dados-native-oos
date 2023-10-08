import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useStore from './store';

const Historico = () => {
  const gameStore = useStore(state => state);

  useEffect(() => {
    console.log('Histórico Atual:', gameStore.historico);
  }, [gameStore.historico]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Jogos:</Text>
      <FlatList
        data={gameStore.historico}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Dado 1: {item.dado1}</Text>
            <Text style={styles.itemText}>Dado 2: {item.dado2}</Text>
            <Text style={styles.itemText}>Resultado: {item.resultado}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Historico;
