import { View,Text } from "react-native"

function PrimaryButton(props) //function PrimaryButton({children}) destructaring sixtax
{
    return <View>
        <Text>{props.children}</Text>
    </View>
}

export default PrimaryButton