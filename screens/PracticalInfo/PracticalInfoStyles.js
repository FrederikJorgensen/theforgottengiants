import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  text: {
    fontSize: RFPercentage(5),
    marginBottom: "7%",
    textAlign: "justify",
    fontFamily: Fonts.primary,
    color: Colors.black
  },
  container: {
    backgroundColor: Colors.green,
    alignItems: "center",
    justifyContent: "center"
  },
  containerScroll: {
    flexDirection: "column",
    backgroundColor: Colors.green
  },
  h1: {
    fontSize: RFPercentage(5.5),
    fontFamily: Fonts.primary,
    color: Colors.black,
    marginBottom: '5%'
  }
});

export default styles;
