import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import Giant from "../../components/Giant";
console.disableYellowBox = true;
import * as Font from "expo-font";

export default class AllGiantsScreen extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      "amatic-sc": require("../../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../../assets/fonts/Satisfy-Regular.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <Text style={styles.giantText}>GO FIND A GIANT</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MapScreen")}
          >
            <Giant
              style={styles.giant}
              location="HØJE TAASTRUP"
              image={require("../../assets/images/teddynew.png")}
            />
          </TouchableOpacity>
          <Giant
            location="ISHØJ"
            image={require("../../assets/images/Oscar.png")}
          />
          <Giant
            style={styles.giant}
            location="GLOSTRUP"
            image={require("../../assets/images/Louis.png")}
          />
          <Giant
            style={styles.giant}
            location="VALLENSBÆK"
            image={require("../../assets/images/Tilde.png")}
          />
          <Giant
            style={styles.giant}
            location="ALBERTSLUND"
            image={require("../../assets/images/Thomas.png")}
          />
          <Giant
            style={styles.giant}
            location="AVEDØRE"
            image={require("../../assets/images/Trine.png")}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48972C"
  },
  giantText: {
    fontFamily: "amatic-sc",
    fontSize: 60,
    color: "white",
    marginTop: "15%"
  },
  giant: {}
});
