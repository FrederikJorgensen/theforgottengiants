import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "black",
    fontFamily: "amatic-sc",
    fontSize: 40,
    textAlign: "center"
  },
  rewardImage: {
    marginTop: 30,
    marginBottom: 5,
    height: hp("30%"),
    width: wp("70%"),
    resizeMode: "cover",
    borderRadius: 15,

  }
});

export default styles;
