import react from "react";
import {Text, StyleSheet} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native"

const RestaurantCard = styled(Card)`
background-color: yellow;`;
const Title = styled.Text`
padding: ${(props) => props.theme.space[2]};
color: ${(props) => props.theme.colors.ui.primary};

`;
const RestaurantCardCover = styled(Card.Cover)`
background-color: ${(props) => props.theme.colors.bg.primary};
padding: ${(props) => props.theme.space[2]};`


export const RestaurantInfo = ({restaurant ={}}) => {
    const {
        name = 'Some Restaurant',
        icon,
        photos = ["https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"],
        address = "100 Some random street",
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily,
    } = restaurant;
    return (
        <RestaurantCard >
            <RestaurantCardCover source={{ uri: photos[0]}} />
            <Title >{name}</Title>
        </RestaurantCard>
    )
}



/*const styles = StyleSheet.create({
    card: { backgroundColor: "white"},
    cover: { padding: 20, backgroundColor: "white"},
    title: { padding: 16},
}) */