import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import ListFooter from "../components/ListFooter";
import { action_ressource } from "../store/types/actions.type";

const Bugs = () => {
  const bugs = useSelector((state: any) => state.bugsReducer.bugs);
  const [maxCount, setMaxCount] = React.useState<number>(5);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <h1>Bugs</h1>
      </Text>
      {bugs.map((bug: action_ressource["payload"]) => {
        return (
          <Card
            key={bug.id}
            title={bug.title}
            description={bug.description}
            author={bug.author}
            categories={bug.categories}
          ></Card>
        );
      })}
      <ListFooter
        count={bugs.length}
        visibleCount={bugs.length > 5 ? maxCount : bugs.length}
        showMore={async () => setMaxCount(maxCount + 5)}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {},
  title: {
    color: "#54A487",
    width: "80%",
    marginLeft: "10%",
  },
});
export default Bugs;
