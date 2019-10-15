import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class AboutGiantScreen extends Component {
  async componentWillMount() {
    await Asset.loadAsync([require("../assets/images/teddy-no-overlay.png")]);

    await Font.loadAsync({
      "amatic-sc": require("../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../assets/fonts/Satisfy-Regular.ttf")
    });
  }

  render() {
    return (
      <ScrollView>
        <Image
          style={styles.img}
          source={require("../assets/images/teddy-no-overlay.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Teddy Friendly is a recycle sculpture Thomas Dambo made as a part of
            the larger project “Forgotten Giants”. The project consists of 6
            large sculptures made in the outskirts of Copenhagen. Common for all
            sculptures is that they are made solely from local scrapwood and
            recycled materials, and made in a hidden beautiful location. This
            way it invites the viewers to go on a treasure hunt, not only to see
            the sculptures, but also to discover hidden gems in nature. Teddy
            friendly is made from local scrapwood, including cut offs from cut
            down local trees, which has been used for his fur. He is standing at
            a water stream, at a lake holding out his hand helping people to
            cross. The Thomas Dambo team had help from a local activation
            center, which provided four unemployed people and a teacher to
            assist in building the sculpture. The teachers name was Teddy, he
            was a super friendly and hardworking guy, and together with his team
            he made a huge effort, therefore Thomas Dambo decided to name the
            sculpture after him.{" "}
          </Text>
          <TouchableOpacity style={styles.customBtnBG}>
            <Text style={styles.customBtnText}> GO BACK</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 363
  },
  text: {
    fontFamily: "amatic-sc",
    fontSize: 22
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40
  },
  customBtnText: {
    fontSize: 30,
    color: "white",
    fontFamily: "amatic-sc",
    textAlign: "center"
  },
  customBtnBG: {
    marginTop: 20,
    backgroundColor: "#D48104",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  }
});
