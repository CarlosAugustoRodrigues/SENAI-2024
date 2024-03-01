import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

export default function FormIMC() {
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Formulario de IMC</Text>
            <View style={styles.form}>
                {/*PESO*/}
                <MaskInput
                style={styles.textInput}
                onChangeText={(masked, unmasked) => setPeso(masked)}
                value={peso}
                placeholder="Digite seu peso"
                keyboardType="numeric"
                />

                {/*ALTURA*/}
                <MaskInput
                style={styles.textInput}
                onChangeText={(masked, unmasked) => setAltura(masked)}
                value={altura}
                placeholder="Digite sua altura"
                keyboardType="numeric"
                />

                <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    const imc = (peso / (altura * altura)).toFixed(2)
                    alert(`Seu IMC e ${imc}`)
                }}>
                    <Text style={styles.text}>Calcular</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30, 30, 30)',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    form: {
        width: 300,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    textInput: {
        padding: 5,
        width: 200,
        height: 40,
        borderWidth: 1,
        borderColor: 'rgb(100, 50, 255)',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        color: 'rgb(255, 0, 100)'
    },
    button: {
        width: 200,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'rgb(100, 50, 255)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#ffffff',
        fontSize: 16,
    }
})