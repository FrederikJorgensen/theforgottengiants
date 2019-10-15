import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";

export default class RewardScreen extends Component {
  async componentWillMount() {
    await Asset.loadAsync([require("../assets/images/teddynew.png")]);

    await Font.loadAsync({
      "amatic-sc": require("../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../assets/fonts/Satisfy-Regular.ttf")
    });
  }

  render() {
    return (
      <View>
        <Image
          style={styles.img}
          source={require("../assets/images/teddy-no-overlay.png")}
        />
        <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 15 }}>
          <Image
            style={{ marginTop: 5 }}
            source={require("../assets/images/loc_emoji.png")}
          />
          <Text style={styles.text}>HØJE TAASTRUP</Text>
        </View>

        <Text style={styles.locationText}>
          CONGRATS! YOU FOUND TEDDY FRIENDLY!
        </Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.customBtnBG}>
            <Text style={styles.customBtnText}>LISTEN TO TEDDY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customBtnBG}>
            <Text style={styles.customBtnText}>READ ABOUT TEDDY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customBtnBG}>
            <Text style={styles.customBtnText}>NEXT GIANT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "amatic-sc",
    fontSize: 24
  },
  locationText: {
    fontFamily: "amatic-sc",
    fontSize: 40,
    textAlign: "center"
  },
  img: {
    width: "100%",
    height: 263
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
    marginTop: 30,
    backgroundColor: "#D48104",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});
