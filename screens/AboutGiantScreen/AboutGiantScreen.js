import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import Styles from "./AboutGiantStyles.js";

export default class AboutGiantScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={Styles.container}>
        <Image
          style={Styles.img}
          source={this.props.navigation.getParam("image")}
        />
        <View style={Styles.textContainer}>
          <Text style={Styles.text}>{navigation.getParam("desc")}</Text>
        </View>
      </ScrollView>
    );
  }
}