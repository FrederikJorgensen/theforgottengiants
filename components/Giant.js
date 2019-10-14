import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

export default class Giant extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      "amatic-sc": require("../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../assets/fonts/Satisfy-Regular.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../assets/images/location_emoji.png")}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.text}>Giant Location</Text>
          </View>
        </View>
        <Image
          style={{ width: 358, height: 242 }}
          source={require("../assets/images/teddynew.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30
  },
  text: {
    color: "white",
    fontFamily: "amatic-sc",
    fontSize: 35
  }
});
