import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  text: {
    fontSize: 35,
    marginTop: 5,
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
    fontSize: 50,
    fontFamily: "amatic-sc"
  }
});

export default styles;
