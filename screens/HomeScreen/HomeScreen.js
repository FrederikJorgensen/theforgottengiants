import React from "react";
import { Text, View, ImageBackground, ActivityIndicator, TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import Styles from "./HomeStyles";
import Colors from "../../constants/colors";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerMode: 'none',
    header: null
  };

  state = {
    assetsLoaded: false
  };

  async componentDidMount() {
    await Asset.loadAsync([require("../../assets/images/bg.png")]);

    await Font.loadAsync({
      "amatic-sc": require("../../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../../assets/fonts/Satisfy-Regular.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    const { assetsLoaded } = this.state;

    if (assetsLoaded) {
      return (
        <ImageBackground
          source={require("../../assets/images/bg.png")}
          style={Styles.imageBackground}
        >
          <View style={Styles.container}>
            <Text style={Styles.title}>The Forgotten Giants</Text>
            <TouchableOpacity
              style={Styles.customBtnBG}
              onPress={() => this.props.navigation.navigate("AllGiantsScreen")}
            >
              <Text style={Styles.customBtnText}>Begin!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <View style={Styles.container}>
          <ActivityIndicator size="large" color={Colors.orange} />
        </View>
      );
    }
  }
}