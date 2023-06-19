// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StyleSheet, ImageBackground} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { useState } from 'react';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'

export default function App() {

  // 59. Switching Screens Programmatically
  const [userNumber,setUserNumber] = useState()

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber)
  }

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />

  if(userNumber){
    screen = <GameScreen/>
  }
  //////////// 59. Switching Screens Programmatically


  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground // para poner un bg se tiene que utilizar esta etiqueta (arriba se importo)
          source={require('./assets/images/background.png')} // se importa la imagen que queremos
          resizeMode='cover' // las pantallas de los dispositivos tienen diferentes tamaños, esto controla como se reajusta la imagen al agrandarlo
          style={styles.rootScreen} // la imagen solo ocupa el tamaño que necesita, no toda la pantalla en lo alto, por lo que le damos un flex 1
          imageStyle={styles.backgroundImage} // se le agrega una opacidad al bg
          >
        {screen} {/** 59. Switching Screens Programmatically */}
      </ImageBackground>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
