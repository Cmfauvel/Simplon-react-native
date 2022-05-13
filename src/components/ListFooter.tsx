import * as React from "react";
import { StyleSheet, View, Text, Button, Alert } from "react-native";
import { FeatherIcon } from "./Icon";
import Resources from '../screens/Ressources';

interface ListFooterProps {
  count?: number;
  visibleCount?: number;
}

const ListFooter: React.FC<ListFooterProps> = (props: ListFooterProps) => {
    const showMore = () => {
        Alert.alert('Left button pressed')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>
        {props.visibleCount} of {props.count} results
      </Text>
        <Text style={styles.button} onPress={showMore}>Show More</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  button: {
    borderColor: "#54A487",
    borderWidth: 1,
    backgroundColor: "white",
    color: "#54A487",
    padding: 10,
    cursor: "pointer"
  },
  countText: {
    color: "#54A487",
    opacity: 0.6,
    padding: 5
  },
});

export default ListFooter;
