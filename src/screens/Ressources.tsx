import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import ListFooter from "../components/ListFooter";
import ressourceReducer from "../store/reducers/ressources.reducer";
import { action_ressource } from "../store/types/actions.type";

const Resources = () => {
  const resources = useSelector(
    (state: any) => state.ressourceReducer.ressource
  );
  console.log(resources);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <h1>Ressources</h1>
      </Text>
      {resources.map((resource: action_ressource["payload"]) => {
        return (
          <Card
            key={resource.id}
            title={resource.title}
            description={resource.description}
            url={resource.url}
            author={resource.author}
            categories={resource.categories}
          ></Card>
        );
      })}
      <ListFooter count={resources.length} visibleCount={3} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  title: {
    color: "#54A487",
    width: "80%",
    marginLeft: "10%"
  },
});
export default Resources;
