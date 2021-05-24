import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import StatusBar from "../components/StatusBar";
import ScreenLoading from "../components/ScreenLoading";
import NotProducts from "../components/Cart/NotProducts";
import { getProductCartApi } from "../api/cart";
import colors from "../styles/colors";

export default function Cart() {
  const [cart, setCart] = useState(null);

  useFocusEffect(
    useCallback(() => {
      setCart(null);
      loadCart();
    }, [])
  );

  const loadCart = async () => {
    const response = await getProductCartApi();
    setCart(response);
  };

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      {!cart ? (
        <ScreenLoading size="large" text="Cargando carrito" />
      ) : size(cart) === 0 ? (
        <NotProducts />
      ) : (
        <Text>Listado de productos del carrito</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
