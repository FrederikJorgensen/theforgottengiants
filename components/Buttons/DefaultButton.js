import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from "./ButtonStyles";
import Colors from "../../constants/colors";

export const DefaultButton = ({ btnText, onPress }) => (
  <TouchableOpacity
    style={styles.buttonStyle}
    onPress={onPress}>
    <Text style={styles.buttonText}> {btnText} </Text>
  </TouchableOpacity>
);
