import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  reward_big: {
    width: 120,
    height: 120,
    marginTop: "40%",
    marginLeft: "62%"
  },
  reward_small: {
    width: 70,
    height: 70,
    marginTop: "77%",
    marginLeft: "77%"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.green
  },
  text: {
    color: Colors.black,
    fontFamily: Fonts.primary,
    fontSize: RFPercentage(5),
    textAlign: "center"
  },
  rewardImage: {
    marginTop: 35,
    marginBottom: 5,
    height: hp("25%"),
    width: wp("60%"),
    resizeMode: "cover",
    borderRadius: 20,
  },
  directionColumn: {
    flexDirection: "column",
  }
});

export default styles;