import React, { Component } from "react";
import { Text, View, ImageBackground, ScrollView } from "react-native";
import { Audio } from 'expo-av';
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { BigReward } from "../../components/Reward/BigReward";
import RewardData from "../../data/RewardData";
import Styles from "./RewardStyles";
import Colors from "../../constants/colors";

export default class RewardScreen extends Component {

  state = {
    assetsLoaded: false
  };

  componentWillMount() {
    RewardData.map(reward => {
      if (this.props.navigation.getParam("giantId") === reward.id)
      (reward.found = true) && (reward.date = this.props.navigation.getParam("date"));
    });
  }

  async componentDidMount() {
    try {
      await this.soundObject.loadAsync(require("../../assets/sounds/rewardSound.mp3"));
      await this.soundObject.playAsync();
    } catch (error) {
      console.log(error)
    }
    
    this.setState({ assetsLoaded: true });
  }

  constructor(props) {
    super(props);
    this.soundObject = new Audio.Sound();
  }

  render() {
    return (
      <ScrollView style={Styles.containerScroll}>
        <View>
          <ImageBackground
            style={Styles.img}
            source={this.props.navigation.getParam("image")}>
            <BigReward />
          </ImageBackground>

          <View>
            <Text style={Styles.text}>
              Congrats! You found {this.props.navigation.getParam("firstname")}
            </Text>
            <DefaultButton
              backgroundColor={Colors.orange}
              btnText={"About " + this.props.navigation.getParam("firstname")}
              onPress={() =>
                this.props.navigation.navigate("AboutGiantScreen", {
                  desc: this.props.navigation.getParam("desc"),
                  image: this.props.navigation.getParam("image"),
                  firstname: this.props.navigation.getParam("firstname"),
                  audio: this.props.navigation.getParam("audio")
                })}>
            </DefaultButton>
            <DefaultButton
              backgroundColor={Colors.yellow}
              btnText="Your rewards"
              onPress={() =>
                this.props.navigation.navigate("RewardCollection", {
                  giantId: this.props.navigation.getParam("giantId"),
                  date: this.props.navigation.getParam("date"),
                  found: this.props.navigation.getParam("found")
                })}>
            </DefaultButton>
            <DefaultButton
              backgroundColor={Colors.orange}
              btnText="Go find a new giant >"
              onPress={() => this.props.navigation.navigate("AllGiantsScreen")}>
            </DefaultButton>
          </View>
        </View>
      </ScrollView>
    );
  }
}
