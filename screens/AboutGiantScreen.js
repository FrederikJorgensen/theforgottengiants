import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class AboutGiantScreen extends Component {
  async componentWillMount() {
    await Asset.loadAsync([require("../assets/images/teddy-no-overlay.png")]);

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
        <Text> Information about Giant goes here </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 363
  }
});
