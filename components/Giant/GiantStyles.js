import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: "amatic-sc",
    fontSize: RFPercentage(5)
  },
  giantImage: {
    marginTop: 30,
    marginBottom: 30,
    height: hp("30%"),
    width: wp("90%"),
    resizeMode: "cover",
    borderRadius: 15
  }
});

export default styles;
