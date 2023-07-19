import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";
//import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import styled from "styled-components/native"

const SafeArea = styled(SafeAreaView)`
flex: 1;
${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
    padding: 16px;
`;

const RestaurantListContainer = styled.View`
flex: 1;
padding: 16px;
backgroundColor: red;
`;


export const RestaurantsScreen = () => (
    
    <SafeArea>
        <SearchContainer>
          <Searchbar />
        </SearchContainer>
        <RestaurantListContainer >
          
          <RestaurantInfo />
        </RestaurantListContainer>
      </SafeArea>
     
      
);

/*const styles = StyleSheet.create({
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
  });*/
  