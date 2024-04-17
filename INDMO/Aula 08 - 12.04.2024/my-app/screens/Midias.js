import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const Midias = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>MIDIAS SCREEN</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(20, 20, 20)'
    },
    text: {
        fontSize: 50,
        fontWeight: '500',
        color: 'rgb(255, 255, 255)',
        borderBottomWidth: 2,
        borderColor: 'rgb(255, 255, 255)'
    }
});

export default Midias;