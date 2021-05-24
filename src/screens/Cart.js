import React, { useState, useCallback } from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import StatusBar from "../components/StatusBar";
import ScreenLoading from "../components/ScreenLoading";
import NotProducts from "../components/Cart/NotProducts";
import ProductList from "../components/Cart/ProductList";
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
        <KeyboardAwareScrollView extraScrollHeight={25}>
          <ScrollView style={styles.cartContainer}>
            <ProductList cart={cart} />
          </ScrollView>
        </KeyboardAwareScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    padding: 10,
  },
});
