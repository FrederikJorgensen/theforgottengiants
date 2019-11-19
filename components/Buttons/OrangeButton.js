import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import styles from "./styles";


 export const OrangeButton = ({btnText, onPress}) => (
  <TouchableOpacity
      style={styles.orangeButton}
      onPress={onPress}>
      <Text style={styles.customBtnText}> {btnText} </Text>
  </TouchableOpacity>
);
