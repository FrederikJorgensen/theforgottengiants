import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Giant from "../../components/Giant/Giant";
import GiantsData from "../../data/GiantsData";
import Styles from "./AllGiantsStyles";

class AllGiantsScreen extends React.Component {
  static navigationOptions = {
    headerMode: "none",
    header: null
  };

  isGiantFound() {
    if (GiantsData.found == true) {
      <ImageBackground
        style={Styles.Giant}
        source={this.props.navigation.getParam("image")}
      >
        <SmallReward />
      </ImageBackground>;
    }
  }

  render() {
    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.container}>
          <Text style={Styles.giantText}>GO FIND A GIANT</Text>

          {GiantsData.map(giant => (
            <TouchableOpacity
              key={giant.id}
              onPress={() =>
                this.props.navigation.navigate("MapScreen", {
                  id: giant.id,
                  name: giant.name,
                  firstname: giant.firstname,
                  location: giant.location,
                  image: giant.image,
                  desc: giant.desc,
                  audio: giant.audio,
                  address: giant.address,
                  transport: giant.transport,
                  region: giant.region
                })
              }
            >
              <Giant
                style={Styles.giant}
                name={giant.name}
                location={giant.location}
                image={giant.image}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default AllGiantsScreen;
