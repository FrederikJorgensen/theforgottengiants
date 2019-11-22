import React, { Component } from "react";
import { Text, View, ScrollView, Image } from "react-native";
import Styles from "./PracticalInfoStyles";
import Colors from "../../constants/colors";
import { Transport } from "../../components/Transport/Transport";


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
          <Text style={Styles.text}> {transport.station} </Text>
          <Transport
            img={require("../../assets/images/train.png")}
            desc={transport.stog}>
          </Transport>
          <Transport
            img={require("../../assets/images/bus.png")}
            desc={transport.bus}>
          </Transport>
          <Text style={Styles.h1}> Parking </Text>
          <Transport
            img={require("../../assets/images/car.png")}
            desc={transport.parking}>
          </Transport>
        </View>
      </ScrollView>
    );
  }
}
