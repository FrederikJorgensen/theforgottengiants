import React, { Component } from "react"
import { View, Image, ScrollView, TouchableOpacity } from "react-native"
import Highlighter from "react-native-highlight-words"
import { Audio } from "expo-av"
import { FontAwesome } from "@expo/vector-icons"
import BoldWords from "../../data/GiantTextWithBold"
import Styles from "./AboutGiantStyles"
import Colors from "../../constants/colors"

export default class AboutGiantScreen extends Component {

  constructor(props) {
    super(props)
    _isMounted = false
    this.state = {
      id: this.props.navigation.getParam("id"),
      firstname: this.props.navigation.getParam("firstname"),
      description: this.props.navigation.getParam("description"),
      image: this.props.navigation.getParam("image"),
      audio: this.props.navigation.getParam("audio"),
      isPlaying: false,
      playbackObject: null,
      volume: 1.0,
      isBuffering: true
    }
  }

  async componentDidMount() {
    this._isMounted = true

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
    } catch (error) {
      console.log(error)
    }
  }

  componentWillUnmount() {
    this._isMounted = false
    this.playbackObject.unloadAsync()
  }

  async loadAudio() {
    try {
      this.playbackObject = new Audio.Sound()
      const source = this.state.audio

      const playbackStatus = {
        shouldPlay: this.state.isPlaying,
        volume: this.state.volume
      }

      this.playbackObject.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
      await this.playbackObject.loadAsync(source, playbackStatus, false)
      if (this._isMounted) {
        this.setState({
          playbackObject: this.playbackObject
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  onPlaybackStatusUpdate = playbackStatus => {
    if (this._isMounted) {
      this.setState({
        isBuffering: playbackStatus.isBuffering
      })
    }

    if (playbackStatus.didJustFinish && !(playbackStatus.isLooping)) {
      if (this._isMounted) {
        this.setState({
          isPlaying: !(this.state.isPlaying)
        })
      }

      this.playbackObject.unloadAsync() && this.loadAudio()
    }
  }

  handlePlayPause = async () => {
    this.state.isPlaying ?
      await this.playbackObject.pauseAsync() :
      await this.playbackObject.playAsync()

    if (this._isMounted) {
      this.setState({
        isPlaying: !(this.state.isPlaying)
      })
    }
  }

  handleStop = async () => {
    this.state.playbackObject = null ?
      await this.playbackObject.stopAsync()
      &&
      (this.setState({
        isPlaying: !(this.state.isPlaying)
      }))
      &&
      this.playbackObject.unloadAsync()
      &&
      this.loadAudio()
      :
      await this.playbackObject.stopAsync()

    if (this._isMounted) {
      this.setState({
        isPlaying: null
      })
    }
  }

  render() {
    return (
      <ScrollView style={Styles.scrollContainer}>
        <Image key={this.state.id} style={Styles.imageSize} source={this.state.image} />
        <View style={Styles.container}>
          <TouchableOpacity style={Styles.buttonStyle} onPress={this.handlePlayPause}>
            {this.state.isPlaying ? (
              <FontAwesome name="pause" size={35} color={Colors.black} />
            ) : (
                <FontAwesome name="play" size={35} color={Colors.black} />
              )}
          </TouchableOpacity>
          <TouchableOpacity style={Styles.buttonStyle} onPress={this.handleStop}>
            <FontAwesome name="stop" size={35} color={Colors.black} />
          </TouchableOpacity>
        </View>
        <View style={Styles.textContainer}>
          <Highlighter
            highlightStyle={Styles.boldTextStyle}
            style={Styles.textStyle}
            searchWords={BoldWords}
            textToHighlight={this.state.description} />
        </View>
      </ScrollView>
    )
  }
}