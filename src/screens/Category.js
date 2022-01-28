import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIE_URL } from "@env";
import useFetchData from "../hook/useFetchData"
import CategorieCard from  "../components/CategoryCard/CategorieCard"


export default function Category({ navigation }) {
  const { data, loading, error } = useFetchData(CATEGORIE_URL);

  const handlerCategories = (strCategory) => {
    navigation.navigate("Meals", { strCategory });
  };


  const renderCategories = ({ item }) => (
    <CategorieCard
      categorie={item}
      onSelect={() => handlerCategories(item.strCategory)}
    />
  );
  return (
    <FlatList
      style={styles.container}
      data={data.categories}
      renderItem={renderCategories}
      keyExtractor={(item) => item.idCategory}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fea500",
    flex: 1,
  },
});