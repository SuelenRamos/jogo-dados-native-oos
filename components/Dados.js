import React from 'react';
import { View, Text, Image } from 'react-native';

const Dado = ({ value }) => {
  const dadoImagem = {
    1: require('../assets/dado1.png'),
    2: require('../assets/dado2.png'),
    3: require('../assets/dado3.png'),
    4: require('../assets/dado4.png'),
    5: require('../assets/dado5.png'),
    6: require('../assets/dado6.png')
  };

  return (
    <View>
      <Image source={dadoImagem[value]} style={{ width: 100, height: 100 }} />
      <Text>{value}</Text>
    </View>
  );
};

export default Dado;
