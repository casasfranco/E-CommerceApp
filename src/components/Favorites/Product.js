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
      <View style={styles.info}>
        <View>
          <Text style={styles.name} numberOfLines={3} ellipsizeMode="tail">
            {item.product.title}
          </Text>
          <View style={styles.price}>
            <Text style={styles.fromUnits}>
              Llevando {item.product.discount_from_units} ud. o más:{" "}
            </Text>
            <Text style={styles.currentPrice}>
              ${item.product.price_with_discount}
            </Text>
          </View>
          <View style={styles.price}>
            {item.product.price_with_discount && (
              <Text style={styles.oldPrice}>Antes: </Text>
            )}
            {item.product.price_with_discount && (
              <Text style={styles.oldPrice}>${item.product.price}</Text>
            )}
          </View>
        </View>
        <View style={styles.btnsContainer}>
          <Button mode="contained" color={colors.primary}>
            Ver producto
          </Button>
          <IconButton
            icon="close"
            color="#fff"
            size={16}
            style={styles.btnDelete}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
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
  info: {
    padding: 20,
    width: "60%",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
  },
  price: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "flex-end",
  },
  fromUnits: {
    fontSize: 14,
  },
  currentPrice: {
    fontSize: 20,
  },
  oldPrice: {
    marginLeft: 7,
    fontSize: 14,
    color: "#747474",
    textDecorationLine: "line-through",
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "100%",
  },
  btnDelete: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    margin: 5,
    width: 60,
    height: 32,
  },
});
