import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

const userData = {
    username: 'Carlos',
    password: '449532'
};

export default function LoginScreen({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const validacao = () => {
        if(password === userData.password && username === userData.username) {
            navigation.navigate('Escolha', { name: 'Escolha' });
        } else if(password == '' || username == '') {
            alert('Enter user data!');
        } else {
            alert('Username or Passwrod invalid!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>LOGIN</Text>

             <View style={styles.login}>

                <TextInput 
                    style={styles.input} 
                    onChangeText={setUsername} 
                    value={username} 
                    placeholder='Username'
                    placeholderTextColor='rgb(255, 255, 255)'
                />


                <TextInput 
                    style={styles.input} 
                    onChangeText={setPassword} 
                    value={password} 
                    placeholder='Password' 
                    keyboardType="numeric"
                    placeholderTextColor='rgb(255, 255, 255)'
                    secureTextEntry={true}
                />


                <Button
                    title="Entrar" 
                    onPress={validacao} 
                />

             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(30, 30, 30)',
        gap: 80
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
    login: {
        width: 250,
        gap: 30
    },
    input: {
        height: 50,
        borderColor: 'rgb(50, 150, 255)',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        padding: 10,
        borderRadius: 10,
        color: 'rgb(255, 255, 255)'
    }
});
