import React from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";

export default class MapScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the map screen</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("RewardScreen")}
        >
          <Text>You found Oscar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
