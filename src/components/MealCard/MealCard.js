import React from "react";
import { View,Text, TouchableWithoutFeedback, Image, StyleSheet  } from "react-native";
const MealCard = ({onSelect,meals}) => {
    return(
        <TouchableWithoutFeedback onPress={onSelect}>

        <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meals.strMealThumb }} />
            <Text style={styles.title}>
                {meals.strMeal}
            </Text>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default MealCard
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight:'bold'
    }
})