import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import styles from "./styles";
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
      <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Text style={styles.h1}> Public transport </Text>
        <Text style={styles.text}>
          {transport.station} {"\n"}- S-tog: {transport.stog} {"\n"}- Bus:{" "}
          {transport.bus}
        </Text>
        <Text style={styles.h1}> Parking nearby </Text>
        <Text style={styles.text}>{transport.parking}</Text>
        <View>
          <DefaultButton
            btnText="Back"
            onPress={() => this.props.navigation.navigate("MapScreen")}>
          </DefaultButton>
        </View>
      </View>
    </ScrollView>
    );
  }
}
