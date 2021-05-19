import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-paper";
import { map } from "lodash";
import colors from "../../styles/colors";
import { API_URL } from "../../utils/constants";

export default function ProductList(props) {
  const { products } = props;

  const goToProduct = (id) => {
    console.log("Cargar producto --> " + id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>RESULTADOS</Text>
      {map(products, (product) => (
        <TouchableWithoutFeedback
          key={product._id}
          onPress={() => {
            goToProduct(product._id);
          }}
        >
          <Text>{product.title}</Text>
        </TouchableWithoutFeedback>
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
