import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  containerScroll: {
    paddingBottom: 20,
    flexDirection: "column",
    flex: 1
  },
  img: {
    width: "100%",
    height: "100%",
    flex: 10
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    margin: 10,
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(5.5),
    textAlign: "center",
  },
});

export default styles;