import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/loginScreen';
import EscolhaScreen from './components/escolhaScreen';
import SwitchScreen from './components/switchScreen';
import JurosScreen from './components/jurosScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={LoginScreen}
        />
            
        <Stack.Screen
            name="Escolha"
            component={EscolhaScreen}
        />

        <Stack.Screen
            name="Switch"
            component={SwitchScreen}
        />

        <Stack.Screen
            name="Juros"
            component={JurosScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}