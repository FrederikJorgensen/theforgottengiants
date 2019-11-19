import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  text: {
    fontSize: RFPercentage(5),
    marginBottom: "7%",
    textAlign: "justify",
    fontFamily: "amatic-sc"
  },
  container: {
    backgroundColor: Colors.green,
    alignItems: "center",
    justifyContent: "center"
  },
  containerScroll: {
  flexDirection: "column",
  backgroundColor: Colors.green
},
  h1: {
    fontSize: RFPercentage(8),
    fontFamily: "amatic-sc"
  }
});

export default styles;
