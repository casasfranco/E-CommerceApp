import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import StatusBar from "../components/StatusBar";
import { getProductCartApi } from "../api/cart";
import colors from "../styles/colors";

export default function Cart() {
  const [cart, setCart] = useState(null);

  useFocusEffect(
    useCallback(() => {
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
      <View style={styles.container}>
        <Text>Estamos en la CART</Text>
      </View>
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
