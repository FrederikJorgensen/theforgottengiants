import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Colors from "../../constants/colors";
import { RFPercentage } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
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
  directionRow: {
    flexDirection: "row",
  }
});

export default styles;