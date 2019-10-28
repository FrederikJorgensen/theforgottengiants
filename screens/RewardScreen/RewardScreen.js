import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button
} from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import styles from "./RewardScreenStyles";

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
        <Image
          style={styles.img}
          source={require("../../assets/images/teddy-no-overlay.png")}
        />
        <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 15 }}>
          <Image
            style={{ marginTop: 5 }}
            source={require("../../assets/images/loc_emoji.png")}
          />
          <Text style={styles.text}>HØJE TAASTRUP</Text>
        </View>

        <Text style={styles.locationText}>
          CONGRATS! YOU FOUND TEDDY FRIENDLY!
        </Text>
        <View style={styles.container}>
          <TouchableOpacity style={styles.customBtnBG}>
            <View style={styles.listenButton}>
              <Text style={styles.customBtnText}>LISTEN TO TEDDY</Text>
              <Image
                style={{ marginLeft: 5 }}
                source={require("../../assets/images/sound.png")}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.readButton}
            onPress={() => this.props.navigation.navigate("AboutGiantScreen")}
          >
            <Text style={styles.customBtnText}>READ ABOUT TEDDY</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customBtnBG}>
            <Text style={styles.customBtnText}>NEXT GIANT ></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
