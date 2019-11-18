import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  locationEmoji: {
    width: 40,
    height: 33,
    resizeMode: "contain"
  },
  locationText: {
    color: "white",
    fontFamily: "amatic-sc",
    fontSize: RFPercentage(5)
  },
  giantImage: {
    marginTop: 30,
    marginBottom: 30,
    height: hp("30%"),
    width: wp("90%"),
    resizeMode: "cover"
  },
  imageText: {
    margin: 10,
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    fontFamily: "amatic-sc"
  },
  ImageTextPlacement: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
});

export default styles;
