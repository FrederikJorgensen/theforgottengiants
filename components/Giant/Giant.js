import React from "react";
import { Text, View, Image } from "react-native";
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
      <View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              style={{ width: 33, height: 33, resizeMode: "contain" }}
              source={require("../../assets/images/location_emoji.png")}
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
