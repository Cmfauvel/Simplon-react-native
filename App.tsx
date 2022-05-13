import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainContainer from "./src/routes/MainNavigation";
// import Navigation from "./src/routes/Navigation";
// import Home from "./src/screens/Home";

export default function App() {
  return (
    <>
      <MainContainer />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
