import React, { Component } from "react";
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import { Audio } from 'expo-av';
import BoldText from "../../data/GiantTextWithBold";
import Styles from "./AboutGiantStyles.js";
import Highlighter from 'react-native-highlight-words';
import Colors from "../../constants/colors";

export default class AboutGiantScreen extends Component {

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.state = {
      id: this.props.navigation.getParam("id"),
      firstname: this.props.navigation.getParam("firstname"),
      giantDesc: this.props.navigation.getParam("desc"),
      image: this.props.navigation.getParam("image"),
      audio: this.props.navigation.getParam("audio")
    }
  }

  async handlePress() {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(this.state.audio);
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }

  render() {
    return (
      <ScrollView style={Styles.scrollContainer}>
        <Image
          key={this.state.id}
          style={Styles.img}
          source={this.state.image}
        />
        <View style={Styles.container}>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={this.handlePress}>
            <Text style={Styles.buttonText}>Listen to {this.state.firstname}</Text>
          </TouchableOpacity>
        </View>
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