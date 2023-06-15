// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen/>
    </View>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1
    // flex: 1,
    // paddingTop: 50, // LA UNIDAD DE TODOS ESTOS SON PIXELES
    // alignItems: 'center',
    // padding: 40
    // justifyContent: 'center'
  }
});
