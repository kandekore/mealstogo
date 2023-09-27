//import React, { useContext } from "react";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//import { Text, Button } from "react-native";

import { SafeArea } from "../../components/utility/safe-area.component";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";

import { MapScreen } from "../../features/map/screens/map.screen";
//import { AuthenticationContext } from "../../services/authentication/authentication.context";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

// const Settings = () => {
//   const { onLogout } = useContext(AuthenticationContext);
//   return (
//     <SafeArea>
//       <Text>Settings</Text>
//       <Button title="logout" onPress={() => onLogout()} />
//     </SafeArea>
//   );
// };

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ size, color }) => (
              <Ionicons name={TAB_ICON[route.name]} size={size} color={color} />
            ),
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              display: "flex",
            },
            headerShown: false, // Add this line to hide the header
          })}
        >
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);

