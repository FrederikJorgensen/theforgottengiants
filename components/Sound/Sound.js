import { Image, Text, View } from 'react-native';
import React from 'react';
import Styles from "./SoundStyles";

export const Sound = ({ img }) => (
  <View style={Styles.column}>
    <Image
      style={Styles.img}
      source={img}
    />
  </View>
);
