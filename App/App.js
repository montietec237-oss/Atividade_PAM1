import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListaDeSignos from './components/ListadeSignos';
import ListaDeSignosAuto from './components/ListadeSignosAuto';

export default function App() {
  return (  
    <View style={styles.container}>
      <ListaDeSignosAuto />
    </View> 
    // Escolha qual componente você quer renderizar, ListaDeSignos ou ListaDeSignosAuto
    // É só comentar o que não quer usar e descomentar o que quer usa
    // <ListaDeSignosAuto />
    // <ListaDeSignos />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});