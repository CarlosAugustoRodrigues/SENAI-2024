import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import MaskInput from 'react-native-mask-input';

//pegar dimensao da tela
const { width, height } = Dimensions.get('screen')


//usuario
const user = {
    username: "user",
    pass: "123456"
}

export default function LoginForm({ navigation }) {

    //states
    const [username, setUsername] = React.useState('user')
    const [pass, setPass] = React.useState('123456')

    //funcao
    const validaUsuario = () => {
        if (pass === user.pass && username === user.username) {
            navigation.navigate("telaIMC", { name: 'telaIMC' })
        }
    }

    //view
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Formulario de cadastro</Text>
            <View style={styles.form}>
                {/* USERNAME */}
                <MaskInput
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setUsername(masked)}
                    value={username}
                    placeholder="Digite seu username"
                />
                {/* SENHA */}
                <MaskInput
                    mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                    style={styles.textInput}
                    onChangeText={(masked, unmasked) => setPass(masked)}
                    value={pass}
                    placeholder="Digite sua senha"
                    keyboardType="numeric"
                />
                <TouchableOpacity onPress={validaUsuario}>
                    <Text style={styles.text}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

//styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30, 30, 30)',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15
    },
    form: {
        width: width,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    textInput: {
        color: 'rgb(255, 0, 100)',
        padding: 5,
        height: 40,
        width: 200,
        borderColor: 'rgb(100, 50, 255)',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    text: {
        color: 'rgb(255, 255, 255)'
    }
});