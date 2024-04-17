import React, { useState } from 'react';
import { StyleSheet, View, Switch, Image } from 'react-native';

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={require("../assets/ominitrix.png")}/>

      <Switch
      trackColor={{ true: '#009688', false: '#FFF' }}
        value={habilitado}
        onValueChange={habilitar}
      />

      <Image
        source={{
          uri: (habilitado)
          ? "../assets/4braços.png"
          : "../assets/ben10.png"
        }}
        style={styles.img2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(30,30,30)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px'
  },
  img1: {
    width: '100px',
    height: '100px'
  },
  img2: {
    width: '400px',
    height: '400px'
  }
});