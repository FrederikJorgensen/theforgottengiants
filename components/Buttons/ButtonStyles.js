import { StyleSheet } from "react-native"
import Colors from "../../constants/colors"
import Fonts from "../../constants/fonts"

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    buttonTextStyle: {
        fontSize: 30,
        color: Colors.black,
        fontFamily: Fonts.primary,
        textAlign: "center"
    }
})

export default styles