import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import React from 'react';
import styles from "./styles";


 export const BigReward = () => (
    <Image
      style = {styles.reward_big}
      source={require("../../assets/images/reward.png")}
    />
);
