import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import Toast from "react-native-root-toast";
import { addProductCartApi } from "../../api/cart";

export default function Buy(props) {
  const { product, quantity } = props;

  const addProductCart = async () => {
    let subTotal = 0;
    if (quantity >= product.discount_from_units) {
      subTotal = quantity * product.price_with_discount;
    } else {
      subTotal = quantity * product.price;
    }

    const response = await addProductCartApi(
      product._id,
      quantity,
      product.price,
      product.discount_from_units,
      product.price_with_discount,
      subTotal
    );

    if (response) {
      Toast.show("Producto añadido al carrito", {
        position: Toast.positions.CENTER,
      });
    } else {
      Toast.show("Error al añadir el producto al carrito", {
        position: Toast.positions.CENTER,
      });
    }
  };

  return (
    <View style={{ zIndex: 1 }}>
      <Button
        mode="contained"
        contentStyle={styles.btnBuyContent}
        labelStyle={styles.btnLabel}
        style={styles.btn}
        onPress={addProductCart}
      >
        Añadir al carrito
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btnBuyContent: {
    backgroundColor: "#008fe9",
    paddingVertical: 5,
  },
  btnLabel: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
  },
});
