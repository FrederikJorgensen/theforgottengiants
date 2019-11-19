import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import styles from "./ButtonStyles";


export const YellowButton = ({btnText, onPress}) => (
    <TouchableOpacity
        style={styles.yellowButton}
        onPress={onPress}>
        <Text style={styles.buttonText}> {btnText} </Text>
    </TouchableOpacity>

);
