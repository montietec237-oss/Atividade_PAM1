import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo/index.js';
import ItemLista from '../ItemLista/index.js';
import estilo from './estilo.js';

export default function ListaDeArcanosAuto() {
const arcanos = [
  { numero: 0, arcano: 'O Louco' },
  { numero: 1, arcano: 'O Mago' },
  { numero: 2, arcano: 'A Sacerdotisa' },
  { numero: 3, arcano: 'A Imperatriz' },
  { numero: 4, arcano: 'O Imperador' },
  { numero: 5, arcano: 'O Hierofante' },
  { numero: 6, arcano: 'Os Enamorados' },
  { numero: 7, arcano: 'O Carro' },
  { numero: 8, arcano: 'A Justiça' },
  { numero: 9, arcano: 'O Eremita' },
  { numero: 10, arcano: 'A Roda da Fortuna' },
  { numero: 11, arcano: 'A Força' },
  { numero: 12, arcano: 'O Enforcado' },
  { numero: 13, arcano: 'A Morte' },
  { numero: 14, arcano: 'A Temperança' },
  { numero: 15, arcano: 'O Diabo' },
  { numero: 16, arcano: 'A Torre' },
  { numero: 17, arcano: 'A Estrela' },
  { numero: 18, arcano: 'A Lua' },
  { numero: 19, arcano: 'O Sol' },
  { numero: 20, arcano: 'O Julgamento' },
  { numero: 21, arcano: 'O Mundo' },
];
  return (
    <View style={estilo.container}>
      <Titulo />
      
      <ScrollView style={estilo.lista}>
        {arcanos.map((arcano, index) => (
          <ItemLista
            key={index}
            arcano={arcano.arcano}
            numero={arcano.numero}
          />
        ))}
      </ScrollView>
    </View>
  )
}