import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  text: {
    fontFamily: "amatic-sc",
    fontSize: 24,
    color: Colors.grey,
    marginLeft: 5
  },
  directionRow: {
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 3
  },
  locationMargin: {
    marginTop: 5
  }
});

export default styles;