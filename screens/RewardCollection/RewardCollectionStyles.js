import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  containerScroll: {
    flexDirection: "column",
    backgroundColor: Colors.green
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.green,
  },
  containerReward: {
    marginBottom: 15
  },
  rewardTitle: {
    fontFamily: "amatic-sc",
    fontSize: RFPercentage(8.5),
    color: Colors.black,
    marginTop: "5%",
    marginBottom: 10,
    textAlign: "center"
  }
});

export default styles;