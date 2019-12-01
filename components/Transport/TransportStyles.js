import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70
  },
  text: {
    fontSize: RFPercentage(4),
    marginBottom: "7%",
    textAlign: "justify",
    fontFamily: Fonts.primary,
    color: Colors.black,
    textAlign: "center"
  },
  column: {
    flexDirection: "column",
    alignItems: "center"
  },

});

export default styles;
