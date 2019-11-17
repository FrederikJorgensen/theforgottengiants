import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Reward from "./Reward";
import styles from "./RewardCollectionStyles";
console.disableYellowBox = true;
import Colors from "../../constants/colors";
import rewardData from "./rewardData";

// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];

// const now = new Date().getDate() + " OF " + monthNames[new Date().getMonth()] +
//   " " + new Date().getHours() + ":" + new Date().getMinutes()

export default class RewardCollectionScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.green
      }
    };
  };

  state = {};

  render() {
    const { rewards } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.rewardTitle}>Your Rewards</Text>
          {this.state.rewards.map(reward => (
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
