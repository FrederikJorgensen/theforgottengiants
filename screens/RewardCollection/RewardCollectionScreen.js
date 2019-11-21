import React from "react";
import { View, Text, ScrollView } from "react-native";
import Reward from "./Reward";
import Styles from "./RewardCollectionStyles";
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
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.container}>
          <Text style={Styles.rewardTitle}>Your Rewards</Text>
          <View style={Styles.containerReward}>
            {foundRewards.map(reward => (
              <Reward
                style={Styles.reward}
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
