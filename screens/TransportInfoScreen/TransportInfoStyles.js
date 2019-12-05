import { StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import Colors from "../../constants/colors"
import Fonts from "../../constants/fonts"

const styles = StyleSheet.create({
  containerScroll: {
    flexDirection: "column",
    backgroundColor: Colors.green
  },
  container: {
    backgroundColor: Colors.green,
    alignItems: "center",
    justifyContent: "center"
  },
  headline: {
    fontSize: RFPercentage(5.8),
    fontFamily: Fonts.primary,
    color: Colors.black,
    marginBottom: '5%'
  },
  textStyle: {
    fontSize: RFPercentage(5),
    marginBottom: "7%",
    textAlign: "justify",
    fontFamily: Fonts.primary,
    color: Colors.black
  }
})

export default styles