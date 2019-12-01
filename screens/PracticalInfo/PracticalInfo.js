import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Transport } from "../../components/Transport/Transport";
import ImageData from "../../data/ImageData";
import Styles from "./PracticalInfoStyles";
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
          <Text style={Styles.h1}> Public transport and parking </Text>
          <Text style={Styles.text}> Your options </Text>
          <Transport
            img={require("../../assets/images/train.png")}
            desc={"Take train " + transport.stog + " to " + transport.station}>
          </Transport>
          <Transport
            img={require("../../assets/images/bus.png")}
            desc={"Take bus " + transport.bus + " to " + transport.busAddress}>
          </Transport>
          <Transport
            img={require("../../assets/images/car.png")}
            desc={"Park your car at " + transport.parking}>
          </Transport>
        </View>
      </ScrollView>
    );
  }
}
