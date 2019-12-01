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
                  address: giant.address,
                  transport: giant.transport,
                  region: giant.region,
                  isFound: giant.isFound
                })
              }
            >
              <Giant
                style={Styles.giant}
                name={giant.name}
                location={giant.location}
                image={giant.image}
                isFound={giant.isFound}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default AllGiantsScreen;
