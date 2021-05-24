import React from "react";
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { API_URL } from "../../utils/constants";
import colors from "../../styles/colors.js";

export default function Product(props) {
  const { item } = props;
  return (
    <View style={styles.product}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{ uri: `${API_URL}${item.product.main_image.url}` }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#dadde1",
  },
  containerImage: {
    width: "40%",
    height: 200,
    borderRadius: 15,
    shadowColor: "black",
    borderColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  image: {
    height: "100%",
    resizeMode: "contain",
  },
});
