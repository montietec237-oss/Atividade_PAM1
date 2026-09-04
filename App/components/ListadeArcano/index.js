import React from 'react';
import { View, ScrollView } from 'react-native';
import Titulo from '../Titulo/index.js';
import ItemLista from '../ItemLista/index.js';
import estilo from './estilo.js';

export default function ListaDeArcanos() {
  return (
    <View style={estilo.container}>
      <Titulo />

  <ScrollView style={estilo.lista}>
    <ItemLista arcano="O Louco" numero={0} />
    <ItemLista arcano="O Mago" numero={1} />
    <ItemLista arcano="A Sacerdotisa" numero={2} />
    <ItemLista arcano="A Imperatriz" numero={3} />
    <ItemLista arcano="O Imperador" numero={4} />
    <ItemLista arcano="O Hierofante" numero={5} />
    <ItemLista arcano="Os Enamorados" numero={6} />
    <ItemLista arcano="O Carro" numero={7} />
    <ItemLista arcano="A Justiça" numero={8} />
    <ItemLista arcano="O Eremita" numero={9} />
    <ItemLista arcano="A Roda da Fortuna" numero={10} />
    <ItemLista arcano="A Força" numero={11} />
    <ItemLista arcano="O Enforcado" numero={12} />
    <ItemLista arcano="A Morte" numero={13} />
    <ItemLista arcano="A Temperança" numero={14} />
    <ItemLista arcano="O Diabo" numero={15} />
    <ItemLista arcano="A Torre" numero={16} />
    <ItemLista arcano="A Estrela" numero={17} />
    <ItemLista arcano="A Lua" numero={18} />
    <ItemLista arcano="O Sol" numero={19} />
    <ItemLista arcano="O Julgamento" numero={20} />
    <ItemLista arcano="O Mundo" numero={21} />
</ScrollView>
    </View>
  )
}