import react from "react";
import {Text, StyleSheet} from "react-native";
import { Card } from "react-native-paper";

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
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0]}} />
            <Text style={styles.title}>{name}</Text>
        </Card>
    )
}



const styles = StyleSheet.create({
    card: { backgroundColor: "white"},
    cover: { padding: 20, backgroundColor: "white"},
    title: { padding: 16},
})