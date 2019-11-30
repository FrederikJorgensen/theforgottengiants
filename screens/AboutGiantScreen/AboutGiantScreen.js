import React, { Component } from "react";
import { View, Image, ScrollView, TouchableOpacity, Text } from "react-native";
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import BoldText from "../../data/GiantTextWithBold";
import Styles from "./AboutGiantStyles.js";
import Highlighter from 'react-native-highlight-words';
import Colors from "../../constants/colors";

export default class AboutGiantScreen extends Component {

  _isMounted = false;

  state = {
    isPlaying: false,
    playbackInstance: null,
    volume: 1.0,
    isBuffering: true
  }

  constructor(props) {
    super(props);
    this.playbackInstance = new Audio.Sound();
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

  async componentDidMount() {
    this._isMounted = true;
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      })

      this.loadAudio()
    } catch (e) {
      console.log(e)
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.playbackInstance.unloadAsync();
  }

  async loadAudio() {
    const { isPlaying, volume } = this.state

    try {
      const source = this.state.audio

      const status = {
        shouldPlay: isPlaying,
        volume: volume
      }

      this.playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
      await this.playbackInstance.loadAsync(source, status, false)
      if (this._isMounted) {
        this.setState({
          playbackInstance: this.playbackInstance
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  onPlaybackStatusUpdate = status => {
    if (this._isMounted) {
      this.setState({
        isBuffering: status.isBuffering
      })
    }
  }

  handlePlayPause = async () => {
    const { isPlaying } = this.state
    isPlaying ?
      await this.playbackInstance.pauseAsync() :
      await this.playbackInstance.playAsync()

    if (this._isMounted) {
      this.setState({
        isPlaying: !isPlaying
      })
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
          <TouchableOpacity onPress={this.handlePlayPause}>
            {this.state.isPlaying ? (
              <FontAwesome name='pause' size={35} color={Colors.black} />
            ) : (
                <FontAwesome name='play' size={35} color={Colors.black} />
              )}
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