import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    flexDirection: "column"
  },
  imageSize: {
    height: hp("45%"),
    width: wp("100%"),
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