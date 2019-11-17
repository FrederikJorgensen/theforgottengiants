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
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import styles from "./styles";
import Colors from "../../constants/colors";

export default class PracticalInfo extends Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.green,
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}> Public transport </Text>
        <Text style={styles.text}>
          Høje Taastrup St. - 10 minutes walk {"\n"}- S-tog B {"\n"}- Bus 150
        </Text>
        <Text style={styles.h1}> Parking nearby </Text>
        <Text style={styles.text}>Giantvej 100</Text>
        <View>
          <DefaultButton
            btnText="Back"
            onPress={() => this.props.navigation.navigate("MapScreen")}
          ></DefaultButton>
        </View>
      </View>
    );
  }
};
