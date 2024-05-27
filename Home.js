import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textoHome}>Bem Vindo!</Text>
            <Image source={require("./assets/logo.png")} style={styles.imagem}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#060405'   
    },
    textoHome: {
        color: '#FAD605',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40
    },
    imagem: {
        height: 400,
        width: 400
    }, 
})

export default Home