import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  containerScroll: {
    flexDirection: "column"
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.green,
  },
  giantText: {
    fontFamily: "amatic-sc",
    fontSize: RFPercentage(8),
    color: Colors.white,
    marginTop: "15%",
    marginBottom: "15%"
  }
});

export default styles;