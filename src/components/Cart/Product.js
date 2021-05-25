import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { Button, IconButton } from "react-native-paper";
import { deleteProductCartApi } from "../../api/cart";
import { API_URL } from "../../utils/constants";
import colors from "../../styles/colors";

export default function Product(props) {
  const { setReloadCart } = props;

  const deleteProductCard = async () => {
    const response = await deleteProductCartApi(product._id);
    if (response) setReloadCart(true);
  };

  const { product } = props;
  return (
    <View style={styles.product}>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={{ uri: `${API_URL}${product.main_image.url}` }}
        />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.name} numberOfLines={3} ellipsizeMode="tail">
            {product.title}
          </Text>

          <View style={styles.prices}>
            {product.price_with_discount && (
              <Text style={styles.oldPrice}>Precio unitario: </Text>
            )}
            {product.price_with_discount && (
              <Text style={styles.oldPrice}>${product.price}</Text>
            )}
          </View>

          <View style={styles.prices}>
            <Text style={styles.fromUnits}>
              Llevando {product.discount_from_units} ud. o más:{" "}
            </Text>
            <Text style={styles.currentPrice}>
              ${product.price_with_discount}
            </Text>
          </View>
        </View>

        <View style={styles.btnsCountainer}>
          <View style={styles.selectQuantity}>
            <IconButton
              icon="plus"
              color="#fff"
              size={23}
              style={styles.btnQuantity}
            />
            <TextInput
              style={styles.inputQuantity}
              value={product.quantity.toString()}
            />
            <IconButton
              icon="minus"
              color="#fff"
              size={23}
              style={styles.btnQuantity}
            />
          </View>
          <Button
            color="#b12704"
            mode="contained"
            onPress={deleteProductCard}
            style={styles.btnDelete}
          >
            Eliminar
          </Button>
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
    marginRight: 5,
  },
  image: {
    height: "100%",
    resizeMode: "contain",
  },
  info: {
    padding: 10,
    width: "60%",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
  },
  prices: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "flex-end",
    flexWrap: "wrap",
  },
  fromUnits: {
    fontSize: 16,
    marginRight: 20,
  },
  currentPrice: {
    fontSize: 24,
    color: "#b12704",
  },
  oldPrice: {
    marginTop: 10,
    fontSize: 14,
    color: "#747474",
  },
  btnsCountainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  selectQuantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnQuantity: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    margin: 0,
  },
  inputQuantity: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  btnDelete: {
    marginVertical: 20,
  },
});
