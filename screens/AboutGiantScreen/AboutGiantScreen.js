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
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.img}
          source={require("../../assets/images/teddy-no-overlay.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{navigation.getParam("desc")}</Text>
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
