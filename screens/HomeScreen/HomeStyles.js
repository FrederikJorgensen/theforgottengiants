import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(11),
    textAlign: "center",
    margin: 10,

  },
  customBtnText: {
    fontSize: RFPercentage(5),
    color: Colors.white,
    fontFamily: Fonts.homeScreenButton
  },
  customBtnBG: {
    marginTop: 30,
    backgroundColor: Colors.orange,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});

export default styles;