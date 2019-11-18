import React, { Component } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import styles from "./RewardScreenStyles";
import { ListenToAudioButton } from "../../components/Buttons/ListenToAudioButton";
import { YellowButton } from "../../components/Buttons/YellowButton";
import { OrangeButton } from "../../components/Buttons/OrangeButton";
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

          <View>
            <Text style={styles.locationText}>
              CONGRATS. YOU FOUND {navigation.getParam("name")}
            </Text>
            <ListenToAudioButton
              onPress={() => this.props.navigation.navigate("HomeScreen")}
            ></ListenToAudioButton>
            <YellowButton
              btnText={"Read about " + navigation.getParam("name")}
              onPress={() =>
                this.props.navigation.navigate("AboutGiantScreen", {
                  desc: navigation.getParam("desc"),
                  image: navigation.getParam("image")
                })
              }
            ></YellowButton>
            <OrangeButton
              btnText="Go find a new giant >"
              onPress={() => this.props.navigation.navigate("AllGiantsScreen")}
            ></OrangeButton>
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
