import React, { Component } from "react";
import { View, Image, ScrollView } from "react-native";
import BoldText from "../../data/GiantTextWithBold";
import Styles from "./AboutGiantStyles.js";
import Highlighter from 'react-native-highlight-words';

export default class AboutGiantScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.navigation.getParam("id"),
      giantDesc: this.props.navigation.getParam("desc"),
      image: this.props.navigation.getParam("image")
    }
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
          <Highlighter
            highlightStyle={Styles.boldText}
            style={Styles.text}
            searchWords={BoldText}
            textToHighlight={this.state.giantDesc}
          />
        </View>
      </ScrollView>
    );
  }
}