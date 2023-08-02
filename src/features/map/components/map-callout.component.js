import React from "react";
import styled, {Text} from "styled-components/native";


const MyText = styled.Text``;

export const MapCallout = ({ restaurant }) => (
  <MyText>{restaurant.name}</MyText>
);
