import React from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import MapView from "react-native-maps";
import { DefaultButton } from "../../components/Buttons/DefaultButton";
import { getDistance } from "geolib";
import Styles from "./MapStyles";
import Colors from "../../constants/colors";
import monthNames from "../../constants/monthNames";

export default class MapScreen extends React.Component {
  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.green
      }
    };
  };

  _isMounted = false;

  constructor(props) {
    super(props);
    const region = this.props.navigation.getParam("region");
    this.getUserPosition = this.getUserPosition.bind(this);
    this.getTime = this.getTime.bind(this);
    this.getOrdinalNum = this.getOrdinalNum.bind(this);
    this.minutesWithLeadingZeros = this.minutesWithLeadingZeros.bind(this);
    this.state = {
      distance: 0,
      distanceLoaded: false,
      userLatitude: 0,
      userLongitude: 0,
      giantLatitude: region.latitude,
      giantLongitude: region.longitude,
      giantName: this.props.navigation.getParam("name"),
      giantFirstname: this.props.navigation.getParam("firstname"),
      giantDesc: this.props.navigation.getParam("desc"),
      giantId: this.props.navigation.getParam("id"),
      transport: this.props.navigation.getParam("transport"),
      image: this.props.navigation.getParam("image"),
      date: ""
    };
  }

  componentDidMount() {
    this._isMounted = true;
    this.getUserPosition();
    interval = setInterval(() => this.getUserPosition(), 2000);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 60 * 60 * 24
      });
    });
  };

  async getUserPosition() {
    try {
      const { coords } = await this.getCurrentPosition();
      if (this._isMounted) {
        this.setState({
          userLatitude: coords.latitude,
          userLongitude: coords.longitude,
          distanceLoaded: true
        });
      }
    } catch (error) {
      console.error(error);
    }
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
    if (this._isMounted) {
      this.setState({ distance: dis });
    }

    if (this.state.distance < 1000000000000 && this.state.distance !== 0) {
      this.getTime();
      this.props.navigation.navigate("RewardScreen", {
        name: this.state.giantName,
        firstname: this.state.giantFirstname,
        desc: this.state.giantDesc,
        giantId: this.state.giantId,
        date: this.state.date,
        image: this.state.image
      });
      clearInterval(interval);
    }
  }

  getTime() {
    const now =
      this.getOrdinalNum(new Date().getDate()) +
      " OF " +
      monthNames[new Date().getMonth()] +
      " at " +
      new Date().getHours() +
      ":" +
      this.minutesWithLeadingZeros(new Date().getMinutes());

    if (this._isMounted) {
      this.setState({
        date: now
      });
    }
  }

  getOrdinalNum(n) {
    return (
      n +
      (n > 0
        ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
        : "")
    );
  }

  minutesWithLeadingZeros(m) {
    m = new Date();
    return (m.getMinutes() < 10 ? "0" : "") + m.getMinutes();
  }

  render() {
    const { navigation } = this.props;
    const { distance, distanceLoaded } = this.state;
    const firstname = navigation.getParam("firstname");
    const km = distance / 1000;
    return (
      <View style={Styles.container}>
        <MapView
          style={Styles.mapStyle}
          initialRegion={this.state.region}
          showsUserLocation={true}
          followUserLocation={true}
          initialRegion={this.props.navigation.getParam("region")}
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
        <View style={Styles.bottom}>
          <ScrollView style={Styles.containerScroll}>
            {distanceLoaded ? (
              <View style={Styles.container}>
                <Text style={Styles.distanceText}>
                  {firstname} is{" "}
                  {distance > 1000 ? km.toFixed(1) + " km " : distance + "m "}away
              </Text>
              </View>
            ) : (
                <View style={Styles.container}>
                  <Text style={Styles.distanceText}>
                    Loading the distance to {firstname}...
                </Text>
                  <ActivityIndicator size="small" color="#00ff00" />
                </View>
              )}
            <DefaultButton
              backgroundColor={Colors.yellow}
              btnText="How to get there?"
              onPress={() =>
                this.props.navigation.navigate("PracticalInfo", {
                  transport: this.state.transport
                })
              }
            ></DefaultButton>
          </ScrollView>
        </View>
      </View>
    );
  }
}
