import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import AddBug from "../screens/AddBug";
import AddRessource from "../screens/AddRessource";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens

//Screen names
const homeName = "Home";
const addBug = "Trouver une solution";
const addRessource = "Ajouter une ressource";

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
              } else if (rn === addBug) {
                iconName = focused ? "list" : "list-outline";
              } else if (rn === addRessource) {
                iconName = focused ? "settings" : "settings-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name={homeName} component={Home} />
          <Tab.Screen name={addRessource} component={AddRessource} />

          <Tab.Screen name={addBug} component={AddBug} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default MainContainer;
