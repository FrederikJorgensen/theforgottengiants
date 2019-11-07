import React from "react";
import { Text, View, Image } from "react-native";
import * as Font from "expo-font";
import styles from "./RewardStyles";

export default class Reward extends React.Component {
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
          <Image style={styles.rewardImage} source={this.props.image} />

          </View>


        </View>
        <Text style={styles.text}>{this.props.name}</Text>
        <Text style={styles.text}>{this.props.date}</Text>
      </View>
    );
  }
}
