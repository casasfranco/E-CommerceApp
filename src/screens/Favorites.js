import React, { useCallback, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import StatusBar from "../components/StatusBar";
import Search from "../components/Search";
import useAuth from "../hooks/useAuth";
import { getFavoriteApi } from "../api/favorite";
import colors from "../styles/colors";

export default function Favorites() {
  const [products, setProducts] = useState(null);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const response = await getFavoriteApi(auth);
        console.log(response);
      })();
    }, [])
  );

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle="light-content" />
      <Search />
      <View style={styles.container}>
        <Text>Estamos en la favorites</Text>
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
