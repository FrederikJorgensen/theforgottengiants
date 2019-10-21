import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class MapScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the map screen</Text>
        <TouchableOpacity
          style={{ marginTop: 50 }}
          onPress={() => this.props.navigation.navigate("RewardScreen")}
        >
          <Text>You found Oscar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
