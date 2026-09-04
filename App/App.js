import React from 'react';
import { View, StyleSheet } from 'react-native';
import ListaDeArcanos from './components/ListadeArcano/index.js';
import ListaDeArcanosAuto from './components/ListadeArcanoAuto/index.js';
export default function App() {
  return (  
    <View style={styles.container}>
      <ListaDeArcanosAuto />
    </View> 
    // Escolha qual componente você quer renderizar, ListaDeArcanos ou ListaDeArcanosAuto
    // É só comentar o que não quer usar e descomentar o que quer usa
    // <ListaDeArcanosAuto />
    // <ListaDeArcanos />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});