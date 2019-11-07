import {
    View,
    Text,
    Image
} from 'react-native';
import styles from "./styles";
import React from 'react';


export const Location = () => (
  <View style={{ flexDirection: "row", marginTop: 7, marginLeft: 3 }}>
    <Image
      style={{ marginTop: 5 }}
      source={require("../../assets/images/loc_emoji.png")}/>
    <Text style={styles.text}> Høje Taastrup </Text>
  </View>
  );
