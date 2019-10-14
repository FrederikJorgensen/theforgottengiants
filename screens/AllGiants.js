import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { withNavigation } from "react-navigation";
import Giant from "../components/Giant";

export default class AllGiants extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      "amatic-sc": require("../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../assets/fonts/Satisfy-Regular.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#48972C" }}>
        <Text></Text>
        <Text style={styles.container}>GO FIND A GIANT</Text>
        <Giant />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "amatic-sc",
    fontSize: 60,
    color: "white",
    marginLeft: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
