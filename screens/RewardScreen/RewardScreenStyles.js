import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  containerScroll: {
    paddingBottom: 20,
    flexDirection: "column"
  },
  text: {
    fontFamily: "amatic-sc",
    fontSize: 24,
    color: Colors.grey,
    marginLeft: 5
  },
  locationText: {
    marginTop: 12,
    fontFamily: "amatic-sc",
    fontSize: 40,
    textAlign: "center"
  },
  img: {
    width: "100%",
    height: 363
  },
  buttonContainer: {
    fontFamily: "Satisfy-Regular",
    backgroundColor: Colors.orange,
    borderRadius: 5,
    padding: 5
  },
  directionRow: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 15
  }
});

export default styles;