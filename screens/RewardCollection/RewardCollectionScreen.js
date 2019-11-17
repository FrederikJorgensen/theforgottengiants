import React from "react";
import { View, Text, ScrollView } from "react-native";
import Reward from "./Reward";
import styles from "./RewardCollectionStyles";
console.disableYellowBox = true;
import Colors from "../../constants/colors";
import rewards from "./RewardData";

export default class RewardCollectionScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.green
      }
    };
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.rewardTitle}>Your Rewards</Text>
          {rewards.map(reward => (
            <Reward
              style={styles.reward}
              name={reward.name}
              date={reward.date}
              image={reward.image}
              key={reward.id}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
