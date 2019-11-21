import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  reward_big: {
    width: 130,
    height: 130,
    marginTop: "60%",
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
    fontFamily: "amatic-sc",
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