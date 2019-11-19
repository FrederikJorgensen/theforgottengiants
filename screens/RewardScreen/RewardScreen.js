import React, { Component } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "./RewardScreenStyles";
import { YellowButton } from "../../components/Buttons/YellowButton";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { BigReward } from "../../components/Reward/BigReward";

export default class RewardScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.containerScroll}>
        <View>
          <ImageBackground
            style={styles.img}
            source={this.props.navigation.getParam("image")}
          >
            <BigReward />
          </ImageBackground>

          <View style={styles.bottomContainer}>
            <Text style={styles.text}>
              Congrats. You found {navigation.getParam("name")}
            </Text>
            <DefaultButton
              btnText={"Listen to " + navigation.getParam("name")}
              onPress={() => this.props.navigation.navigate("HomeScreen")}
            ></DefaultButton>
            <YellowButton
              btnText={"Read about " + navigation.getParam("name")}
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
                  date: this.props.navigation.getParam("date")
                })
              }
            ></YellowButton>
          </View>
        </View>
      </ScrollView>
    );
  }
}
