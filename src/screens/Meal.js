import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import useFetchData from "../hook/useFetchData"
import { MEAL_URL } from "@env";
import MealCard from "../components/MealCard/MealCard"


export default function Meals({ route, navigation }) {
  const { strCategory } = route.params;
  console.log(strCategory)

  const { data, loading, error } = useFetchData(`${MEAL_URL}${strCategory}`);

  const handlerMeals = (idMeal) => {
    navigation.navigate("Details", { idMeal });
  };

  const renderMeals = ({ item }) => (
    <MealCard meals={item} onSelect={() => handlerMeals(item.idMeal)} />
  );
  return (
    <FlatList
      style={styles.container}
      data={data.meals}
      renderItem={renderMeals}
      keyExtractor={(item) => item.idMeal}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fea500",
    flex: 1,
  },
});