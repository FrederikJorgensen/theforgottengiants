import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { RFPercentage } from "react-native-responsive-fontsize";


const styles = StyleSheet.create({
  containerScroll: {
    paddingBottom: 20,
    flexDirection: "column",
    flex:1
  },
  img: {
    width: "100%",
    height: "100%",
    flex: 10
  },
  bottomContainer:{
  flex: 1
  },
  text: {
    marginTop: 10,
    marginBottom: 10,
    margin: 10,
    fontFamily: "amatic-sc",
    fontSize: RFPercentage(5.5),
    textAlign: "center",
  },
});

export default styles;