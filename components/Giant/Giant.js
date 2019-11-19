import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import styles from "./GiantStyles.js";

export default class Giant extends React.Component {
  render() {
    return (
      <View>
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
        <ImageBackground
          source={this.props.image}
          style={styles.giantImage}
          imageStyle={{ borderRadius: 20 }}>
          <View style={styles.ImageTextPlacement}>
            <Text style={styles.imageText}>{this.props.name}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}