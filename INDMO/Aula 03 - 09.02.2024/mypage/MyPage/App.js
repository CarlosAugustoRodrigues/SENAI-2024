import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://i.pinimg.com/originals/97/57/67/975767e67adc18ad53d5a1a687cb6421.gif'}} style={styles.logo}/>
      <br/>  
      <br/>
      <Text style={[styles.text, {fontSize: 40, fontWeight: '500'}]}>Carlos Augusto Rodrigues</Text>
      <br/>
      <br/>
      <br/>
      <Text style={[styles.text, {fontSize: 30, fontWeight: '500'}]}>Formação</Text>
      <br/>
      <Text style={[styles.text, {fontSize: 20}]}>Técnico em Desenvolvimento de Sistemas - Cursando</Text>  
      <br/>
      <br/>
      <br/>
      <br/>
      <Button color='rgb(100, 10, 200)' title='GITHUB' onPress={() => Linking.openURL('https://github.com/carlosaugustorodrigues')}/>
      <br/>
      <Button color='rgb(100, 10, 100)' title='PORTFOLIO' onPress={() => Linking.openURL('https://carlosaugustorodrigues.github.io')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 290,
    height: 290,
  },
  text: {
    color: 'rgb(255, 255, 255)'
  },
});
