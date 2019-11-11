import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from "./styles";
import React from 'react';


export const ListenToAudioButton = ({onPress}) => (
      <TouchableOpacity style={styles.customBtnBG} onPress ={onPress}>
        <View>
          <Text style={styles.customBtnText}>LISTEN TO TEDDY</Text>
        </View>
      </TouchableOpacity>
  );
