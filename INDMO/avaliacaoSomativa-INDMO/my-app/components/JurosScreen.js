import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function JurosScreen() {
    const [valorProduto, setValorProduto] = useState('');
    const [porcentagemJuros, setPorcentagemJuros] = useState('');
    const [valorTotal, setValorTotal] = useState('');

    const calcularValorTotal = () => {
        const valorProdutoFloat = parseFloat(valorProduto);
        const porcentagemJurosFloat = parseFloat(porcentagemJuros);
        const juros = (valorProdutoFloat * porcentagemJurosFloat) / 100;
        const total = valorProdutoFloat + juros;
        setValorTotal(total.toFixed(2));
    };

    return (
        <View style={styles.container}>

            <Text style={styles.text}>INSIRA OS VALORES</Text>

            <View style={styles.containerJuros}>

                <TextInput
                    style={styles.input}
                    value={valorProduto}
                    onChangeText={setValorProduto}
                    keyboardType="numeric"
                    placeholder="R$ Produto"
                />

                <TextInput
                    style={styles.input}
                    value={porcentagemJuros}
                    onChangeText={setPorcentagemJuros}
                    keyboardType="numeric"
                    placeholder="% Juros"
                />

                <Button title="Calcular" onPress={calcularValorTotal} />

            </View>
            

            {valorTotal !== '' && (
                <Text style={styles.result}>
                    Valor com Juros: R$ {valorTotal}
                </Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(30, 30, 30)',
        gap: 80
    },
    containerJuros: {
        width: 250,
        gap: 30
    },
    text: {
        color: 'rgb(50, 150, 255)',
        fontSize: 80,
        letterSpacing: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRadius: 10,
        padding: 30,
        borderColor: 'rgb(255, 255, 255)',
        fontWeight: 'bold'
    },
    input: {
        height: 50,
        borderColor: 'rgb(50, 150, 255)',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: 'rgb(255, 255, 255)'
    },
    result: {
        color: 'white',
        fontSize: 20
    }
});
