import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import MapView from "react-native-maps";
import { OrangeButton } from "../../components/Buttons/OrangeButton";

export default class MapScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
        <View style={styles.bottom}>
          <Text>NEAREST TRAIN STATION: Ishøj st. </Text>
          <OrangeButton
            btnText='Next >'
            onPress={() => this.props.navigation.navigate("RewardScreen")}>
          </OrangeButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48972C",
    alignItems: "center",
    justifyContent: "center"
  },
  bottom: {
    fontFamily: "amatic-sc",
    fontSize: 20,
    flex: 1,
    marginLeft: 7
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 100,
    flex: 2
  }
});
