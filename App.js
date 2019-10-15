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
import AllGiants from "./screens/AllGiants";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import RewardScreen from "./screens/RewardScreen";

class App extends React.Component {
  render() {
    return <Home />;
  }
}

const AppNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  AllGiants: AllGiants,
  MapScreen: MapScreen,
  RewardScreen: RewardScreen
});

const styles = StyleSheet.create({
  container: {
    fontFamily: "amatic-sc",
    fontSize: 20
  }
});
export default createAppContainer(AppNavigator);
