import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  containerScroll: {
    paddingBottom: 20,
    flexDirection: "column"},
  img: {
    height: hp("45%"),
    width: wp("100%"),
  },
  text: {
    marginTop: 20,
    marginBottom: 20,
    margin: 10,
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(5.2),
    textAlign: "center",
  }
});

export default styles;
