import { Dimensions, StyleSheet, View, useWindowDimensions } from "react-native"

import Colors from '../../constants/colors';

function Card({children}){

    const { width, height } = useWindowDimensions()

    const marginTopDistance = height < 380 ? 18 : 36;

    return <View style={[styles.card, {marginTop: marginTopDistance}]}>{children}</View>
}


// const deviceWidth = Dimensions.get('window').width


const styles = StyleSheet.create({
    card: {
        // flex: 1,
        padding: 16,
        // marginTop: deviceWidth < 380 ? 18 : 36,
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