import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
//import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import styled from "styled-components/native"


export const RestaurantsScreen = () => (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          
          <RestaurantInfo />
        </View>
      </SafeAreaView>
      </SafeAreaProvider>
      
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight
    },
    search: {
      padding: 16
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "blue"
    }
  });
  