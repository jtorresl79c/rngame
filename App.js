// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <StartGameScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // LA UNIDAD DE TODOS ESTOS SON PIXELES
    backgroundColor: '#be983f',
    alignItems: 'center',
    padding: 40
    // justifyContent: 'center'
  }
});
