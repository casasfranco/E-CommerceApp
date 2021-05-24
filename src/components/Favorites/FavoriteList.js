import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import Product from "./Product";
import { map } from "lodash";

export default function FavoriteList(props) {
  const { products } = props;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lista de favoritos</Text>
      {map(products, (item) => (
        <Product key={item._id} item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 5,
  },
});
