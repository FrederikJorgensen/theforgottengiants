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

  componentWillMount() {
    rewards.map(reward => {
      if (this.props.navigation.getParam("giantId") === reward.id)
        reward.found = true;
      reward.date = this.props.navigation.getParam("date");
    });
  }

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
                found={this.props.navigation.getParam("found")}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
