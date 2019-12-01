import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from "./ButtonStyles";

export const DefaultButton = ({ backgroundColor, btnText, onPress }) => (
  <TouchableOpacity
    style={{...Styles.buttonStyle, ...{backgroundColor: backgroundColor}}}
    onPress={onPress}>
    <Text style={Styles.buttonText}> {btnText} </Text>
  </TouchableOpacity>
);