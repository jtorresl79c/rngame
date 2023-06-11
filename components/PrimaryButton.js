import { View, Text, Pressable, StyleSheet } from "react-native"

function PrimaryButton(props) //function PrimaryButton({children}) destructaring sixtax
{

    function pressHandler(){
        console.log('Presed!!!')
    }

    return (
        <Pressable onPress={pressHandler}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default PrimaryButton