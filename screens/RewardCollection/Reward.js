import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./RewardStyles";

export default class Reward extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.directionRow}>
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
