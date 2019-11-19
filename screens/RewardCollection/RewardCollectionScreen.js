import React from "react";
import { View, Text, ScrollView } from "react-native";
import Reward from "./Reward";
import styles from "./RewardCollectionStyles";
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
    const foundRewards = rewards.filter(reward => reward.found === true);

    return (
      <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>
          <Text style={styles.rewardTitle}>Your Rewards</Text>
          <View style={styles.containerReward}>
            {foundRewards.map(reward => (
              <Reward
                style={styles.reward}
                name={reward.name}
                date={reward.date}
                image={reward.image}
                key={reward.id}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
