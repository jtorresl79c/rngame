import { View, TextInput, StyleSheet, Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

import { useState } from 'react';

function StartGameScreen() {

    [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function confirmInputHandler(){
        console.log(enteredNumber)
    }

    return (

        <View style={styles.inputContainer}>

            <View style={styles.textContainer}>
                <Text style={styles.textItem}>Enter a Number</Text>
            </View>

            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none' // autoCapitalize desabilita que el texto inicie con una letra mayuscula automaticamente
                autoCorrect={false} // esto evita que el autocorrector del celular este activo, muy util al poner emails
                // autoCapitalize y autoCorrect no tienen mucho sentido aqui, porque solo metemos numeros,
                // pero es importante que sepamos que existen, solo por eso se pusieron aqui
                onChangeText={numberInputHandler}
                value={enteredNumber}
            />

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    {/* onPress={confirmInputHandler} = POINTER, onPress es un prop el cual envia una funcion para que se use como callback */}
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        padding: 16,
        marginTop: 100,
        backgroundColor: "#3b021f",
        marginHorizontal: 24,
        borderRadius: 8,
        // Android - 'elevation' solo sirve en Android, este pone una sombra, 
        //  no funciona en iOS
        elevation: 8,
        // iOS - 'shadow properties' solo sirven para iOS, este conjunto de
        // de propiedades agregan una sombra a los componente de iOS
        shadowColor: 'black',
        shadowOffset: {
            width: 0, // px
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 18
    },
    textItem: {
        color: '#ddb52f',
        fontSize: 24
    }
})

export default StartGameScreen