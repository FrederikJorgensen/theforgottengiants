import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

export default Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.green,
    alignItems: "center",
    justifyContent: "center"
  },
  containerScroll: {
    flexDirection: "column"
  },
  bottom: {
    flex: 1
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    flex: 2.8
  },
  distanceText: {
    fontSize: RFPercentage(4),
    fontFamily: Fonts.primary,
    marginTop: 12,
    marginBottom: 12,
    alignItems: "center"
  }
});
