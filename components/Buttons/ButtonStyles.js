import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 30,
        color: Colors.black,
        fontFamily: "amatic-sc",
        textAlign: "center"
    },
    buttonStyle: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: Colors.orange,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5
    },
    yellowButton: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        backgroundColor: Colors.yellow,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    }
});

export default styles;
