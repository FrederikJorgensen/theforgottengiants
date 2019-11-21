import { Image } from 'react-native';
import React from 'react';
import Styles from "./RewardStyles";

export const SmallReward = () => (
  <Image
    style={Styles.reward_small}
    source={require("../../assets/images/reward.png")}
  />
);
