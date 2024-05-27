import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Curriculo = () => {
    return (
        <View style={styles.container}> 
            <Image source={require("./assets/Vinicius.jpeg")} style={styles.viniciusImage}></Image>
            <View>
                <Text style={styles.informacoes}>Nome: Vinicius Fernando</Text>
                <Text style={styles.informacoes}>Email: vinicius.fssouza2003@gmail.com</Text>
                <Text style={styles.informacoes}>Telefone: (81) 9 9909-8348</Text>
                <Text style={styles.informacoes}>Endereço: Recife-PE</Text>
                <Text style={styles.informacoes}>Formação: Análise e Desenvolvimento de Sistemas</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#060405'
    },
    viniciusImage: {
        height: 250,
        width: 250,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: '#D4A000',
        marginBottom: 40
    },
    informacoes: {
        color: '#FAD605',
        fontSize: 18,
    }
})

export default Curriculo