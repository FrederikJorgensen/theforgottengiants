import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const styles = StyleSheet.create({
  reward_big: {
    width: wp("40%"),
    height: hp("18%"),
    marginTop: "3%",
    marginLeft: "57%",
    borderRadius: 20
  },
  reward_small: {
    width: wp("20%"),
    height: hp("10%"),
    marginTop: "3%",
    marginLeft: "73%",
    resizeMode: "cover",
    borderRadius: 20
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
  rewardImageCollection: {
    height: hp("25%"),
    width: wp("60%"),
    marginTop: 30,
    marginBottom: 5,
    resizeMode: "cover",
    borderRadius: 20,
  },
  directionColumn: {
    flexDirection: "column",
  }
});

export default styles;
