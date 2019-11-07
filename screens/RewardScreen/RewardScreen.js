import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
} from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import styles from "./RewardScreenStyles";
import { ListenToAudioButton } from "../../components/Buttons/ListenToAudioButton";
import { YellowButton } from "../../components/Buttons/YellowButton";
import { OrangeButton } from "../../components/Buttons/OrangeButton";
import { BigReward } from "../../components/Reward/BigReward";
import { Location } from "../../components/location/Location";

export default class RewardScreen extends Component {


  async componentWillMount() {
    await Asset.loadAsync([require("../../assets/images/teddynew.png")]);

    await Font.loadAsync({
      "amatic-sc": require("../../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../../assets/fonts/Satisfy-Regular.ttf")
    });
  }

  render() {
    return (
      <View>
        <ImageBackground
          style={styles.img}
          source={require("../../assets/images/teddy-no-overlay.png")}>
          <BigReward/>
        </ImageBackground>
      <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 15 }}>
        <Location/>
      </View>
      <View>
        <Text style={styles.locationText}>
            CONGRATS. YOU FOUND TEDDY FRIENDLY!
        </Text>
          <ListenToAudioButton
            onPress={() => this.props.navigation.navigate("HomeScreen")}>
          </ListenToAudioButton>
          <YellowButton
            btnText='Read about Teddy'
            onPress={() => this.props.navigation.navigate("AboutGiantScreen")}>
          </YellowButton>
          <OrangeButton
            btnText='Go find a new giant >'
            onPress={() => this.props.navigation.navigate("AllGiantsScreen")}>
          </OrangeButton>
          <YellowButton
            btnText='Your rewards'
            onPress={() => this.props.navigation.navigate("RewardCollection")}>
          </YellowButton>
      </View>
</View>
    );
  }
};
