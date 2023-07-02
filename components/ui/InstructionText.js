import { StyleSheet, Text } from "react-native"

import Colors from "../../constants/colors"

function InstructionText({children, style}){ // style es un nombre opcional, no a fuerzas debe de ser ese nombre
    return <Text style={[styles.instructionText, style]}>{children}</Text>
    // 'style' puede recibir un objeto de StyleSheet.create O un arreglo de objetos de StyleSheet.create,
    // el segundo reemplaza al primero y el primero es reemplazado por el segundo (que al final viene siendo
    // lo mismo), de esta forma podemos enviar un prop como style.
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24
    }
})

export default InstructionText