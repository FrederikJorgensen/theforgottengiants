import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ProgressBarAndroid
} from "react-native";
import MapView from "react-native-maps";
import { OrangeButton } from "../../components/Buttons/OrangeButton";
import { YellowButton } from "../../components/Buttons/YellowButton";
import { getDistance } from 'geolib';

export default class MapScreen extends React.Component {
  state = {
    distance: 0,
    region: {
      latitude: 55.662811,
      longitude: 12.562363,
      latitudeDelta: 0.1022,
      longitudeDelta: 0.1021
    }
  };

  getDistanceFromUserToGiant = () => {
     var dis = getDistance(
       { latitude: 55.662811, longitude: 12.562363 },
       { latitude: 55.670382, longitude: 12.524393 }
     );
     this.setState({distance: dis})
   };

     componentWillMount(){
       this.getDistanceFromUserToGiant()
     }


  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={this.state.region}
          showsUserLocation={true}
          followUserLocation={true}>
          <MapView.Circle
            center={this.state.region}
            radius={175}
            strokeWidth={2}
            strokeColor="#D48104"
            fillColor="rgba(83, 106, 225, 0.51)"
          />
        </MapView>
        <View style={styles.bottom}>
          <Text style={styles.distanceText}> You are {this.state.distance} meters away from the Giant </Text>
          <YellowButton
            btnText="How to get there?"
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
  },
  distanceText: {
    fontSize: 30,
    fontFamily: "amatic-sc",
    marginTop: 5,
    alignItems: 'center'


  }
});
