import { View, Text, Pressable, StyleSheet } from "react-native"

function PrimaryButton(props) //function PrimaryButton({children}) destructaring sixtax
{

    function pressHandler() {
        console.log('Presed!!!')
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={pressHandler} 
                android_ripple={{ color: '#640233' }} // al parecer esto vuelve invisible el contenedor, ya que el 
                // buttonInnerContainer en su propiedad backgroundColor controla el color, si se quita esta propiedad
                // android_ripple el boton se vuelve solido y el color de fondo ahora se deberia de controlar desde
                // buttonOuterContainer #ZXXS1

                // el prop "style" puede recibir o un elemento de StyleSheet.create O una funcion, esta funcion retorna un objeto 
                // llamado pressData, y dentro de ese objeto hay una propiedad llamada pressed (pressData.pressed), pressed es true
                // si el elemento ha sido presionado, si ha sido presionado retornamos un array el cual aplica los estilos mencionados
                // en el array, de lo contrario si es false retornamos el estilo normal buttonInnerContainer.
                style={ ({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer }
                // [styles.buttonInnerContainer, styles.pressed] si tenemos varios estilos que queremos aplicar podemos mandar un 
                // array y de esta forma todos los estilos mencionados en el array se aplicaran.
            >
                <Text style={styles.buttonText}>{props.children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden', // al parecer el android_ripple agrega estilos extras, haciendo que el borderRadius no se vea porque
        // se ve mas ancho de lo normal el Pressable, para que esto no afecte el borderRadius ponemos el overflow hidden de lo
        // contrario el Pressable sera muy ancho y abra un overflow haciendo que el borderRadius no se vea. #ZXXS1d,
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})

export default PrimaryButton