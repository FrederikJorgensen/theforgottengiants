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
      latitude: 55.662811,
      longitude: 12.562363,
      latitudeDelta: 0.1022,
      longitudeDelta: 0.1021
    }
  };

  render() {
    return (
      <View style={styles.container}>
<<<<<<< Updated upstream
        <MapView style={styles.mapStyle} initialRegion={this.state.region}>
=======
        <MapView
          style={styles.mapStyle}
          initialRegion={this.state.region}
          showsUserLocation={true}>
>>>>>>> Stashed changes
          <MapView.Circle
            center={this.state.region}
            radius={175}
            strokeWidth={2}
            strokeColor="#D48104"
            fillColor="rgba(83, 106, 225, 0.51)"
          />
        </MapView>
        <View style={styles.bottom}>
          <YellowButton
            btnText="Practical info"
            onPress={() => this.props.navigation.navigate("PracticalInfo")}
          ></YellowButton>
          <OrangeButton
            btnText="Next >"
            onPress={() => this.props.navigation.navigate("RewardScreen")}
          ></OrangeButton>
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
