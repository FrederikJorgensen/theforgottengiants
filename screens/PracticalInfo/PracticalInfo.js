import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
  ListView
} from "react-native";
import * as Font from "expo-font";
import { OrangeButton } from "../../components/Buttons/OrangeButton";

export default class PracticalInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.h1}> Public transport </Text>
        <Text style={styles.text}>
            Høje Taastrup St. {"\n"}
              - S-tog B {"\n"}
              - Bus 150
        </Text>
        <Text style={styles.h1}> Parking </Text>
          <Text style={styles.text}>
              Giantvej 100
          </Text>
        <View>
          <OrangeButton
            btnText='Back'
            onPress={() => this.props.navigation.navigate("MapScreen")}>
          </OrangeButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1:{
    fontSize: 50,
    fontFamily: 'amatic-sc'
  },
  text: {
    fontSize: 35,
    marginTop: 15,
    textAlign: "justify",
    fontFamily: "amatic-sc"
  },
  container: {
    flex: 1,
    backgroundColor: "#48972C",
    alignItems: "center",
    justifyContent: "center"
  }
});
