import React, { Component } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import Styles from "./RewardScreenStyles";
import { YellowButton } from "../../components/Buttons/YellowButton";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { BigReward } from "../../components/Reward/BigReward";
import rewards from "../RewardCollection/RewardData";

export default class RewardScreen extends Component {
  componentWillMount() {
    rewards.map(reward => {
      if (this.props.navigation.getParam("giantId") === reward.id)
        reward.found = true;
      reward.date = this.props.navigation.getParam("date");
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={Styles.containerScroll}>
        <View>
          <ImageBackground
            style={Styles.img}
            source={this.props.navigation.getParam("image")}
          >
            <BigReward />
          </ImageBackground>

          <View style={Styles.bottomContainer}>
            <Text style={Styles.text}>
              Congrats. You found {navigation.getParam("name")}
            </Text>
            <DefaultButton
              btnText={"Listen to " + navigation.getParam("name")}
              onPress={() => this.props.navigation.navigate("HomeScreen")}
            ></DefaultButton>
            <YellowButton
              btnText={"Read about " + navigation.getParam("firstname")}
              onPress={() =>
                this.props.navigation.navigate("AboutGiantScreen", {
                  desc: navigation.getParam("desc"),
                  image: navigation.getParam("image")
                })
              }
            ></YellowButton>
            <DefaultButton
              btnText="Go find a new giant >"
              onPress={() => this.props.navigation.navigate("AllGiantsScreen")}
            ></DefaultButton>
            <YellowButton
              btnText="Your rewards"
              onPress={() =>
                this.props.navigation.navigate("RewardCollection", {
                  giantId: this.props.navigation.getParam("giantId"),
                  date: this.props.navigation.getParam("date"),
                  found: this.props.navigation.getParam("found")
                })
              }
            ></YellowButton>
          </View>
        </View>
      </ScrollView>
    );
  }
}
