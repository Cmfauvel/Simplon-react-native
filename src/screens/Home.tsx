import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MainContainer from "../routes/MainNavigation";
import { RouteParams } from "../routes/Navigation";

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  return (
    <>
      <View style={styles.button}>
        <Button
          color="#54A487"
          title="Les ressources"
          onPress={() => navigation.navigate("Ressources")}
        />
      </View>
      <View style={styles.button}>
        <Button
          color="#54A487"
          title="Demander de l'aide"
          onPress={() => navigation.navigate("Question")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 280,
    top: 180,
    height: 100,
    left: 40,
    borderRadius: 20,
  },
});
