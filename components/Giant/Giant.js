import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import * as Font from "expo-font";
import styles from "./GiantStyles.js";

export default class Giant extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      "amatic-sc": require("../../assets/fonts/amatic-sc.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    return (
      <View style={styles.borderRadius}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={styles.locationEmoji}
              source={require("../../assets/images/location_emoji.png")}
            />
          </View>

          <View>
            <Text style={styles.locationText}>{this.props.location}</Text>
          </View>
        </View>
        <ImageBackground style={styles.giantImage} source={this.props.image}>
          <View style={styles.ImageTextPlacement}>
            <Text style={styles.imageText}>{this.props.name}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
