import { Image, Text, View } from 'react-native';
import React from 'react';
import Styles from "./TransportStyles";

export const Transport = ({ img, desc }) => (
  <View style={Styles.row}>
    <Image
      style={Styles.img}
      source={img}
    />
    <Text style={Styles.text}> {desc} </Text>
  </View>
);
