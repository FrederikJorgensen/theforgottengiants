import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Fonts from "../../constants/fonts";
import Colors from "../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    flexDirection: "column"
  },
  img: {
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
  },
  buttonText: {
    fontSize: 30,
    color: Colors.black,
    fontFamily: Fonts.primary,
    textAlign: "center"
  },
  buttonStyle: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: Colors.orange
  }
});

export default styles;