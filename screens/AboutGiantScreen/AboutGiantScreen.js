import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import GiantBoldText from "../../data/GiantTextWithBold";
import Styles from "./AboutGiantStyles.js";

export default class AboutGiantScreen extends Component {

  constructor(props) {
    super(props);
    this.makeBoldText = this.makeBoldText.bind(this);
    this.state = {
      id: this.props.navigation.getParam("id"),
      giantDesc: this.props.navigation.getParam("desc"),
      image: this.props.navigation.getParam("image")
    }
  }

  makeBoldText() {
    if (giantDesc)
    
    this.setState({
      giantDesc
    });
  }

  render() {
    return (
      <ScrollView style={Styles.container}>
        <Image
          key={this.state.id}
          style={Styles.img}
          source={this.state.image}
        />
        <View style={Styles.textContainer}>
          <Text style={Styles.text}>{this.state.giantDesc}</Text>
        </View>
      </ScrollView>
    );
  }
}