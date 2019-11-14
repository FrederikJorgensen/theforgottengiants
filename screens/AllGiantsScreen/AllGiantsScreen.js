import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import Giant from "../../components/Giant/Giant";
import styles from "./AllGiantsStyles";
console.disableYellowBox = true;
import * as Font from "expo-font";
import giants from "../../data/giants";

class AllGiantsScreen extends React.Component {
  state = {
    // giants: [
    //   {
    //     id: 1,
    //     name: "Teddy",
    //     location: "HØJE TAASTRUP",
    //     image: require("../../assets/images/Teddy.png")
    //   },
    //   {
    //     id: 2,
    //     name: "Oscar Under The Bridge",
    //     location: "Ishøj",
    //     image: require("../../assets/images/Oscar.png")
    //   },
    //   {
    //     id: 3,
    //     name: "Sleeping Louis",
    //     location: "Glostrup",
    //     image: require("../../assets/images/Louis.png")
    //   },
    //   {
    //     id: 4,
    //     name: "Little Tilde",
    //     location: "Vallensbæk",
    //     image: require("../../assets/images/Tilde.png")
    //   },
    //   {
    //     id: 5,
    //     name: "Thomas on The Mountain",
    //     location: "Albertslund",
    //     image: require("../../assets/images/Thomas.png")
    //   },
    //   {
    //     id: 6,
    //     name: "Trine",
    //     location: "Avedøre",
    //     image: require("../../assets/images/Trine.png")
    //   }
    // ]
  };

  async componentDidMount() {
    await Font.loadAsync({
      "amatic-sc": require("../../assets/fonts/amatic-sc.ttf"),
      "Satisfy-Regular": require("../../assets/fonts/Satisfy-Regular.ttf")
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    console.log(giants);
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.giantText}>GO FIND A GIANT</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("MapScreen")}
          >
            {giants.map(giant => (
              <Giant
                style={styles.giant}
                name={giant.name}
                location={giant.location}
                image={giant.image}
                key={giant.id}
              />
            ))}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default AllGiantsScreen;
