import React from "react";
import { Text, View, Image } from "react-native";
import Styles from "./RewardStyles";

export default class Reward extends React.Component {
  render() {
    return (
      <View style={[Styles.directionColumn, Styles.container]}>
        <Image style={Styles.rewardImageCollection} source={this.props.image} />
        <Text style={Styles.text}>{this.props.name}</Text>
        <Text style={Styles.text}>{this.props.date}</Text>
      </View>
    );
  }
}
