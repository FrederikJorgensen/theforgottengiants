import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import Styles from "./GiantStyles.js";

export default class Giant extends React.Component {
  render() {
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={Styles.locationEmoji}
              source={require("../../assets/images/location_emoji.png")}
            />
          </View>
          <View>
            <Text style={Styles.locationText}>{this.props.location}</Text>
          </View>
        </View>
        <ImageBackground
          source={this.props.image}
          style={Styles.giantImage}
          imageStyle={{ borderRadius: 20 }}>
          <View style={Styles.imageTextPlacement}>
            <Text style={Styles.imageText}>{this.props.name}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}