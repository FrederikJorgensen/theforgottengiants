import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  text: {
    fontSize: RFPercentage(5),
    marginBottom: "7%",
    textAlign: "justify",
    fontFamily: Fonts.primary
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
    fontSize: RFPercentage(8),
    fontFamily: Fonts.primary
  }
});

export default styles;
