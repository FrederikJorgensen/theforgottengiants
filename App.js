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

class App extends React.Component {
  render() {
    return <Home />;
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  AllGiants: AllGiants
});

const styles = StyleSheet.create({
  container: {
    fontFamily: "amatic-sc",
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default createAppContainer(AppNavigator);
