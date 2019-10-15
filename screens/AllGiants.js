import React from "react";
import { Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Giant from "../components/Giant";
console.disableYellowBox = true;

export default class AllGiants extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      "amatic-sc": require("../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../assets/fonts/Satisfy-Regular.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#48972C" }}>
        <Text style={styles.container}>GO FIND A GIANT</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("MapScreen")}
        >
          <Giant
            location="HØJE TAASTRUP"
            image={require("../assets/images/teddynew.png")}
          />
        </TouchableOpacity>
        <Giant location="ISHØJ" image={require("../assets/images/Oscar.png")} />
        <Giant
          location="GLOSTRUP"
          image={require("../assets/images/Louis.png")}
        />
        <Giant
          location="VALLENSBÆK"
          image={require("../assets/images/Tilde.png")}
        />
        <Giant
          location="ALBERTSLUND"
          image={require("../assets/images/Thomas.png")}
        />
        <Giant
          location="AVEDØRE"
          image={require("../assets/images/Trine.png")}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "amatic-sc",
    fontSize: 60,
    color: "white",
    marginLeft: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
