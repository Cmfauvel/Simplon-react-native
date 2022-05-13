import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >

        <TouchableOpacity
          style={styles.secondPartBackgroundColor}
          onPress={() => {}}
        >
          <Text
            style={styles.textStyle}
          >
            LES RESSOURCES
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.thirdPartBackgroundColor}
          onPress={() => {}}
        >
          <Text
            style={styles.textStyle}
          >
            HELP SECTION
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  secondPartBackgroundColor: {
    backgroundColor: "#54A487",
    paddingVertical: 20,
    borderRadius: 5,
    alignnotes: "center",
    width: 325,
    height: 100,
    marginTop: 130,

    textAlign: "center",
  },
  thirdPartBackgroundColor: {
    backgroundColor: "#54A487",
    paddingVertical: 20,
    borderRadius: 5,
    textAlign: "center",
    width: 325,
    height: 100,
    marginTop: 72,
  },

  textStyle: {
    color: "white",
    fontSize: 18,
    paddingTop: 18,
  },
});
export default Home;
