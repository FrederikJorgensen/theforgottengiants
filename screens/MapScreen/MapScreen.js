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
  state = {

  };

  async getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
        position => {
        let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: 0.0322,
                longitudeDelta: 0.0221
            };

        this.setState({
            initialRegion: region
          });
        },

        error => console.log(error),
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000
        }
    );
}

componentDidMount(){
 this.getCurrentLocation();
}

goToInitialLocation() {
    let initialRegion = Object.assign({}, this.state.initialRegion);
    initialRegion["latitudeDelta"] = 0.005;
    initialRegion["longitudeDelta"] = 0.005;
    this.mapView.animateToRegion(initialRegion, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={this.state.region}
          followUserLocation={true}
          ref={ref => (this.mapView = ref)}
          zoomEnabled={true}
          showsUserLocation={true}
          onMapReady={this.goToInitialLocation.bind(this)}
          initialRegion={this.state.initialRegion}
        />
        <View style={styles.bottom}>
          <Text style={styles.textStyle}> Public transport: Ishøj st. </Text>
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
