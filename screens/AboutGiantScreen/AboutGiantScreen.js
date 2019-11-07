import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import * as Font from "expo-font";
import styles from "./AboutGiantStyles.js";

export default class AboutGiantScreen extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      "amatic-sc": require("../../assets/fonts/amatic-sc.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.img}
          source={require("../../assets/images/teddy-no-overlay.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Teddy Friendly is a recycle sculpture Thomas Dambo made as a part of
            the larger project “Forgotten Giants”. The project consists of 6
            large sculptures made in the outskirts of Copenhagen. Common for all
            sculptures is that they are made solely from local scrapwood and
            recycled materials, and made in a hidden beautiful location. This
            way it invites the viewers to go on a treasure hunt, not only to see
            the sculptures, but also to discover hidden gems in nature.
            {"\n"} {"\n"}
            Teddy friendly is made from local scrapwood, including cut offs from
            cut down local trees, which has been used for his fur. He is
            standing at a water stream, at a lake holding out his hand helping
            people to cross. {"\n"} {"\n"}
            The Thomas Dambo team had help from a local activation center, which
            provided four unemployed people and a teacher to assist in building
            the sculpture. The teachers name was Teddy, he was a super friendly
            and hardworking guy, and together with his team he made a huge
            effort, therefore Thomas Dambo decided to name the sculpture after
            him.{" "}
          </Text>
          <TouchableOpacity
            style={styles.customBtnBG}
            onPress={() => this.props.navigation.navigate("MapScreen")}
          >
            <Text style={styles.customBtnText}>BACK</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
