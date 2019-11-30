import React, { Component } from "react";
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import { Audio } from 'expo-av';
import BoldText from "../../data/GiantTextWithBold";
import Styles from "./AboutGiantStyles.js";
import Highlighter from 'react-native-highlight-words';
import { Sound } from "../../components/Sound/Sound";
import ImageData from "../../data/ImageData";

export default class AboutGiantScreen extends Component {

  _isMounted = false;

  constructor(props) {
    super(props);
    this.soundObject = new Audio.Sound();
    this.handlePressPlay = this.handlePressPlay.bind(this);
    this.handlePressStop = this.handlePressStop.bind(this);
    this.state = {
      id: this.props.navigation.getParam("id"),
      firstname: this.props.navigation.getParam("firstname"),
      giantDesc: this.props.navigation.getParam("desc"),
      image: this.props.navigation.getParam("image"),
      audio: this.props.navigation.getParam("audio"),
      play: "Play audio",
      stop: "Stop audio"
    }
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async handlePressPlay() {
    try {
      await this.soundObject.unloadAsync();
      await this.soundObject.loadAsync(this.state.audio);
      await this.soundObject.playAsync();
    } catch (error) {
      console.log(error)
    }
  }

  async handlePressStop() {
    try {
      await this.soundObject.stopAsync();
    } catch (error) {
      console.log(error)
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
            onPress={this.handlePressPlay}>
            <Text style={Styles.buttonText}>{this.state.play}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.buttonStyle}
            onPress={this.handlePressStop}>
            <Sound img={require("../../assets/images/stopAudio.png")}></Sound>
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