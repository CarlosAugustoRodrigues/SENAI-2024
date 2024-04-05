import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function EscolhaScreen({ navigation }) {

    const goToSwitchScreen = () => {
        navigation.navigate('Switch', { name: 'Switch' });
    };

    const goToJurosScreen = () => {
        navigation.navigate('Juros', { name: 'Juros' });
    };

    return (
        <View style={styles.container}>

            <Text style={styles.text}>ESCOLHA UMA OPÇÃO</Text>

            <View style={styles.containerButtons}>
                <Button 
                    title="SWITCH" 
                    onPress={goToSwitchScreen} 
                    color="rgb(50, 150, 255)" 
                />

                <Button 
                    title="JUROS" 
                    onPress={goToJurosScreen} 
                    color="rgb(50, 150, 255)" 
                />
            </View>

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
    text: {
        color: 'rgb(50, 150, 255)',
        fontSize: 70,
        letterSpacing: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderRadius: 10,
        padding: 30,
        borderColor: 'rgb(255, 255, 255)',
        fontWeight: 'bold'
    },
    containerButtons: {
        gap: 30
    }
});
