import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  readButton: {
    marginTop: 20,
    backgroundColor: "#F8C100",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20
  },
  listenButton: {
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontFamily: "amatic-sc",
    fontSize: 24,
    color: "#828282",
    marginLeft: 5
  },
  locationText: {
    marginTop: 30,
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
    backgroundColor: "#D48104",
    borderRadius: 5,
    padding: 5
  },
  customBtnText: {
    fontSize: 30,
    color: "black",
    fontFamily: "amatic-sc",
    textAlign: "center"
  },
  customBtnBG: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#D48104",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});

export default styles;
