import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import AddBug from "../screens/AddBug";
import AddRessource from "../screens/AddRessource";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import RoussourceLisning from "../screens/RoussourceLisning";
import BugListingScreen from "../screens/BugLisningScreen";

// Screens

//Screen names
const homeName = "Home";
const Question = "Chercher une solution";
const addBug = "Poser une question";
const addRessource = "Ajouter une ressource";
const Ressources = "ressources";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: any;
              let rn = route.name;

              if (rn === homeName) {
                iconName = focused ? "home" : "home-outline";
              } else if (rn === Question) {
                iconName = focused ? "list" : "list-outline";
              } else if (rn === addRessource) {
                iconName = focused ? "share-social" : "share-social-outline";
              } else if (rn === Ressources) {
                iconName = focused ? "wallet" : "wallet-outline";
              } else if (rn === addBug) {
                iconName = focused ? "help" : "help-outline";
              }
              return <Ionicons name={iconName} size={size} color="#54A487" />;
            },
          })}
        >
          <Tab.Screen name={homeName} component={Home} />
          <Tab.Screen name={addRessource} component={AddRessource} />
          <Tab.Screen name={Ressources} component={RoussourceLisning} />
          <Tab.Screen name={addBug} component={AddBug} />
          <Tab.Screen name={Question} component={BugListingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MainContainer;
