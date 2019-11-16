import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AllGiantsScreen from "./screens/AllGiantsScreen/AllGiantsScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import MapScreen from "./screens/MapScreen/MapScreen";
import RewardScreen from "./screens/RewardScreen/RewardScreen";
import AboutGiantScreen from "./screens/AboutGiantScreen/AboutGiantScreen";
import RewardCollection from "./screens/RewardCollection//RewardCollectionScreen";
import PracticalInfo from "./screens/PracticalInfo//PracticalInfo";

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    AllGiantsScreen: AllGiantsScreen,
    MapScreen: MapScreen,
    RewardScreen: RewardScreen,
    AboutGiantScreen: AboutGiantScreen,
    RewardCollection: RewardCollection,
    PracticalInfo: PracticalInfo
  },
  {
    initialRouteName: 'HomeScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: "#000",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
