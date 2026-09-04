import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilo';

export default function ItemLista(props) {
  return (
    <View style={estilo.boxArcano}>
      <Text style={estilo.nomeArcano}>
        {props.arcano}
      </Text>
      <Text style={estilo.secundario}>
         Carta: {props.numero}
         
      </Text>
    </View>
  )
}