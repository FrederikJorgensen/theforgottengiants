import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./AboutGiantStyles.js";

export default class AboutGiantScreen extends Component {
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
        </View>
      </ScrollView>
    );
  }
}