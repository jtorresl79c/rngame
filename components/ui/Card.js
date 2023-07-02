import { StyleSheet, View } from "react-native"

import Colors from '../../constants/colors';

function Card({children}){
    return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        padding: 16,
        marginTop: 36,
        backgroundColor: Colors.primary800,
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
    }
})

export default Card