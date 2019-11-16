import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontFamily: "amatic-sc",
    fontSize: RFPercentage(11),
    textAlign: "center"
  },
  customBtnText: {
    fontSize: RFPercentage(5),
    fontWeight: "200",
    color: "white",
    fontFamily: "Satisfy-Regular"
  },
  customBtnBG: {
    marginTop: 30,
    backgroundColor: "#D48104",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});

export default styles;
