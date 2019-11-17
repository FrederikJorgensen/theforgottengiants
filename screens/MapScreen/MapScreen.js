import React from "react";
import { View, Text, ScrollView } from "react-native";
import MapView from "react-native-maps";
import { YellowButton } from "../../components/Buttons/YellowButton";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { getDistance } from "geolib";
import styles from "./MapScreenStyles";
import Colors from "../../constants/colors";

export default class MapScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.green,
      }
    };
  };

  state = {
    distance: 0
  };

  getDistanceFromUserToGiant = () => {
    var dis = getDistance(
      { latitude: 55.661788, longitude: 12.266105 },
      { latitude: 55.670382, longitude: 12.524393 }
    );
    this.setState({ distance: dis });
  };

  componentWillMount() {
    this.getDistanceFromUserToGiant();
  }

  render() {
    const { navigation } = this.props;
    const { distance } = this.state;
    const name = navigation.getParam("name");
    return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={this.state.region}
          showsUserLocation={true}
          followUserLocation={true}
          initialRegion={navigation.getParam("region")}
          showsUserLocation={true}
        >
          <MapView.Circle
            center={navigation.getParam("region")}
            showUserLocation={true}
            radius={275}
            strokeWidth={4}
            strokeColor={Colors.strokeColorCircle}
            fillColor={Colors.fillColorCircle}
          />
        </MapView>
        <View style={styles.bottom}>
          <ScrollView style={styles.containerScroll}>
            <Text style={styles.distanceText}>
              {" "}
              You are {this.state.distance} meters away from the Giant{" "}
            </Text>
            <YellowButton
              btnText="How to get there?"
              onPress={() => this.props.navigation.navigate("PracticalInfo")}
            ></YellowButton>
            <DefaultButton
              btnText={"Click if you found " + name}
              onPress={() =>
                this.props.navigation.navigate("RewardScreen", {
                  name: navigation.getParam("name"),
                  desc: navigation.getParam("desc")
                })
              }></DefaultButton>
            <DefaultButton
              btnText="TEST OF COLOR"
              onPress={() => { }} color={Colors.yellow}
            ></DefaultButton>
          </ScrollView>
        </View>
      </View>
    );
  }
}