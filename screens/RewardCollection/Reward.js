import React from "react";
import { Text, View, Image } from "react-native";
import Styles from "./RewardStyles";

export default class Reward extends React.Component {
  render() {
    return (
      <View>
        <View style={Styles.directionRow}>
          <View>
            <Image style={Styles.rewardImage} source={this.props.image} />
          </View>
        </View>
        <Text style={Styles.text}>{this.props.name}</Text>
        <Text style={Styles.text}>{this.props.date}</Text>
      </View>
    );
  }
}
