import { View, Text, StyleSheet, Alert } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

import { useEffect, useState } from "react";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen(props) {
    console.log(props.userNumber)
    const initialGuess = generateRandomBetween(1, 100, props.userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect( () => {
        if(currentGuess === props.userNumber){
            props.onGameOver()
        }
    },[currentGuess, props.userNumber, props.onGameOver])

    function nextGuessHandler(direction){ // direction => 'lower', 'greater'
        

        // console.log(direction, currentGuess, props.userNumber)
        if(direction === 'lower' && currentGuess < props.userNumber || direction === 'greater' && currentGuess > props.userNumber){
            Alert.alert("Don't lie!", "You know that this is wrong...", [{text: 'Sorry!',style: 'cancel'}])
            
            return;
        }


        if(direction == 'lower'){
            maxBoundary = currentGuess
        }else{
            minBoundary = currentGuess + 1
        }
        
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
            </View>
            <View>
                {/* LOG ROUNDS */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})

export default GameScreen