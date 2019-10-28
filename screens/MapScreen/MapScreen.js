import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import MapView from "react-native-maps";

export default class MapScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} />
        <View style={styles.bottom}>
          <Text>NEAREST TRAIN STATION: {this.props.location}</Text>
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
    flex: 1
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: 100,
    flex: 2
  }
});
