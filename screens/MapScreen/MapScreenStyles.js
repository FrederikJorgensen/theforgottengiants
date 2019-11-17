import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default styles = StyleSheet.create({
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
    fontFamily: "amatic-sc",
    fontSize: 20,
    flex: 1,
    marginLeft: 7
  },
  textStyle: {
    fontFamily: "amatic-sc",
    fontSize: 35,
    marginTop: 5
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    flex: 1
  },
  distanceText: {
    fontSize: 30,
    fontFamily: "amatic-sc",
    marginTop: 5,
    alignItems: "center"
  }
});
