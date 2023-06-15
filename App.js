// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StyleSheet, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen/>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: '#ddb52f',
    flex: 1
    // flex: 1,
    // paddingTop: 50, // LA UNIDAD DE TODOS ESTOS SON PIXELES
    // alignItems: 'center',
    // padding: 40
    // justifyContent: 'center'
  }
});
