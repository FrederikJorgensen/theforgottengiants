import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity
} from "react-native";
import * as Font from "expo-font";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./screens/Home";
import AllGiants from "./screens/AllGiants";
import { withNavigation } from "react-navigation";

const RootStack = createStackNavigator({
  Home: { screen: Home },
  AllGiants: { screen: AllGiants }
});

export default class App extends React.Component {
  render() {
    return <Home />;
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "amatic-sc",
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
