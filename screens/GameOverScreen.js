import { Text, View, Image, StyleSheet } from "react-native"
import Title from '../components/ui/Title'
import Colors from '../constants/colors'

function GameOverScreen(props){
    return <View style={styles.rootContainer}>
        <Title>Game Over</Title>

        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/success.png')} />
        </View>

        <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default GameOverScreen