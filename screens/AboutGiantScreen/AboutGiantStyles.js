import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 45,
    flexDirection: "column"
  },
  img: {
    width: "100%",
    flex: 1.8
  },
  text: {
    textAlign: "justify",
    fontSize: 18
  },
  textContainer: {
    flex: 2,
    marginTop: 25,
    marginLeft: 20,
    marginRight: 20,
    lineHeight: 25
  },
  customBtnText: {
    fontSize: 35,
    fontWeight: "200",
    fontFamily: "amatic-sc",
    color: "black",
    textAlign: "center"
  },
  customBtnBG: {
    marginTop: 20,
    backgroundColor: "#D48104",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});

export default styles;
