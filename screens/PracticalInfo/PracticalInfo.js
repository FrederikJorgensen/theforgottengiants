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
          <Text style={Styles.h1}> Public transport </Text>
          <Text style={Styles.text}> {transport.station} </Text>
          <Transport
            img={ImageData.trainImage}
            desc={transport.stog}>
          </Transport>
          <Transport
            img={ImageData.busImage}
            desc={transport.bus}>
          </Transport>
          <Text style={Styles.h1}> Parking </Text>
          <Transport
            img={ImageData.carImage}
            desc={transport.parking}>
          </Transport>
        </View>
      </ScrollView>
    );
  }
}
