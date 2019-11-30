import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from "./RewardStyles";
import ImageData from "../../data/ImageData";

export default SmallReward = () => (
  <Image
    style={Styles.reward_small}
    source={ImageData.rewardImage}/>
);
