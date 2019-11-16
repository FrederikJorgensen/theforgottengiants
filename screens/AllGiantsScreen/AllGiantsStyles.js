import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
  containerScroll: {
    flexDirection: "column"
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#48972C"
  },
  giantText: {
    fontFamily: "amatic-sc",
    fontSize: RFPercentage(8),
    color: "white",
    marginTop: "15%",
    marginBottom: "15%"
  }
});

export default styles;
