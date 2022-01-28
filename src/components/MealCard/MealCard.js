import React from "react";
import { View,Text, TouchableWithoutFeedbackComponent, Image, StyleSheet  } from "react-native";
const MealCard = ({onSelect,meals}) => {
    return(
        <TouchableWithoutFeedbackComponent onPress={onSelect}>

        <View style={styles.container}>
        <Image style={styles.image} source={{ uri: meals.strMealThumb }} />
            <Text style={styles.title}>
                {meals.strMeal}
            </Text>
        </View>
        </TouchableWithoutFeedbackComponent>
    )
}
export default MealCard;
const styles = StyleSheet.create({
    container:{
        
        flex:1,

    },
    image:{with:100,
    height:100},
    title:{}
})