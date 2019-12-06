import React, { Component } from "react"
import { Text, View, ScrollView } from "react-native"
import { Transport } from "../../components/Transport/Transport"
import ImageData from "../../data/ImageData"
import Styles from "./TransportInfoStyles"
import Colors from "../../constants/colors"

export default class TransportInfoScreen extends Component {

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.green
      }
    }
  }

  render() {
    const { navigation } = this.props
    const transport = navigation.getParam("transport")
    
    return (
      <ScrollView style={Styles.containerScroll}>
        <View style={Styles.container}>
          <Text style={Styles.headline}> Public transport and parking </Text>
          <Text style={Styles.textStyle}> Your options </Text>
          <Transport
            image={ImageData.trainImage}
            description={"Take train " + transport.stog + " to " + transport.station}>
          </Transport>
          <Transport
            image={ImageData.busImage}
            description={"Take bus " + transport.bus + " to " + transport.busAddress}>
          </Transport>
          <Transport
            image={ImageData.carImage}
            description={"Park your car at " + transport.parking}>
          </Transport>
        </View>
      </ScrollView>
    )
  }
}