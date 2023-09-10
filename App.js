import { StatusBar as ExpoStatusBar } from "expo-status-bar";
//import React from "react";
import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
//import { NavigationContainer } from "@react-navigation/native";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons}  from "@expo/vector-icons/";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";


const firebaseConfig = {
  apiKey: "AIzaSyCb5JH2pKBDGK6EymLiTLak7aqsCGPtfq4",
  authDomain: "mealstogo-6c50f.firebaseapp.com",
  projectId: "mealstogo-6c50f",
  storageBucket: "mealstogo-6c50f.appspot.com",
  messagingSenderId: "933672444882",
  appId: "1:933672444882:web:a803b9de6b5bc486835e0b",
  measurementId: "G-LPCT04BPWS"
};
const app = initializeApp(firebaseConfig);

//const auth = initializeAuth(app, {
 // persistence: getReactNativePersistence(ReactNativeAsyncStorage)
//});

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { SafeArea } from "./src/components/utility/safe-area.component";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, "mo@binni.io", "test123")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
}, []);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;


  return (
    <>
      <ThemeProvider theme={theme}>
      <FavouritesContextProvider>
      <LocationContextProvider>
          <RestaurantsContextProvider>
          <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}