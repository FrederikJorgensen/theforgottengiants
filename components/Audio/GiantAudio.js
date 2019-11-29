import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";

export default class GiantAudio extends React.Component {

    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
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
            <TouchableOpacity
                style={{ ...Styles.buttonStyle, ...{ backgroundColor: backgroundColor } }}
                onPress={this.handlePress}>
                <Text style={Styles.buttonText}> {btnText} </Text>
            </TouchableOpacity>
        );
    }
}