// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useCallback } from 'react';
import { StyleSheet, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';

import Colors from './constants/colors';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

// https://docs.expo.dev/versions/latest/sdk/safe-area-context/
import {
  SafeAreaView
} from 'react-native-safe-area-context';


// SplashScreen.preventAutoHideAsync();
export default function App() {

  // 59. Switching Screens Programmatically
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true) // Aqui puedes pensar que deberia de estar en false,
  //pero cuando el juego inicia tecnicamente el juego esta en 'game over' por eso se puso en true

  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  function startNewGameHandler(){
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }


  //////////// 59. Switching Screens Programmatically
  

  return (
    <>
      <StatusBar style='light'/>
      <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
        <ImageBackground // para poner un bg se tiene que utilizar esta etiqueta (arriba se importo)
          source={require('./assets/images/background.png')} // se importa la imagen que queremos
          resizeMode='cover' // las pantallas de los dispositivos tienen diferentes tamaños, esto controla como se reajusta la imagen al agrandarlo
          style={styles.rootScreen} // la imagen solo ocupa el tamaño que necesita, no toda la pantalla en lo alto, por lo que le damos un flex 1
          imageStyle={styles.backgroundImage} // se le agrega una opacidad al bg
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
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
