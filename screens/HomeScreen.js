import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from "react-native";
import * as Font from "expo-font";
import { createAppContainer } from "react-navigation";

export default class HomeScreen extends React.Component {
  state = {
    assetsLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "amatic-sc": require("../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../assets/fonts/Satisfy-Regular.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;

    if (assetsLoaded) {
      return (
        <ImageBackground
          source={require("../bg.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.container}>
            <Text style={{ fontFamily: "amatic-sc", fontSize: 60 }}>
              The Forgotten Giants
            </Text>
            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => this.props.navigation.navigate("AllGiants")}
            >
              <Text style={styles.customBtnText}>Begin!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <StatusBar barStyle="default" />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "amatic-sc",
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    fontFamily: "Satisfy-Regular",
    backgroundColor: "#D48104",
    borderRadius: 5,
    padding: 5
  },
  /* Here style the text of your button */
  customBtnText: {
    fontSize: 35,
    fontWeight: "200",
    color: "white",
    fontFamily: "Satisfy-Regular"
  },

  /* Here style the background of your button */
  customBtnBG: {
    marginTop: 30,
    backgroundColor: "#D48104",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});
