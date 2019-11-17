import { View, Text, Image } from 'react-native';
import styles from "./styles";
import React from 'react';

export const Location = () => (
  <View style={styles.directionRow}>
    <Image
      style={styles.locationMargin}
      source={require("../../assets/images/loc_emoji.png")} />
    <Text style={styles.text}> Høje Taastrup </Text>
  </View>
);