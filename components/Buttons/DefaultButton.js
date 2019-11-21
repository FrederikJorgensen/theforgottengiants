import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Styles from "./ButtonStyles";

export const DefaultButton = ({ backgroundColor, btnText, onPress }) => (
  <TouchableOpacity
    style={{
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      backgroundColor: backgroundColor
    }}
    onPress={onPress}>
    <Text style={Styles.buttonText}> {btnText} </Text>
  </TouchableOpacity>
);