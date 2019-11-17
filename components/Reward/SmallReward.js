import { Image } from 'react-native';
import React from 'react';
import styles from "./styles";

export const SmallReward = () => (
  <Image
    style={styles.reward_small}
    source={require("../../assets/images/reward.png")}
  />
);
