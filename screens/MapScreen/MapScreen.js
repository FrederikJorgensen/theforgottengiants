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
        backgroundColor: Colors.green
      }
    };
  };

  constructor(props) {
    super(props);
    const region = this.props.navigation.getParam("region");
    this.getUserPosition = this.getUserPosition.bind(this);
    this.state = {
      distance: 0,
      userLatitude: 0,
      userLongitude: 0,
      giantLatitude: region.latitude,
      giantLongitude: region.longitude
    };
  }

  componentDidMount() {
    this.getUserPosition();
    setInterval(() => this.getUserPosition(), 3000);
  }

  getUserPosition() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const userLatitude = position.coords.latitude;
        const userLongitude = position.coords.longitude;
        this.setState({ userLatitude, userLongitude });
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );

    let dis = getDistance(
      {
        latitude: this.state.giantLatitude,
        longitude: this.state.giantLongitude
      },
      {
        latitude: this.state.userLatitude,
        longitude: this.state.userLongitude
      }
    );
    this.setState({ distance: dis });
  }

  render() {
    const { navigation } = this.props;
    const { distance } = this.state;
    const name = navigation.getParam("name");
    const km = distance / 1000;
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
          <MapView.Marker
            coordinate={{
              latitude: this.state.userLatitude,
              longitude: this.state.userLongitude
            }}
          />
        </MapView>
        <View style={styles.bottom}>
          <ScrollView style={styles.containerScroll}>
            <Text style={styles.distanceText}>
              You are {distance > 1000 ? km.toFixed(1) + "km" : distance} away
              from {name}
            </Text>
            <DefaultButton
              btnText="rewards"
              onPress={() => this.props.navigation.navigate("RewardCollection")}
            ></DefaultButton>
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
              }
            ></DefaultButton>
            <DefaultButton
              btnText="TEST OF COLOR"
              onPress={() => {}}
              color={Colors.yellow}
            ></DefaultButton>
          </ScrollView>
        </View>
      </View>
    );
  }
}
