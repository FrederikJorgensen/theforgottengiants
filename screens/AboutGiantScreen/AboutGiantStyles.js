import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  img: {
    width: "100%",
    height: 363
  },
  text: {
    textAlign: "justify",
    fontSize: RFPercentage(2.5),
    fontFamily: Fonts.bodyTextRegular
  },
  textContainer: {
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 25,
    lineHeight: 25
  },
  boldText: {
    fontFamily: Fonts.bodyTextBold
  }
});

export default styles;