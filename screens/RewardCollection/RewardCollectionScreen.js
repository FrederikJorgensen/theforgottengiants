
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Reward from "./Reward";
import styles from "./RewardCollectionStyles";
console.disableYellowBox = true;
import Colors from "../../constants/colors";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const now = new Date().getDate() + " OF " + monthNames[new Date().getMonth()] +
  " " + new Date().getHours() + ":" + new Date().getMinutes()

export default class RewardCollectionScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.green,
      }
    };
  };

  state = {
    rewards: [
      {
        id: 1,
        name: "Teddy Friendly",
        date: now,
        image: require("../../assets/images/reward.png")
      },
      {
        id: 2,
        name: "Oscar Under The Bridge",
        date: now,
        image: require("../../assets/images/reward.png")
      },
      {
        id: 3,
        name: "Sleeping Louis",
        date: now,
        image: require("../../assets/images/reward.png")
      },
      {
        id: 4,
        name: "Little Tilde",
        date: now,
        image: require("../../assets/images/reward.png")
      },
      {
        id: 5,
        name: "Thomas on The Mountain",
        date: now,
        image: require("../../assets/images/reward.png")
      },
      {
        id: 6,
        name: "Trine",
        date: now,
        image: require("../../assets/images/reward.png")
      }
    ]
  };

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
