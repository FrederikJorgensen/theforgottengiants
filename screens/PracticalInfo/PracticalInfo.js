import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Styles from "./styles";
import Colors from "../../constants/colors";

export default class PracticalInfo extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.green
      }
    };
  };

  render() {
    const { navigation } = this.props;
    const transport = navigation.getParam("transport");
    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.container}>
          <Text style={Styles.h1}> Public transport </Text>
          <Text style={Styles.text}>
            {transport.station} {"\n"}- S-tog: {transport.stog} {"\n"}- Bus:{" "}
            {transport.bus}
          </Text>
          <Text style={Styles.h1}> Parking nearby </Text>
          <Text style={Styles.text}>{transport.parking}</Text>
        </View>
      </ScrollView>
    );
  }
}
