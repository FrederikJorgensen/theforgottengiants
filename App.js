import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AllGiantsScreen from "./screens/AllGiantsScreen/AllGiantsScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MapScreen from "./screens/MapScreen/MapScreen";
import RewardScreen from "./screens/RewardScreen/RewardScreen";
import AboutGiantScreen from "./screens/AboutGiantScreen/AboutGiantScreen";
import RewardCollection from "./screens/RewardCollection//RewardCollectionScreen";

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AllGiantsScreen: AllGiantsScreen,
    MapScreen: MapScreen,
    RewardScreen: RewardScreen,
    AboutGiantScreen: AboutGiantScreen,
    RewardCollection: RewardCollection
  },
  { headerMode: "none" }
);

export default createAppContainer(AppNavigator);
