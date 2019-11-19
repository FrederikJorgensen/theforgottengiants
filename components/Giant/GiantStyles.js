import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
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
    marginTop: 10,
    marginBottom: 40,
    height: hp("35%"),
    width: wp("90%"),
    resizeMode: "cover"
  },
  imageText: {
    margin: 10,
    fontSize: RFPercentage(5),
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
    backgroundColor: "rgba(255,255,255,0.85)",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
});

export default styles;
