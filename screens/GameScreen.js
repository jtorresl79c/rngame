import { View, Text, StyleSheet } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

import { useState } from "react";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}


function GameScreen(props) {

    const initialGuess = generateRandomBetween(1, 100, props.userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess) 

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higuer or lower?</Text>
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