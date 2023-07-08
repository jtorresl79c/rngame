import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions } from "react-native";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

import { useEffect, useState } from "react";

import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";


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
    const [guessRounds, setGuessRounds] = useState([initialGuess])
    const { width, heigth } = useWindowDimensions()



    useEffect(() => {
        if (currentGuess === props.userNumber) {
            props.onGameOver(guessRounds.length)
        }
    }, [currentGuess, props.userNumber, props.onGameOver])


    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    }, [])

    function nextGuessHandler(direction) { // direction => 'lower', 'greater'


        // console.log(direction, currentGuess, props.userNumber)
        if (direction === 'lower' && currentGuess < props.userNumber || direction === 'greater' && currentGuess > props.userNumber) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'cancel' }])

            return;
        }


        if (direction == 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }

        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    }

    const guessRoundsListhLength = guessRounds.length

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
            <View style={styles.buttonsContainer}>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>

            </View>
        </Card>
    </>;


    if (width > 500) {
        content = <>
            {/* <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText> */}
            <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>

                <NumberContainer>{currentGuess}</NumberContainer>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>

            </View>
        </>;
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList data={guessRounds}
                    renderItem={itemData => {
                        return <GuessLogItem roundNumber={guessRoundsListhLength - itemData.index} guess={itemData.item} />
                    }}

                    keyExtractor={(item, index) => {
                        return item // Aqui retornamos lo que queremos que valla a ser el key, en este caso es la propiedad id
                    }}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },

    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    listContainer: {
        flex: 1,
        padding: 16
    }
})

export default GameScreen