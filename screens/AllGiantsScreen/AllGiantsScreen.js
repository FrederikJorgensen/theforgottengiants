import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import Giant from "../../components/Giant/Giant"
import GiantsData from "../../data/GiantsData"
import Styles from "./AllGiantsStyles"

export default class AllGiantsScreen extends Component {

  static navigationOptions = {
    headerMode: "none",
    header: null
  }

  render() {
    const { navigation } = this.props

    const rewardFound = GiantsData.filter(reward => reward.isFound === true)
    const rewardNotFound = GiantsData.filter(reward => reward.isFound === false)

    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.container}>
          <Text style={Styles.giantTextStyle}>GO FIND A GIANT</Text>

          {rewardFound.map(giantFound => (
            <TouchableOpacity
              key={giantFound.id}
              onPress={() =>
                navigation.navigate("RewardScreen", {
                  id: giantFound.id,
                  name: giantFound.name,
                  firstname: giantFound.firstname,
                  location: giantFound.location,
                  image: giantFound.image,
                  description: giantFound.description,
                  audio: giantFound.audio,
                  address: giantFound.address,
                  transport: giantFound.transport,
                  region: giantFound.region,
                  isFound: giantFound.isFound
                })
              }>
              <Giant
                style={Styles.giant}
                name={giantFound.name}
                location={giantFound.location}
                image={giantFound.image}
                isFound={giantFound.isFound} />
            </TouchableOpacity>
          ))}

          {rewardNotFound.map(giant => (
            <TouchableOpacity
              key={giant.id}
              onPress={() =>
                navigation.navigate("MapScreen", {
                  id: giant.id,
                  name: giant.name,
                  firstname: giant.firstname,
                  location: giant.location,
                  image: giant.image,
                  description: giant.description,
                  audio: giant.audio,
                  address: giant.address,
                  transport: giant.transport,
                  region: giant.region,
                  isFound: giant.isFound
                })
              }>
              <Giant
                style={Styles.giant}
                name={giant.name}
                location={giant.location}
                image={giant.image}
                isFound={giant.isFound} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
  }
}