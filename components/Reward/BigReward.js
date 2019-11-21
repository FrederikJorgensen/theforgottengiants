import { Image } from 'react-native';
import React from 'react';
import Styles from "./RewardStyles";

export const BigReward = () => (
  <Image
    style={Styles.reward_big}
    source={require("../../assets/images/reward.png")}
  />
);
