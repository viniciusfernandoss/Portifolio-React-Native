import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Home from './Home'
import Curriculo from './CurriculoV'

const App = () => {

  const [abaAtual, setAbaAtual] =  useState('Home')

  const renderizarContent = () => {
    if (abaAtual === 'Home'){
      return <Home/>
    } else {
      return <Curriculo/>
    }
  }

  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.tituloHeader}>Curriculo React Native</Text>
      </View>

      {/* Conteudo */}
      <View style={styles.content}>
        {renderizarContent()}
      </View>

      {/* Menu de Navegação */}
      <View style={styles.menu}>
        <Text style={[styles.menuItem, abaAtual === 'Home' && styles.menuItemAtiva]}
          onPress={() => setAbaAtual('Home')}>Home</Text>

        <Text style={[styles.menuItem, abaAtual === 'Curriculo' && styles.menuItemAtiva]}
          onPress={() => setAbaAtual('Curriculo')}>Curriculo</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1515',
  },

  /* Cabeçalho */
  header: {
    marginTop: 20,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#0F1515'
  },
  tituloHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FAD605'
  },

  /* Conteudo */
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* Menu de Navegação */
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#0F1515'
  },
  menuItem: {
    fontSize: 18,
    color: '#333',
  },
  menuItemAtiva: {
    fontWeight: 'bold',
    color: '#FAD605',
  }
})

export default App;