import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  title: {
    fontFamily: "amatic-sc",
    fontSize: 60
  },
  buttonContainer: {
    fontFamily: "Satisfy-Regular",
    backgroundColor: "#D48104",
    borderRadius: 5,
    padding: 5
  },
  customBtnText: {
    fontSize: 35,
    fontWeight: "200",
    color: "white",
    fontFamily: "Satisfy-Regular"
  },
  customBtnBG: {
    marginTop: 30,
    backgroundColor: "#D48104",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});

export default styles;
