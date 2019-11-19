import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { RFPercentage } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
  customBtnText: {
    fontSize: RFPercentage(4.5),
    color: "black",
    fontFamily: "amatic-sc",
    textAlign: "center"
  },
  orangeButton: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: Colors.orange,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  yellowButton: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    backgroundColor: Colors.yellow,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  back: {
    fontSize: 100,
    color: "#D48104",
    fontFamily: "amatic-sc",
  }
});

export default styles;
