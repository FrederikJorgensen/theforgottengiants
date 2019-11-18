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

  componentWillMount() {
    rewards.map(reward => {
      if (this.props.navigation.getParam("giantId") === reward.id)
        reward.found = true;
      reward.date = this.props.navigation.getParam("date");
    });
  }

  render() {
    const foundRewards = rewards.filter(reward => reward.found === true);
    console.log(this.props.navigation.getParam("date"));

    return (
      <ScrollView style={{ backgroundColor: Colors.green }}>
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
