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
      <View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={{ width: 33, height: 33, resizeMode: "contain" }}
              source={require("../assets/images/location_emoji.png")}
            />
          </View>

          <View>
            <Text style={styles.text}>{this.props.location}</Text>
          </View>
        </View>
        <Image style={styles.giantImage} source={this.props.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontFamily: "amatic-sc",
    fontSize: 35
  },
  giantImage: {
    borderRadius: 15
  }
});
