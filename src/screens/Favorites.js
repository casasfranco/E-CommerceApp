import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import StatusBar from "../components/StatusBar";
import Search from "../components/Search";
import ScreenLoading from "../components/ScreenLoading";
import useAuth from "../hooks/useAuth";
import { getFavoriteApi } from "../api/favorite";
import colors from "../styles/colors";

export default function Favorites() {
  const [products, setProducts] = useState(null);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      setProducts(null);
      (async () => {
        const response = await getFavoriteApi(auth);
        setProducts(response);
      })();
    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search />
      {!products ? (
        <ScreenLoading text="Cargando lista" />
      ) : size(products) === 0 ? (
        <View style={styles.container}>
          <Text style={styles.title}>Lista de favoritos</Text>
          <Text>No tienes productos en tu lista</Text>
        </View>
      ) : (
        <Text>LISTADO .....</Text>
      )}
    </>
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
