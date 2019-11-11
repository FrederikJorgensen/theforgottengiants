import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: "amatic-sc",
    fontSize: 35
  },
  giantImage: {
    marginTop: 30,
    marginBottom: 30,
    height: hp("25%"),
    width: wp("90%"),
    resizeMode: "cover",
    borderRadius: 15
  }
});

export default styles;
