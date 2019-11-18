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
      <View style={styles.container}>
        <ScrollView>
        <View>
          <Text style={styles.rewardTitle}>Your Rewards</Text>
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
      </ScrollView>
      </View>
      
    );
  }
}
