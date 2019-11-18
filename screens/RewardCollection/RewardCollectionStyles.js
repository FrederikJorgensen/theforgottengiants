import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

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
    fontSize: 50,
    color: Colors.black,
    marginTop: "5%",
    marginBottom: 20,
    textAlign: "center"
  }
});

export default styles;