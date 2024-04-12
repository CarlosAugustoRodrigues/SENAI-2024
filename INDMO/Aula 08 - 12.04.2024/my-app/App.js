import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/Home';
import MidiasScreen from './screens/Midias';
import ContactScreen from './screens/Contact';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='rgb(0, 0, 0)'
        inactiveColor='rgb(50, 200, 200)'

        barStyle={{backgroundColor: 'rgb(15, 15, 15)'}}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Midias') {
              iconName = focused ? 'at' : 'at-outline';
            } else if (route.name === 'Contact') {
              iconName = focused ? 'call' : 'call-outline';
            }

            return <Ionicons name={iconName} size={22} color={color} />;
          },
        })}
      >

        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          
          options={{
            tabBarLabel: null,
          }}
        
          
        />
        <Tab.Screen 
          name="Midias" 
          component={MidiasScreen} 
          
          options={{
            tabBarLabel: null,
          }}
        />

        <Tab.Screen 
          name="Contact" 
          component={ContactScreen}
        
          options={{
            tabBarLabel: null,
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}