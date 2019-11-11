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
import { YellowButton } from "../../components/Buttons/YellowButton";

export default class MapScreen extends React.Component {
  state = {
    region: {
      latitude: 55.661838,
      longitude: 12.266058,
      latitudeDelta: 0.0122,
      longitudeDelta: 0.0121
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={this.state.region}>
          <MapView.Circle
            center={this.state.region}
            radius={175}
            strokeWidth={2}
            strokeColor="#D48104"
            fillColor="#48972C"
          />
        </MapView>
        <View style={styles.bottom}>
          <YellowButton
            btnText="Practical info"
            onPress={() => this.props.navigation.navigate("PracticalInfo")}>
          </YellowButton>
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
  textStyle: {
    fontFamily: "amatic-sc",
    fontSize: 35,
    marginTop: 5
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    flex: 3
  }
});
