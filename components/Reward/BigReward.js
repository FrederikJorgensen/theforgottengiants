import { Image } from 'react-native';
import React from 'react';
import Styles from "./RewardStyles";
import ImageData from "../../data/ImageData";

export const BigReward = () => (
  <Image
    style={Styles.reward_big}
    source={ImageData.rewardImage}
  />
);
