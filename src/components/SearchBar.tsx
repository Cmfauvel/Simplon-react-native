import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="white" />
      <TextInput style={styles.searchInput} placeholder="Rechercher..." />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "#99D2BD",
    borderRadius: 8,
    width: 325,
    marginTop: 15,
    marginLeft: 46,
    display: "flex",
    flexDirection: "row",
    paddingTop: 11,
    paddingLeft: 11,
    paddingRight: 11,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
    color: "white",
  },
});
export default SearchBar;
