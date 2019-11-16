import React from "react";
import {
  Text,
  View,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import styles from "./HomeScreenStyles";

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
          style={styles.imageBackground}
        >
          <View style={styles.container}>
            <Text style={styles.title}>The Forgotten Giants</Text>
            <TouchableOpacity
              style={styles.customBtnBG}
              onPress={() => this.props.navigation.navigate("AllGiantsScreen")}
            >
              <Text style={styles.customBtnText}>Begin!</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    } else {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#D48104" />
        </View>
      );
    }
  }
}
