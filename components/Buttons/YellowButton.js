import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import styles from "./styles";


export const YellowButton = ({btnText, onPress}) => (
    <TouchableOpacity
        style={styles.readButton}
        onPress={onPress}>
        <Text style={styles.customBtnText}> {btnText} </Text>
    </TouchableOpacity>

);
